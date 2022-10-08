/*
 * @Author: tj
 * @Description: 主页面
 * @Date: 2022-09-01 14:13:21
 */
import React from 'react';
import {useState,useEffect} from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import {cleanObject} from '../utils/index'
import  qs from 'qs'

//执行npm start 就是本地开发（.env.development）
//执行npm run build 就是上线（.env）
const apiUrl=process.env.REACT_APP_API_URL

export const  ProjectListScreen=()=>{
    const [users,setUsers]=useState([])//展示所有的负责人
    const [param,setParam]=useState({name:'',personId:''})//搜索面板参数
    const [list,setList]=useState([])//返回筛选的负责人
    //fetch（‘url’）.then,fetch获取接口,返回一个promise，所以需要then来处理
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param])
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        }) 
    },[])
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}