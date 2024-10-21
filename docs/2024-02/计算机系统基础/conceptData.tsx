import React from 'react'
import {Concept, ConceptData, TheoremData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "字长",
        explain: `指明指针数据的标称大小，
        w位机器，虚拟地址范围：$0~2^w-1$，
        32位：超过$4X10^9$，
        64位：大约$1.84X10^{19}$，
        
        32位和64位区别：
        long:(4和8)，
        char:(4和8)，`,
        other_name: ['64位', '32位']
    },
    {
        name: "字节储存",
        explain: `最高有效位：最左边，数值比重最大的位（带符号则为符号位），
        小端法——最低有效字节在最前面
        大端法——最高有效字节在最前面
        （大多为小端法）`,
        other_name: ['最高有效位', '最低有效位', '大端法', '小端法']
    },
    {
        name: "位移运算",
        explain: `左移：右边都补0，
        逻辑右移：左边都补0，
        算术右移：左边补最高有效位的值（负数最高有效位为1，则补1）`,
        other_name: ['逻辑右移', '算术右移']
    },
    {
        name: "无符号数",
        explain: `对向量$vec{x}=[x_{w-1},x_{w-2},...,x_0]$,
        $B2U_w(\\vec{x})\\overset{\\cdot}{=}$`,
        other_name: ['']
    },
    {
        name: "浮点数",
        explain: `包括：
            符号s：s(sign)，
            阶码E：exp(exponent)，
            尾数M：frac(significand)
        单精度：
            32 bits:s-1,exp-8,frac-23
        双精度：
            64 bits:s-1,exp-11,frac-52
        二进制转浮点数：
            $V=(-1)^s\\mul M\\mul 2^E$
        浮点数转二进制：
            s：若为负数，s=1，否则s=0，
            将数字转为二进制：
                整数用模二算，
                小数用乘二算，
                将二进制小数改为科学计数法
                ——$1.xxxx * 2^y$
            exp：阶数加上偏置（32位：y加上127），
            frac：xxxx，。
        浮点数舍入：
            非头`
    },
    {
        name: "",
        explain: ``,
    },
    {
        name: "加法器",
        explain: `

        符号位：
            带符号溢出标志$OF=C_n\\bigoplus C_{n-1}$
            无符号溢出标志$CF=Cin\\bigoplus Cout$
            符号$SF=F_{n-1}$
            零标志$ZF$，若全部位数为0，则为1`
    },
    {
        name: "乘法",
        explain: ``,

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
