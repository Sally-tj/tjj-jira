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
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* 通过personId查找，显示name */}
            {/* find返回的可能是undefined */}
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未 知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
