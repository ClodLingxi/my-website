import React from 'react'
import {Concept, ConceptData, TheoremData} from '../../../src/components/DocConception/Conception'

export function C({n}: {n: string}){
    return <Concept name={n} conceptList={conceptList}/>
}

const conceptList: ConceptData[] = [
    {
        name: "",
        explain: ``,
        other_name: ['']
    },
];

const theoremData: TheoremData[] = [
    {
        name: "",
        explain: "",
        front_log: [],
        back_log: [],
    }
]
