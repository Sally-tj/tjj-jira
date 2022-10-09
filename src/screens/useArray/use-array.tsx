import React from "react";
import { useArray, useMount } from "../utils/index";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "tj", age: 18 },
    { name: "tjj", age: 19 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {});
  return (
    <div>
      {/* 点击后增加tj */}
      <button onClick={() => add({ name: "tj", age: 18 })}>add tj</button>
      {/* 点击后删除第一项 */}
      <button onClick={() => removeIndex(0)}>remove 0</button>
      {/* 点击以后清空列表 */}
      <button onClick={() => clear()}>clear</button>
      {value.map((persons: { name: string; age: number }, index: number) => {
        return (
          <div>
            <span>{index}</span>
            <span>{persons.name}</span>
            <span>{persons.age}</span>
          </div>
        );
      })}
    </div>
  );
};
