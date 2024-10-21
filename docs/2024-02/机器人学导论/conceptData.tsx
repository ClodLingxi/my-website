import React from 'react'
import {Concept, ConceptData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "右手定则",
        explain: `四指x，拇指z，四指弯曲y`,
    },
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
        explain: `^AP=(p_x p_y p_z)`,
        other_name: ['位置矢量'],
    },
    {
        name: "姿态",
        explain: `设$\\hat{X_B},\\hat{Y_B},\\hat{Z_B}$为坐标系$\\{B\\}$主轴方向的单位矢量
        以坐标$A$为参考系，则为：$\\hat{^AX_B},\\hat{^AY_B},\\hat{^AZ_B}$
        则有旋转矩阵：
        $^A_BR=(^A\\hat{X}_B ^A\\hat{Y}_B ^A\\hat{Z}_B)=$
        $$
        \\begin{matric}
            r_{11} & r_{12} & r_{13} \\\\\\\\
            r_{21} & r_{22} & r_{23} \\\\\\\\
            r_{31} & r_{32} & r_{33} \\\\\\\\
        \\end{matric}
        $$
        满足：$^A_BR=^B_AR^{-1}=^B_AR^T$`,
        other_name: ['旋转矩阵'],
    },
    {
        name: "位姿",
        explain: `位姿可由：一个位置矢量+一个旋转矩阵表示
        即用$^A_BR,^AP_{BORG}$（其中$^AP_{BORG}$确定位姿{B}的原点的位置矢量）
        记：$\\{B\\}={^A_BR,^AP_{BORG}}$`,
        front_log: ['位置', '姿态']
    },
    {
        name: "坐标平移",
        explain: `$^AP=^BP+^AP_{BORG}$（其中^AP_{BORG}为平移向量）`,
    },
    {
        name: "坐标旋转",
        explain: `$^AP=^A_BR^BP$`,
    },
    {
        name: "一般变换",
        explain: `$^AP=^A_BR^BP+^AP_{BORG}$
        令：齐次变化$^A_BT=$$$
        \\begin{matric} 
        ^A_BR & ^P_{BORG} \\\\\\\\ 
        [0]_3 & 1 
        \\end{matric}
        $$
        有：$^AP=^A_BT^BP$`,
    },
    {
        name: "平移算子",
        explain: `令：$D_Q(q)=$$$
        \\begin{matric}
        1 & 0 & 0 & q_x \\\\\\\\
        0 & 1 & 0 & q_y \\\\\\\\
        0 & 0 & 1 & q_z \\\\\\\\
        \\end{matric}$$。
        故：^AP_2=D_Q(q)^AP_1`,
    },
    {
        name: "旋转算子",
        explain: `令R_K(\\theta)=$$$
        \\begin{matric}
        \\cos \\theta & -\\sin \\theta & 0 & 0 \\\\\\\\
        \\sin \\theta & \\cos \\theta & 0 & 0 \\\\\\\\
        0 & 0 & 1 & 0 \\\\\\\\
        0 & 0 & 0 & 1 \\\\\\\\
        \\end{matric}
        $$，表示绕$\\hat{K}$轴旋转$\\theta$ 角度`,
    },
    {
        name: "变换算子",
        explain: `同理与一般变换`,
        front_log: ['一般变换']
    },
    {
        name: "复合变换????",
        explain: `设旋转算子：$^A_BR,^B_CR$
        平移算子：$^BP_{CORG}, ^AP_{BORG}$
        复合变换：$^A_CT=$$$
        \\begin{matric} 
        ^A_BR^B_CR & ^B_AR^P_{BORG} + ^B_C \\\\\\\\ 
        [0]_3 & 1 \\\\\\\\                
        \\end{matric}
        $$`,
    },
    {
        name: "Z-Y-X欧拉角????",
        explain: `$^A_BR_{Z^\`Y^\`X^\`}(\\alpha,\\beta,\\gamma)=$$$
        
        $$`
    },
    {
        name: "等效角度——轴线表示法",
        explain: `设矢量\\hat{K}为等效轴。
        {B}相对于{A}的一般姿态可用^A_BR(\\hat{K},\\theta)表示，
        等效旋转矩阵为：
            $R_K(\\theta)=$$$
            \\begin{matric} 
                           
            \\end{matric}
            $$
        `,
    }
]
