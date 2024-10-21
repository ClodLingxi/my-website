import React from 'react'
import {Concept, ConceptData, TheoremData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "多重集合",
        explain: `元素可以重复出现的集合，
        重复度为该元素的重复次数`,
        other_name: ['重复度', '多重子集']
    },
    {
        name: "顶点集",
        explain: `该集合的元素称为顶点或结点`,
        other_name: ['顶点', '结点'],
    },
    {
        name: "边集",
        explain: `若图为无向图$G$，该集合为：
        无序积$V \\& V$的多重子集，其元素称为无向边
        若图为无向图$D$，该集合为：
        卡氏积$V \\times V$的多重子集，其元素称为有向边
        该集的元素都可以简称边`,
        front_log: ['多重集合'],
        other_name: ['边', '有向边', '无向边']
    },
    {
        name: "有向图",
        explain: `一个有序的二元组$<V,E>$，记作$D$($D$特指有向图)
        $V\\ne\\emptyset$为顶点集,
        E为边集`,
        front_log: ['顶点集', '边集'],
    },
    {
        name: "无向图",
        explain: `一个有序的二元组$<V,E>$，记作$G$(注：有时$G$可以代指有向图)
        $V\\ne\\emptyset$为顶点集，
        E为边集`,
        front_log: ['顶点集', '边集', '有向图'],
        other_name: ['图'],
    },
    {
        name: "n阶图",
        explain: `n代表图$V(G)=n$
        （或$有向图$V(D)=n$，称为n阶有向图）`,
        front_log: ['无向图', '有向图'],
        other_name: ["n阶有向图"],
    },
    {
        name: "零图",
        explain: `该图$E(G)=\\emptyset$
        又若图$V(G)=n$，称为n阶零图，
        记为$N_n$（特别当$N_1$为平凡图）`,
        front_log: ['无向图'],
        other_name: ['平凡图'],
    },
    {
        name: "空图",
        explain: `该图$|V(G)|=\\emptyset$`,
        front_log: ['无向图']
    },
    {
        name: "基图",
        explain: `有向图去掉方向，成为的无向图`,
        front_log: ['有向图', '无向图']
    },
    {
        name: "标定图",
        explain: `边或顶点用字母标定的图
        （都没有标定，则为非标定图）`,
        front_log: ['无向图', '边集', '顶点集']
    },
    {
        name: "端点",
        explain: `图$G$：$e_k=(v_i, v_j)\\inE$
        若G为无向图，则$v_i,v_j$两个称为端点
        若G为有向图，则$v_i,v_j$分别称为始点和终点`,
        front_log: ["无向图", "有向图"],
    },
    {
        name: "环",
        explain: `图$G$：$e_k=(v_i, v_j)\\inE$
        若$v_i=v_j$则称$e_k$为环  
        `,
        front_log: ['端点', '无向图'],
    },
    {
        name: "关联",
        explain: `图$G$：$e_k=(v_i, v_j)\\inE$
        $e_k$与$v_i,v_j$的关联次数分别为1（若$e_k$为环，则为2）`,
        front_log: ['环'],
    },
    {
        name: "孤立点",
        explain: `无关联的点`,
        front_log: ['边集', '关联']
    },
    {
        name: "相邻",
        explain: `# 点：\n
        图$G$：$e_k=(v_i, v_j)\\inE$
        有向图：$v_i$与$v_j$相邻
        无向图：$v_i邻接到v_j$，$v_j邻接于v_i$
        # 边：\n
        $\\forall e_k,e_l\\in E$若有共同端点，相邻`,
        front_log: ['有向图', '无向图', '端点','邻接'],
    },
    {
        name: "后继元素",
        explain: `有向图D：$//gamma_D^+(v)=\\{u|u\\in V(G)\\land <v,u>\\in E(G) \\land u\\neq v\\}$
        即有向图$v$点的后一个点的顶点集`,
        front_log: ['有向图', '顶点集']
    },
    {
        name: "前驱元素",
        explain: `有向图D：$//gamma_D^-(v)=\\{u|u\\in V(G)\\land <u,v>\\in E(G) \\land u\\neq v\\}$
        即有向图$v$点的前一个点的顶点集`,
        front_log: ['有向图', '顶点集']
    },
    {
        name: "领域",
        explain: `图G：$N_G(v)=\\{u|u\\in V(G)\\land (u,v)\\in E(G) \\land u\\neq v\\}$
        即$v$的相邻顶点集(若为有向图，则为前驱元素和后继元素的并)`,
        front_log: ['相邻','顶点集', '无向图'],
    },
    {
        name: "闭领域",
        explain: `$\\bar{N_G(v)}=N_G(v)\\cup\\{v\\}$
        即$v$的领域与它本身`,
        front_log: ['领域'],

    },
    {
        name: "关联集",
        explain: `$\\{e|e$与$v$相关联$\\}$
        即与v相关联的边集`,
        front_log: ['关联', '边集']
    },
    {
        name: "平行边",
        explain: `无向图中：有相同端点的边集
        有向图中，有相同始点和终点的边集
        该边集的基数为重数`,
        front_log: ['无向图', '有向图', '边集'],
        other_name: ['重数']
    },
    {
        name: "多重图",
        explain: `含平行边的图`,
        front_log: ['平行边', '无向图']
    },
    {
        name: "简单图",
        explain: `既不含平行边，也不含环的图`,
        front_log: ['平行边', '环', '无向图']
    },
    {
        name: "度数",
        explain: `# 图G：结点$v$作为边的端点次数之和，记为$d_G(v)$
        ## 若图G为有向图D，则有：
            入度：$v$作为边的始点次数之和，记为$d_D^+(v)$
            出度：$v$作为边的终点次数之和，记为$d_D^-(v)$
            $d_G(v)=d_D^+(v)+d_D^-(v)$
        ## 最大度数和最小度数（包括出入度）
        \\Delta(G)和\\delta(G)
        \\Delta^+(G)和\\delta^-(G)`,
        front_log: ['无向图', '有向图', '端点', '边集'],
        other_name: ['入度', '出度'],
    },
    {
        name: "度数列",
        explain: `由度数构成的数列$**d**=(d(v_1), d(v_2), d(v_3)...,d(v_n))$`,
        front_log: ['度数']
    },
    {
        name: "可图画的",
        explain: `该度数列**d**：可以构成的n阶图
        若可以化为简单图，则为可简单图化`,
        front_log: ['n阶图', '简单图'],
        other_name: ['可简单图化']
    },
    {
        name: "同构",
        explain: `设$G_1=<V_1,E_1>,G_2=<V_2,E_2>$为两个无向图
        若存在双射函数f:V_1->V_2使得$\\forall$,
        $v_i,v_j\\in V_1 <-> (f(v_i),f(v_j)\\in V_2)$,
        $(v_i,v_j)\\in E1) <-> ((f(v_i),f(v_j))\\in E_2)$,
        $(v_i,v_j) 与 (f(v_i),f(v_j)) 重数相同$
        记为：$G_1\\cong \\G_2$
        `,
        front_log: ['无向图', '重数']
    },
    {
        name: "完全图",
        explain: `n阶无向完全图: n阶无向图，简单图，$G$中每个顶点均与其余n-1个顶点相邻，记为K_n
        n阶有向完全图: n阶有向图，简单图，$G$中每个顶点邻接到其余n-1个顶点
        n阶竞赛图: n阶有向图，简单图，$G$中每个顶点邻接与（或邻接于）其余n-1个顶点（即两点间只有一个边）`,
        front_log: ['无向图', '有向图', '点集', '相邻', '简单图'],
        other_name: ['n阶无向完全图', 'n阶有向完全图', 'n阶竞赛图']
    },
    {
        name: "k-正则图",
        explain: `设$G$为$n(n>=1)$阶无向图，简单图,
        $\\forall v\\in V(G)$，均有$d(v)=k$
        边数m=kn`,
        front_log: ['无向图', '简单图', '边集']
    },
    {
        name: "r部图",
        explain: `设$G=<V,E>$为一个n阶无向图，
        若V能分成$r(r>=2)$个点集V不相交，且所有边的端点都不在同一个点集V的图(r=2则称为偶图)。记为$G=<V_1,V_2,...,V_r,E>$
        完全r部图：又若对$\\forall$ 点集$V_i$中的点均于其它点集(即$V_j(j\\neq i)$)的点相邻————则称为完全r部图
        记为：$G=K_{n_1,n_2,...,n_r}(|V_i|=n_i)$`,
        front_log: ['无向图', '点集', '端点', '相邻'],
        other_name: ['二部图', '偶图', '完全r部图'],
    },
    {
        name: "子图",
        explain: `设$G_1=<V_1,E_1>,G_2=<V_2,E_2>$为两个图，其中V为点集，E为边集
        若$V_1\\subseteq V_2$且$E_1\\subseteq E_2$，则称$G_1为G_2$的子图，反之为母图，记为$G_1\\subseteq G_2$
        已知$G_1\\subseteq G_2$：
        - 真子图：若$V_1\\propersubset  V_2$且$E_1\\propersubset  E_2$，则称$G_1为G_2$的真子图
        - 生成子图：若$V_1=V_2$，$则称$G_1为G_2$的生成子图`,

        front_log: ['无向图', '点集', '边集'],
        other_name: ['母图', '真子图', '生成子图']
    },
    {
        name: "导出的子图",
        explain: `设$G_1=<V_1,E_1>，其中V为点集，E为边集
        $V_2\\propersubset V_1$且$V_1\\neq \\emptyset$ 并且边集$E_2$边的端点$\\in V_2$
        ($E_2\\propersubset E_1$且$E_1\\neq \\emptyset$ 并且点集$V_2$的点都是$E_2$的端点
        记为$G_2=G_1[V_2]$，即G_2为G_1的V_2导出的子图
        （记为$G_2=G_1[E_2]$，即G_2为G_1的E_2导出的子图）`,
        front_log: ['无向图', '点集', '边集', '端点'],
    },
    {
        name: "补图",
        explain: `设$G=<V,E>$为n阶简单图，其中V为点集，E为边集,
        将G补成n阶完全图所需的边的边集$E^|$,
        以$E^|为边集的图为$G$的补图，记为$\\overline{G}$,
        若$G\\cong \\overline{G}$，则称为自补图`,
        front_log: ['简单图', '无向图', '完全图', '点集', '边集'],
        other_name: ['自补图']
    },
    {
        name: "不交",
        explain: `设$G_1=<V_1,E_1>,G_2=<V_2,E_2>$为两个图，其中V为点集，E为边集,
        若：$V_1\\cap V_2=\\emptyset$则称G_1和G_2是**不交的**,
        若：$E_1\\cap E_2=\\emptyset$则称G_1和G_2是**边不交的**或**边不重**的,
        边不交**等价于**不交
        `,
        front_log: ['无向图', '点集', '边集'],
        other_name: ["不重"]
    },
    {  
        name: "图运算",
        explain: `设$G_1=<V_1,E_1>,G_2=<V_2,E_2>$为两个图，其中V为点集，E为边集,
        并图：$E=E_1\\cup E_2$，$V=\\{v|E的边关联的顶点\\}$的图G，记：$G=G_1\\cup G_2$,
        交图：$E=E_1\\cap E_2$，$V=\\{v|E的边关联的顶点\\}$的图G，记：$G=G_1\\cap G_2$,
        差图：$E=E_1-E_2$，$V=\\{v|E的边关联的顶点\\}$的图G，记：$G=G_1-G_2$,
        环和：$E=E_1\\bigoplus E_2$，$V=\\{v|E的边关联的顶点\\}$的图G，记：$G=G_1\\bigoplus G_2$（$E=(E_1\\cup E_2)-(E_1\\cap E_1)$）`,
        front_log: ['无向图', '孤立点'],
        other_name: ['并图', '交图', '差图', '环和']
    },
    {
        name: "联图",
        explain: `设$G_1=<V_1,E_1>,G_2=<V_2,E_2>$为两个图，其中V为点集，E为边集，两图**不交**,
        $E=E_1\\cup E_2\\cup \\{(u,v)|u\\in V_1\\land v\\in V_2\\}$，$V=V_1\\cup V_2$
        记作$G=G_1+G_2$
        可知：
        1. 完全图$K_r+K_s=K_{r+s}$
        2. 零图$N_r+N_s=K_{r,s}$
        3. 若：|V_1|=n_1,|E_1|=m_1,|V_2|=n_2,|E_2|=m_2,
            则：|V|=n_1+n_2,|E|=m_1+m_2+n_1n_2`,
        front_log: ['完全图', '零图']
    },
    {
        name: "积图",
        explain: `设$G_1=<V_1,E_1>,G_2=<V_2,E_2>$为两无向简单图，其中V为点集，E为边集
        $E=\\{(<u_i,u_j>,<v_k,v_s>|<u_i,u_j>,<v_k,v_s>\\in V\\cap (u_i=v_k\\cap u_j与v_s相邻 \\cup u_j=v_s\\cap u_i与v_k相邻))\\}$,
        $V=V_1\\times V_2$
        可知：
        1. 若：$|V_1|=n_1,|E_1|=m_1,|V_2|=n_2,|E_2|=m_2$,
            则：$|V|=n_1n_2,|E|=n_1m_2-n_2m_1$`,
        front_log: ['简单图','相邻'],
    },
    {
        name: "k-方体图",
        explain: `用0,1分别表示完全图$K_2$的两个端点，令：
        $Q_1=K_2$,
        $Q_2=K_2\\times Q_1$,
        ...
        $Q_k=K_2\\times Q_k-1(k>=3)$
        记$Q_k$为k-方体图`,
        front_log: ['完全图', '端点']
    },
    {
        name: "通路",
        explain: `设G为无向标定图
        通路：G中顶点与边的交替序列\\Gamma=v_{a1}e_a_v_{a2}e_bv_{b2}...e_mv_{m2}，记为\\Gamma （其中v_{a1}为始点，v_{n2}为终点），
        (\\Gamma=e_ae_be_c...e_m)
            简单通路：通路 + 所有边各异，
            初级通路（又称为路径）：简单通路 + 点不重复走
            复杂通路：初级通路 + 有重复边
        回路：通路的始点和终点相同，
            简单回路：回路 + 所有边各异，
            初级回路（又称圈）：简单回路 + 点不重复走
            复杂回路：初级回路 + 有重复边
            长度：初级回路 +（长度为奇为奇圈，长度为偶为偶圈）
        `,
        front_log: ['标定图'],
        other_name: ['回路', '路径', '回路', '奇圈', '偶圈', '圈']
    },
    {
        name: "极大路径",
        explain: ``,
    },
    {
        name: "周长",
        explain: `周长：含圈无向图G中最长的圈
        围长：含圈无向图G中最短的圈`,
        front_log: ['无向图', '通路'],
        other_name: ['围长', '圈']
    },
    {
        name: "连通",
        explain: `设$G=<V,E>$，$\\forall u,v\\in V$
        若$u, v$之间存在通路，则为连通的
        记：$u~v$（同理：$\\forall u\\in V u~u$）`,
        front_log: ['零图', '通路'],
        other_name: ['分离图']
    },
    {
        name: "连通图",
        explain: `若：G为平凡图或任何两点直接都是连通
        则称为连通图。
        否则称为非连通图或分离图
        可知：
            无向完全图$K_n(n>=1)$都是连通图
            零图$N_n(n>=2)$均为非连通图`,
        front_log: ['零图', '连通', '平凡图', '连通', '无向完全图', '零图'],
        other_name: ['分离图']
    },
    {
        name: "连通分支",
        explain: `设$G=<V,E>$，$V$关于顶点之间连通关系的商集，
        V//~=\\{V_1, V_2,..., V_k\\}
        (即：把图化成了几个连通分支的区块)
        称导出子图$G\\{V_i\\}(i=1,2,...,k)$为G的连通分支
        连通分支数$k$记为$p(G)$
        可知：
            G为连通图：$p(G)=1$
            G为非连通图：$p(G)>1$`,
        front_log: ['点集', '连通', '导出子图'],
    },
    {
        name: "短程线",
        explain: `设$u,v$为图$G$中的任意两个顶点，若$u,v$连通
        称$u,v$之间长度最短的通路为短程线
        距离：短程线长度——记：$d(u,v)$（$u,v$不连通，则$d(u,v)=+\\infty $）
        可知：
            $d(u,v)>=0,u=v时，等号成立$
            满足三角不等式：$\\forall u,v,w\\in V(G), 则d(u,v)+d(v,w)>=d(u,w)$
            具有对称性：$d(u,v)=d(v,u)$`,
        front_log: ['点集', '连通', '通路'],
    },
    {
        name: '直径',
        explain: `设图$G=<V,E>$
        称max\\{d(u,v)|u,v\\in V\\}为G的直径
        记：d(G)
        可知：
            若$G=无向完全图K_n(n>=2)$，则d(G)=1
            若G是长度为n的圈，则$d(G)=[\\div{n}{2}]$（向下取整）
            若G是平凡图，则$d(G)=0$
            若G是零图N_n(n>=2)，则$d(G)=\\infty $`,
        front_log: ['完全图', '周长', '平凡图', '零图']
    },
    {
        name: '点割集',
        explain: `设图$G=<V,E>$
        若存在$V\`\\subsetV$且V\`\\neq\\emptyset，使得连通分支数$p(G-V\`)>p(G)$
        对$\\forall V\`\`\\subset V\`$均有$p(G-V\`\`)=p(G)$，
        称$V\`$为点割集
        割点：只有一个元素的点割集`,
        other_name: ['割点']
    },
    {
        name: '边割集',
        explain: `设图$G=<V,E>$
        若存在$E\`\\subseteq E$且V\`\\neq\\emptyset，使得连通分支数$p(G-E\`)>p(G)$，
        对$\\forall E\`\`\\subset E\`$均有$p(G-E\`\`)=p(G)$，
        称$E\`$为边割集或割集，
        桥：只有一个元素的边割集，
        扇形割集：关联集$I_G(v),E\`\\subseteq I_G(v)$
            若$E\`$是割集，则$E\`$是扇形割集
            同时，$I_G(v)$本身也是扇形割集`,
        front_log: ['连通分支'],
        other_name: ['边割集', '桥', '扇形割集', '割集']
    },
    {
        name: "点连通度",
        explain: `设G为无向连通图，且不含完全图$K_n$为生成子图
        称：连通度$\\kappa (G)=min\\{|V\`||=V\`为G的点割集\\}$，简称连通度
        （即分割图用的最少点的数量）。
        完全图K_n的点连通度：$n-1,n>=1$，
        非连通图的点连通度：$0$，
        $k-连通图$：无向连通图$G$，$\\kappa (G)>=k$`,
        front_log: ['连通图', '完全图', '子图', '点割集'],
        other_name: ['连通度']
    },
    {
        name: "边连通度",
        explain: `设G为无向连通图
        称：边连通度$\\lambda (G)=min\\{|E\`||=E\`为G的边割集\\}$
        （即分割图用的最少边的数量）。
        非连通图的边连通度：$0$，
        $k边-连通图$：无向连通图$G$，$\\lambda (G)>=k$`,
        front_log: ['连通图', '完全图', '子图', '点割集'],
    },
    {
        name: "块",
        explain: `设G为无向连通图
        若G中无割点，则G为块
        若G中有割点，则G中称块的极大连通子图为G的块`,
        front_log: ['连通图', '点割集', '子图']
    },
    {
        name: "可达",
        explain: `有向图D：
        可达：$v_i到v_j$存在通路，记$v_i->v_j$
        互相可达：$v_i,v_j$批次存在通路，记$v_i<->v_j$`,
        front_log: ['通路', '有向图']
    },
    {
        name: "强连通图",
        explain: `有向图D
        弱连通图：基图连通的有向图D。简称连通图
        单向连通的：$\\forall v_i,v_j\\in D$，彼此至少一个可达
        强连通图：$\\forall v_i,v_j\\in D$，彼此互相可达`,
        front_log: ['有向图', '连通图', '基图', '可达'],
        other_name: ['弱连通图', '单向连通']
    },
    {
        name: "强连通分支",
        explain: `有向图D
        D的强连通分支：具有强连通图性质的极大子图
        D的单向连通分支：具有单向连通性质的极大子图
        D的连通分支：具有弱连通图性质的极大子图`,
        front_log: ['有向图', '强连通图', '子图']
    },
    {
        name: "欧拉通路",
        explain: "通过图中所有边一次且仅一次行遍所有顶点的通路",
        front_log: ['边集', '顶点集', '通路', '连通分支']
    },
    {
        name: "欧拉图",
        explain: `欧拉通路：通过图中所有边一次且仅一次行遍所有顶点的通路
        （即边只能走一次且要求都走一遍，但不要求走过所有点【孤立点】），
        欧拉回路：欧拉通路 + 回路
        欧拉图：有欧拉回路的图
        半欧拉图：有欧拉通路，但没欧拉回路的图`,
        front_log: ['通路'],
        other_name: ['欧拉回路', '欧拉通路', '半欧拉图', '孤立点']
    },
    {
        name: "Fleury算法",
        explain: `(1)任取$v_0\\in V(G)$，令$P_0=v_0$
        (2)设$P_i=v_0e_1v_1e_2\\cdots e_iv_i$已经行遍，按下列方法从$E(G)-\\{e_1,e_2,\\cdots ,e_i\\}$中选取$e_{i+1}$
        ①$e_{i+1}$与$v_i$相关联
        ②最后再选择$e_{i+1}$作为$G_i=G-\\{e_1,e_2,\\cdots ,e_i\\}$的桥
        (3)重复执行(2)`,
        front_log: ['关联']
    },
    {
        name: "哈密顿图",
        explain: `哈密顿通路：通过图中所有点一次且仅一次的通路
        （即点只能走一次且要求都走一遍，但不要求走过所有边），
        哈密顿回路：哈密顿通路 + 回路
        哈密顿图：有哈密顿回路的图
        半哈密顿图：有哈密顿通路，但没哈密顿回路的图`,
        front_log: ['通路'],
        other_name: ['哈密顿回路', '哈密顿通路', '半哈密顿图']
    },
    {
        name: '无向树',
        explain: `无向树：连通无回路的无向图
        森林：拥有至少两个连通分支，且连通分支都是树的无向图
        平凡树：平凡图`,
        front_log: ['连通', '通路', '无向图', '平凡图'],
        other_name: ['森林', '平凡树', 's树']
    },
    {
        name: '树叶',
        explain: `设$T=<V,E>$为一颗无向树，对\\forall v\\in V
        树叶：$d(v)=1$
        分支点：$d(v)>=2$`,
        front_log: ['无向树'],
        other_name: ['分支点']
    },
    {
        name: "生成树",
        explain: `设$T$是无向图$G$的子图且为树，
        若$T$是$G$的生成子图且为树，
        称T为G的生成树。
        树枝：$\\forall e\\in E(G)$，$e\\in E(T)$，称e为T的树枝干，
        弦：$\\forall e\\in E(G)$，$e\\notin E(T)$，称e为T的弦，
        余树：$G[E(G)-E(T)]$为G的余树`,
        front_log: ['无向图', '无向树', '生成子图'],
        other_name: ['树枝', '弦', '余树']
    },
    {
        name: "基本回路",
        explain: `设T是n阶m条边的无向连通图G的一棵生成树，
        设$e_1,e_2,...,e_{m-n+1}$为T的弦。
        基本回路（或称基本圈）C：是T添加$e_r$产生的G中只含弦$e_r$，其余边均为树枝的圈，
        基本回路系统：{$C_{e_1},C_{e_2}...,C_{e_{m-n+1}}$} 共m-n+1个，
        圈秩：m-n+1，记为$(G)$，
        `,
        front_log: ['连通图', '生成树', '通路'],
        other_name: ['基本回路系统', '圈秩']
    },
    {
        name: "基本割集",
        explain: `设T是n阶m条边的无向连通图G的一棵生成树，
        设$e_1,e_2,...,e_{n-1}$为T的树枝。
        基本割集S：是G只含树枝$e_r$，其余边均为弦的割集，
        基本割集系统：{$S_{e_1},S_{e_2}...,S_{e_{n-1}}$} 共n-1个，
        割集秩：n-1，记为$(G)$，`,
        front_log: ['连通图', '生成树', '边割集'],
        other_name: ['基本割集系统', '割集秩']
    }
]

const TheoremList: TheoremData[] = [
    {
        name: "图论.1",
        front_log: ["G=<V,E>无向图", 'V={v_1,v_2,...v_n}', '|E|=m'],
        back_log: ["\\sum_{i=1}^nd(v_i)=2m"],
    },
    {
        name: "图论.2",
        front_log: ["G=<V,E>有向图", 'V={v_1,v_2,...v_n}', '|E|=m'],
        back_log: ["\\sum_{i=1}^nd(v_i)=2m", '\\sum_{i=1}^nd^+(v_i)=\\sum_{i=1}^nd^-(v_i)=m'],
        corollary: ['任何图G中，奇度数顶点的个数为偶数']
    },
    {
        name: "图论.3",
        front_log: ["$**d**=(d(v_1), d(v_2), d(v_3)..., d(v_n))$", "\\sum_{i=1}^nd(v_i)=0(mod 2)"],
        back_log: ["度数列**d**可图化"],
    },
    {
        name: "图论.4",
        front_log: ["$**d**=(d(v_1), d(v_2), d(v_3)...,d(v_n))$", "$(n-1)>=d_1>=d_2>=...>=d_n>=0$",
            "$\\sum_{i=1}^rd(v_i)<=r(r-1) + \\sum_{i=r+1}^nmin(\\{r,d_i\\})$", "<<图论.3<<"
        ],
        back_log: ["度数列**d**可简单图化"],
    },
    {
        name: "图论.5",
        front_log: ["$**d**=(d(v_1), d(v_2), d(v_3)...,d(v_n))$", "$(n-1)>=d_1>=d_2>=...>=d_n>=0$",
            "$**d^|**=(d(v_2)-1, d(v_3)-1, ..., d(v_{d_1-1})-1, d(v_{d_1-2}))...,d_n$", "<<图论.3<<"
        ],
        back_log: ["度数列**d**可简单图化"],
    },
    {
        name: "图论.6",
        front_log: ["n阶图从顶点$v_i$到$v_j$（$v_i\\neq v_j$）存在通路",],
        back_log: ["存在通路长度小于等于$n-1$", "存在路径长度小于等于$n-1$"],
    },
    {
        name: "图论.7",
        front_log: ["n阶图从顶点$v_i$到$v_i$存在回路",],
        back_log: ["存在回路长度小于等于n"],
    },
    {
        name: "图论.8",
        front_log: ["图G为二部图"],
        back_log: ["图G中无奇圈"],
    },
    {
        name: "图论.9",
        front_log: ["G为n阶无向图", "G是连通图"],
        back_log: ["G的边数$m>=n-1$"],
    },
    {
        name: "图论.10",
        front_log: ["任意图G"],
        back_log: ["$点连通度\\kappa <=边连通度\\lambda <=最小度\\delta $"],
    },
    {
        name: "图论.11",
        front_log: ["G是$n(n>=6)$阶简单无向连通图", '$边连通度\\lambda(G) < 最小度\\delta(G) $'],
        back_log: ["存在由$完全图K_n,K_{n-n_1}$及在它们之间适当地连入\\lambda(G)条边含G作为生成子图的图G^*",
            '其中：$\\lambda(G)+2<=n_1<=[\\frac{n}{2}]$'
        ],
        corollary: [
            '$\\delta(G)<=\\delta(G^*)<=n_1-1<=\\lfloor \\frac{n}{2} \\rfloor -1$',
            '$G^*$中存在不相邻的顶点$u,v$，使得$d_{G^*}(u)+d_{G^*}(v)<=n-2$',
            '$d(G)>=d(G^*)>=3',
        ]
    },
    {
        name: "图论.12",
        front_log: ["G是$n(n>=6)$阶简单无向连通图"],
        back_log: [
            '若$\\delta(G)>=\\lfloor \\frac{n}{2} \\rfloor$，则\\lambda(G)=\\delta(G)',
            '若对与$G$中任意一对不相邻顶点$u,v$，均有$d(u)+d(v)>=n-1$，则\\lambda(G)=\\delta(G)',
            '若$d(G)<=2$，则\\lambda(G)=\\delta(G)'
        ],
    },
    {
        name: "图论.13",
        front_log: ["$G$是$n$阶简单无向连通图", '$G$不是完全图$K_n$'],
        back_log: ["$\\kappa(G)>=2\\delta(G)-n+2$"],
    },
    {
        name: "图论.14",
        front_log: ["G是n阶简单无向连通图", '$边连通度\\lambda (G)=\\lambda$', "最小度$\\delta (G)=\\delta$", '点连通度$\\kappa (G)=\\kappa$'],
        back_log: ["或：$0<=\\kappa<=\\lambda<=\\delta<\\lfloor \\frac{n}{2} \\rfloor$", "或：$1<=2\\delta-n+2<=\\kappa<=\\lambda=\\delta<n-1$", "\\kappa=\\lambda=\\delta=n-1"],
    },
    {
        name: "图论.15",
        front_log: ["G是$n(n>=3)$阶无向连通图"],
        back_log: ["G为2-连通图当且仅当G中任意两点共圈"],
    },
    {
        name: "图论.17",
        front_log: ["v为无向连通图G中的一个顶点", "v为G的割点"],
        back_log: ["存在V(G)-v的一个划分：$V(G)-v=V_1\\cup V_2$，使得对于任意$u\\in V_1,w\\in V_2$，v都在(u,w)的通路上"],
    },
    {
        name: "树.1",
        front_log: ['设G=<V,E>为n阶m条边的无向图，则下面各命题是等价的'],
        back_log: [
            '(1) G是树（无向连通图）',
            '(2) G中任二顶点之间存在唯一的一条路径',
            '(3) G中没有圈，且$m=n-1$',
            '(4) G是连通的，且$m=n-1$',
            '(5) G是连通的，且G中任何边均为桥',
            '(6) G中没有圈，但在G中任二不同顶点$u,v$之间增添边$(u,v)$，所得图含唯一的一个圈'
        ]
    },
    {
        name: "树.2",
        front_log: ['$T$是$n$阶非平凡的无向树'],
        back_log: ['则$T$至少由两片树叶'],
    },
    {
        name: "树.3",
        front_log: ['无向图G具由生成树'],
        back_log: ['G是连通的'],
    },
    {
        name: "树.4",
        front_log: ['设T是无向连通图G中的一棵生成树', 'e为T的任意一条弦'],
        back_log: ['T\\sup e中含G的只含一条弦其余边均为树枝的图', '不同弦对应的圈不同'],
    },
    {
        name: "树.5",
        front_log: ['T是连通图G的一棵生成树', 'e为T的一条树枝'],
        back_log: ['G中存在只含树枝e，其余元素均为弦的割集', '不同树枝，对应不同割集'],
    },
    {
        name: "树.6",
        front_log: ['设$G=<V,E>$为n阶无向连通标定图'],
        back_log: ['对G的任意非环边e均有$(G-e)-(G\\e)$'],
    },
    {
        name: "",
        front_log: [''],
        back_log: [''],
    }
]
