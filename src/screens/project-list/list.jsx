import React from 'react';

export const List=({users,list})=>{
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project=><tr key={project.id}>
                    <td>{project.name}</td>
                    {/* 通过personId查找，显示name */}
                    {/* find返回的可能是undefined */}
                    <td>{ users.find(user=>user.id===project.personId)?.name||'未 知'}</td>
                </tr>)
            }
        </tbody>
    </table>
} 