import React from 'react'
import {Concept, ConceptData, TheoremData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "随机试验",
        explain: `该试验满足以下3个条件，
        - 可以在**相同条件**下重复进行，
        - 每次试验可能**结果不唯一**，并能事先确定所有种结果，
        - 进行试验时**不能确定**哪个结果出现，
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
        property_list: [
            '事件$A与\\overline{B}$，事件$\\overline{A}与B$，事件$\\overline{A}与\\overline{B}$都互相独立',
            '设随机事件$A$，若$P(A)=0或1$，则其与其它任意一个随机事件相独立'
        ]
    },
    {
        name: "完备事件组",
        explain: `设随机试验E的样本空间为$S. A_1,A_2,...,A_n$为一组随机事件
        满足：
            1. 事件组$A_1,A_2,...,A_n$两两互斥
            2. $\\displaystyle\\bigcup_{i=1}^nA_i=S$`,
    },
    {
        name: "古典概型",
        explain: `满足如下两个条件的随机试验：
        （1）：样本空间S中只有有限个样本点，
        （2）：样本空间S中每个样本点发生的概率相同`,
        front_log: ['随机试验', '样本空间']
    },
    {
        name: "几何概型",
        explain: `满足如下两个条件的随机试验：
        （1）：样本空间S为可度量的有界空间，
        （2）：样本点出现在S的可度量的子区域上的概率与该区域的**几何度量**成正比`,
        front_log: ['随机试验', '样本空间']
    },
    {
        name: "伯努利概型",
        explain: `满足如下三个条件的随机试验：
        （1）：相同条件下试验可重复进行，
        （2）：每次试验只有两种可能的结果$A$与$\\overline{A}$，
        （3）：每次试验$A$与$\\overline{A}$发生的概率不变`,
        front_log: ['随机试验', '样本空间']
    },
    {
        name: "随机变量",
        explain: `设随机试验的样本空间为$S={e}$, 
        $X=X(e)$是定义在样本空间S上的实值单值函数，
        则称$X=X(e)$为随机变量
        分布函数：$F(x)=P\\{X<=\\x}=P\\{X\\in (-\\infty,x]\\}$`,
        front_log: ['随机试验', '样本空间']
    },
    {
        name: "离散型随机变量",
        explain: `可能取到的值时有限个或可列无限多个的随机变量$X$，
        分布律：$P\\{X\\=x_i}=p_i(i=1,2,\\cdots)$
        注：
            （1）分布函数$F(x)=P\\{X<=x\\}$为阶梯函数
            （2）$P\\{X=a\\}=F(a)-F(a-0)$`,
        front_log: ['随机变量']
    },
    {
        name: "连续性随机变量",
        explain: `存在非负，可积的函数$f(x)$，
        满足分布函数$F(X)=\\int^x_{-\\infty}f(t)dt$
        其中：$f(x)称为随机变量X的概率密度函数或概率密度$
        注：
            （1）已知分布函数$F(X)=\\int^x_{-\\infty}f(t)dt$，则$F(x)$连续但不一定可导
            （2）$P\\{X=a\\}=F(a)-F(a-0)=**0**$
            （3）$f(x)=$$$
                \\begin{cases}
                F^\`(x),x为F(x)的可导点
                0,x为F(x)的不可导点
                \\end{cases}
            $$
            （4）存在既不是离散型随机变量（因为$F(x)$不是阶梯函数）也不是连续型随机变量（因为$F(x)$有间断点）的随机变量`,
        front_log: ['随机变量', '离散型随机变量'],
        other_name: ['概率密度']
    },
    {
        name: "(0-1)分布",
        explain: `随机变量$X只能取0与1两个值$
        分布律：$P\\{X=k\\}=p^k(1-p)^{1-k}, k=0,1 (0<p<1)$
        记：$X \\sim B(1,p)$`,
        front_log: ['随机变量'],
        other_name: ['伯努利分布']
    },
    {
        name: "二项分布",
        explain: `符合(0-1)分布的随机试验$E$
        独立重复地进行n次 且 事件A发生k次的试验
        分布律：$P\\{X=k\\}=\\binom{n}{k}p^k(1-p)^{n-k},k=0,1,2,\\cdots,n,0<p<1$
        记：$X \\sim B(n,p)$
        `,
        front_log: ['(0-1)分布', '随机试验'],
        other_name: ['n重伯努利试验']
    },
    {
        name: "泊松分布",
        explain: `设随机变量$X$取值范围为0,1,2,...，
        分布律：$P\\{X=k\\}=\\frac{\\lambda^ke^{-\\lambda}}{k!},k=0,1,2,\\cdots$
        记：X \\sim P(\\lambda)`,
    },
    {
        name: "几何分布",
        explain: `设离散型随机变量$X$,
        分布律：$P\\{X=k\\}=p(1-p)^{k-1}$
        记：$X \\sim G(p)$`,
    },
    {
        name: "超几何分布????",
        explain: `设离散型随机变量$X$,
        分布律：$P\\{X=k\\}=\\frac{C^k_M \\cdot C^{n-k}_{N-M}}{C^n_N}
        （其中：$M,N,k,n$为自然数，$M<=N,n<=N,max\\{n-N+M,0\\}<=k<=min\\{M,n\\}$）$
        记：$X \\sim H(n,M,N)$`,
    },
    {
        name: "均匀分布",
        explain: `连续性随机变量$X$，
        密度函数：$f(x)=\\begin{cases}\\frac{1}{b-a},a<=x<=b\\\\\\\\0, 其他\\end{cases}$
        分布函数：$F(x)=\\begin{cases}0,x<a\\\\\\\\\\frac{x-a}{b-a},a<=x<=b\\\\\\\\1,x>=b\\end{cases}$
        记：在区间$(a,b)$内服从均匀分布，$X\\sim U(a,b)$`,
        front_log: ['连续性随机变量']
    },
    {
        name: "指数分布",
        explain: `连续性随机变量$X$，
        密度函数：`,
    },
    {
        name: "正态分布",
        explain: `连续性随机变量$X$，
        密度函数：$f(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{x^2}{2}}(-\\infty<x<+\\infty)$
        记：$X \\sim N(\\mu,\\sigma)
        特别的：
            若$\\mu =0,\\sigma =1，称其为标准正态分布，X\\sim N(0,1)$
            密度函数：\\varphi(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{x^2}{2}}(-\\infty<x<+\\infty)
            记：$X \\sim N(0,1)$，记分布函数$\\Phi=\\int^x_{-\\infty}\\varphi(t)dt$
            上$\\alpha$分位????：$P\\{X>z_{\\alpha}\\}=\\alpha,0<\\alpha<1$，称位`,
        other_name: ['高斯分布'],
        property_list: [
            '若为标准正态分布，则$\\Phi(0)=\\frac{1}{2}, \\Phi(-a)=1-\\Phi(a)$',
            '若为正态分布，则$P\\{X<=\\mu\\}=P\\{X>\\mu\\}=frac{1}{2}$',
            '若为正态分布，则$\\frac{X-\\mu}{\\sigma}\\sim N(0,1)$',
            '若为正态分布，则$P\\{a<X<=b\\}=F(b)-F(a)=\\Phi(\\frac{b-\\mu}{\\sigma})-\\Phi(\\frac{a-\\mu}{\\sigma})$',
            '若为正态分布，则$\\Phi(a)+\\Phi(b)\\begin{cases}<1,a+b<0,\\\\\\\\=1,a+b=0,\\\\\\\\>1,a+b>0,\\end{cases}$'
        ]
    }
];

const theoremData: TheoremData[] = [
    {
        name: "全概率公式",
        explain: "",
        front_log: ['设事件组$A_1,A_2,...,A_n$为完备试验组', 'B为任意事件'],
        back_log: ['$P(B)=\\displaystyle\\sum_{i=1}^nP(A_i)P(B|A_i)$'],
    },
    {
        name: "贝叶斯公式",
        front_log: ['设事件组$A_1,A_2,...,A_n$为完备试验组', 'B为任意随机事件'],
        back_log: ['$P(A_i|B)=\\frac{P(A_i)P(B|A_i)}{P(B)}$', '其中i<=i<=n'],
    },
]
