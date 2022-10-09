import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

//给传来的形参规定具体的类型（接口相当于说明书）
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  console.log("param1", param);
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
              // personId:Number(users.find(user=>user.name===evt.target.value)?.id)
            });
          }}
        />
        <select
          value={param.personId}
          onChange={(evt) => {
            const val = Number(evt.target.value);
            setParam({
              ...param,
              personId: evt.target.value,
              // name:users.find(user=>user.id===val)?.name
            });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((users) => (
            <option key={users.id} value={users.id}>
              {users.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
