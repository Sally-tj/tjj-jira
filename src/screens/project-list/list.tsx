/*
 * @Author: tj
 * @Description: 项目列表
 * @Date: 2022-10-11 14:16:27
 */
import { Table } from "antd";
import React from "react";
import { User } from "./search-panel";

interface Project {
  id: string;
  personId: string;
  name: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  users: User[];
  list: Project[];
}

export const List = ({ users, list }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user: User) => user.id === project.personId)
                  ?.name || "未 知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    ></Table>
  );
};
