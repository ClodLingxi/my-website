import React from 'react'
import {Concept, ConceptData, TheoremData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "随机试验",
        explain: `该试验满足以下3个条件
        - 可以在**相同条件**下重复进行
        - 每次试验可能**结果不唯一**，并能事先确定所有种结果
        - 进行试验时**不能确定**哪个结果出现
        `,
        other_name: ['试验']
    },
    {
        name: "样本空间",
        explain: `随机试验$E$的所有可能结果组成的集合，记为$S$或$\\Omega$
        样本点：样本空间的元素，即$E$的每个结果
        注：
            1. 样本点为最基本结果，具有**不可再分性**
            2. 样本空间包括所有可能的基本结果，具有**完备性**
            3. 同一基本结果在样本空间只出现一次`,
        front_log: ['随机试验'],
        other_name: ['样本点']
    },
    {
        name: "随机事件",
        explain: `随机试验$E$的样本空间$S$的子集，
        为$E$的随机事件，简称事件，
        基本事件：该子集为一个样本的组成的样本点，
        不可能事件：$\\emptyset$ ，
        必然事件：$\\Omega$ `,
        front_log: ['随机试验', '样本空间'],
        other_name: ['事件']
    },
    {
        name: "事件的积",
        explain: `事件A与事件B同时发生的事件，称为事件A，B的积事件，
        记：$AB$或$A\\cap B$`,
        front_log: ['随机事件']
    },
    {
        name: "事件的和",
        explain: `事件A或事件B发生的事件，称为事件A，B的和事件，
        记：$A+B$或$A\\cup B$`,
        front_log: ['随机事件']
    },
    {
        name: "事件的差",
        explain: `事件A发生而事件B不发生的事件，称为事件A，B的差事件，
        记：$A-B$`,
        front_log: ['随机事件']
    },
    {
        name: "事件的补",
        explain: `事件A不发生的事件，称为事件A的补事件，
        记：$\\overline{A}$`,
        front_log: ['随机事件']
    },
    {
        name: "事件的包含",
        explain: `事件A发生时事件B一定发生，称事件A包含于事件B，
        记：$A\\subset B$
        事件的相等：$A\\subset B \\land $B\\subset A$$ 则$A=B$`,
        front_log: ['随机事件'],
        other_name: ['事件的相等']
    },
    {
        name: "互斥事件",
        explain: `事件A，B不可能同时发生，称事件A，B不相容或互斥`,
        front_log: ['随机事件'],
        other_name: ['不相容事件']
    },
    {
        name: "对立事件",
        explain: `事件A，B为互斥事件，但至少一个发生，称事件A，B为对立事件
        此时$A\\sub B=\\Omega$`,
        front_log: ['随机事件', '互斥事件']
    },
    {
        name: "事件独立",
        explain: `设随机事件$A,B$，若$P(AB)=P(A)P(B)$，
        则称事件$A,B$相互独立`,
        other_name: ['独立'],
    },
    {
        name: "随机变量",
        explain: `设随机试验的样本空间为$S={e}$, $X=X(e)$是定义在样本空间S上的实值单值函数，则称$X=X(e)$为随机变量`,
        front_log: ['随机试验', '样本空间']
    },
    {
        name: "离散型随机变量",
        explain: "可能取到的值时有限个或可列无限多个的随机变量",
        front_log: ['随机变量']
    },
    {
        name: "(0-1)分布",
        explain: `随机变量$X只能取0与1两个值$
        分布律：$P\\{X=k\\}=p^k(1-p)^{1-k}, k=0,1 (0<p<1)$
        `,
        front_log: ['随机变量'],
        other_name: ['伯努利分布']
    },
    {
        name: "二项分布",
        explain: `符合(0-1)分布的随机试验$E$
        独立重复地进行n次 且 事件A发生k次的试验
        分布律：$P\\{X=k\\}=\\binom{n}{k}p^k(1-p)^{n-k}$
        记：$X \\sim b(n,p)$
        `,
        front_log: ['(0-1)分布', '随机试验'],
        other_name: ['n重伯努利试验']
    },
    {
        name: "泊松分布",
        explain: `设随机变量$X$取值范围为0,1,2,...
        分布律：$P\\{X=k\\}=\\frac{\\lambda^ke^{-\\lambda}}{k!},k=0,1,2...$
        记：`,
    }
];

const theoremData: TheoremData[] = [
    {
        name: "",
        explain: "",
        front_log: [],
        back_log: [],
    }
]
