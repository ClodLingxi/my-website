import React from 'react'
import {Concept, ConceptData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "运动学",
        explain: "其研究物体的运动，而不考虑引起这种运动的力",
    },
    {
        name: "连杆",
        explain: "刚性连杆",
    },
    {
        name: "关节",
        explain: "用于连接各个连杆"
    },
    {
        name: "关节角",
        explain: "转动关节时候，该关节的位移",
        front_log: ['关节']
    },
    {
        name: "关节偏移量",
        explain: "滑动关节（或移动关节）时，两个相邻连杆的相对位移",
        front_log: ['关节', '连杆']
    },
    {
        name: "自由度",
        explain: "操作臂中具有独立位置变量的数目"
    },
    {
        name: "工具坐标系",
        explain: "以末端执行器为原点（组成操作壁的运动链的自由端）",
        front_log: ["自由度"]
    },
    {
        name: "基坐标系",
        explain: "设置于操作臂固定底座的坐标系"
    },
    {
        name: "雅可比矩阵",
        explain: "定义了从关节空间速度向笛卡尔空间速度的映射"
    },
    {
        name: "位置",
        explain: "^A"
    },
]
