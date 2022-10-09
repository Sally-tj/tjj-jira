//处理对象的空值

import { useEffect, useState } from "react";

//！value：表示对value取反；！！value：表示把value转化成布尔值
export const isFalsy = (value) => (value === 0 ? true : !value);
//在一个函数里，改变传入的对象本身是不好的（不要污染传入的对象）
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key]; //拿到key对应的value
    //排除value为0的情况(0为有效的值，不能delete)
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

//useMount（Custom Hook）
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

//useDebounce(Custom Hook)
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次在上一个useEffect处理完后才运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
