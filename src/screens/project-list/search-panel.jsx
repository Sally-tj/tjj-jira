import React from 'react';

export const SearchPanel=({users,param,setParam})=>{
    console.log("param1",param);
    // console.log("users",users);
    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt=>{
                setParam({
                    ...param,
                    name:evt.target.value,
                    // personId:Number(users.find(user=>user.name===evt.target.value)?.id)
                })
            }}/>
            <select value={param.personId} onChange={evt=>{
                const val = Number(evt.target.value)
                setParam({
                    ...param,
                    personId:evt.target.value,
                    // name:users.find(user=>user.id===val)?.name
                })
            }}>
                <option value={''}>负责人</option>
                {
                    users.map(users=><option key={users.id} value={users.id}>{users.name}</option>)
                }
            </select>
        </div>
    </form>
}