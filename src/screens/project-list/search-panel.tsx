/*
 * @Author: tj
 * @Description:
 * @Date: 2022-10-11 14:16:27
 */
import { Input, Select } from "antd";
import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
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
  return (
    <form>
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />
        <Select
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((users) => (
            <Select.Option key={users.id} value={users.id}>
              {users.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};
