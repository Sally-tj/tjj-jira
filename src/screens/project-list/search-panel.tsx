/*
 * @Author: tj
 * @Description: 项目搜索列表
 * @Date: 2022-10-11 14:16:27
 */
import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";

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
  const [listOption, setListOption] = useState<object[]>([]);

  useEffect(() => {
    listOptionHandel();
  }, [users]);

  const listOptionHandel = () => {
    let listOptionData = users.map((item: any) => ({
      value: item.id,
      label: item.name,
    }));
    listOptionData.unshift({ value: "", label: "负责人" });
    setListOption(listOptionData);
  };

  return (
    <Form layout="inline" style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />
      </Form.Item>
      <Form.Item>
        <Select
          style={{ width: "10rem" }}
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
          options={listOption}
        />
      </Form.Item>
    </Form>
  );
};
