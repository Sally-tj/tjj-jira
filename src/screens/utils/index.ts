/*
 * @Author: tj
 * @Description: 清除空对象
 * @Date: 2022-10-11 14:16:27
 */
//处理对象的空值
import { useEffect, useState } from "react";

//！value：表示对value取反；！！value：表示把value转化成布尔值
export const isFalsy = (value: unknown) => (value === 0 ? true : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";
//在一个函数里，改变传入的对象本身是不好的（不要污染传入的对象）
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key]; //拿到key对应的value
    //排除value为0的情况(0为有效的值，不能delete)
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

//useMount（Custom Hook）
export const useMount = (callback: any) => {
  useEffect(() => {
    callback();
    //依赖项里加callback会造成无限循环，这个和useCallback以及useMemo有关系
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

//useDebounce(Custom Hook)
//用泛型来规范类型
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次在上一个useEffect处理完后才运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

//实现增删数组数据
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
