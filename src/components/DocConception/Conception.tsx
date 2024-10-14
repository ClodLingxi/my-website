import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

import Markdown from 'react-markdown'

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm'

export interface ConceptData {
    name: string;
    explain: string;
    front_log?: string[];
    other_name?: string[];
    theorem_list?: TheoremData[]; 
    property_list?: string[];
}

export interface TheoremData {
    name: string;
    front_log: string[];
    back_log: string[]; 
    explain?: string;
    corollary?: string[];
}

export function Concept({name, conceptList, index}: {name: string, conceptList: ConceptData[], index?: number}){
    if (index == null) index = 0;

    let conceptData: ConceptData = getConceptFromList(conceptList, name); 
    const [showTip, setShowTip] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hoveredRef = useRef(hovered);
    const [buffer, setBuffer] = useState(false);
    const closeTip = () => {
        setShowTip(false);
        setHovered(false);
        setBuffer(true);
        setTimeout(() => {
            setBuffer(false);
        }, 1000);
    }

    useEffect(() => {
        hoveredRef.current = hovered;
        if (hoveredRef.current && !buffer) {
            setTimeout(() => {
                if (hoveredRef.current) setShowTip(true);
            }, 2000); 
        }
    })

    if (conceptData.explain == "") return <div style={{color: "red"}}>ERR CONCEPTION: {name} </div>
    if (conceptData.front_log == null) conceptData.front_log = [];

    return <>
        <div key={index}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{display: "inline", position: "relative", color: "blueviolet"}}
        >
            {name}
            {(showTip || hovered) && (
                <div key={index + 1} style={{
                    display: "inline",
                    flexDirection: "row",
                    backgroundColor: "black",
                    color: "white",
                    position: "absolute",
                    top: "100%",
                    whiteSpace: 'pre',
                    padding: "5px",
                    left: 0,
                    zIndex: index + 1,
                }}>
                    {wrapKeywordsInText(conceptData.explain, conceptData.front_log, conceptList, index + 1)}
                </div>
            )}
            {(showTip) && (
                <button style={{
                    backgroundColor: "black",
                    color: "white",
                    zIndex: index + 2,
                }} aria-label="关闭" onClick={() => closeTip()}>关闭</button>
            )}
        </div>
    </>
}

export function Theorem({name, theoremList, index}: {name: string, theoremList: TheoremData[], index?: number}){
    if (index == null) index = 0;

    let theoremData: TheoremData = getTheoremFromList(theoremList, name); 
    const [showTip, setShowTip] = useState(false);
    const [hovered, setHovered] = useState(false);
    const hoveredRef = useRef(hovered);
    const [buffer, setBuffer] = useState(false);
    const closeTip = () => {
        setShowTip(false);
        setHovered(false);
        setBuffer(true);
        setTimeout(() => {
            setBuffer(false);
        }, 1000);
    }

    useEffect(() => {
        hoveredRef.current = hovered;
        if (hoveredRef.current && !buffer) {
            setTimeout(() => {
                if (hoveredRef.current) setShowTip(true);
            }, 2000); 
        }
    })

    if (theoremData.back_log.length == 0) return <div style={{color: "red"}}>ERR THEOREM: {name} </div>

    return <>
        <div key={index}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{display: "inline", position: "relative", color: "blueviolet"}}
        >
            {name}
            {(showTip || hovered) && (
                <div key={index + 1} style={{
                    display: "inline",
                    flexDirection: "row",
                    backgroundColor: "black",
                    color: "white",
                    position: "absolute",
                    top: "100%",
                    whiteSpace: 'pre',
                    padding: "5px",
                    left: 0,
                    zIndex: index + 1,
                }}>
                    
                </div>
            )}
            {(showTip) && (
                <button style={{
                    backgroundColor: "black",
                    color: "white",
                    zIndex: index + 2,
                }} aria-label="关闭" onClick={() => closeTip()}>关闭</button>
            )}
        </div>
    </>
}

function markdownComponent(text: string, key: number){
    const MarkdownContainer = styled.p`
        display: inline;
        p {
            display: inline;
        };
        [aria-hidden="true"] {
            display: none;
        };
    `;

    return <MarkdownContainer>
        <Markdown key={key} remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{text}</Markdown>
    </MarkdownContainer>
}

function wrapKeywordsInText(text: string, conceptions: string[], conceptList: ConceptData[], key_index: number) {
    let parts: any[] = [];
    let lastIndex = 0;

    conceptions.forEach(keyword => {
        let index = text.indexOf(keyword, lastIndex);
        while (index > -1){
            parts.push(markdownComponent(text.substring(lastIndex, index), key_index + 1));
            parts.push(<Concept key={key_index + 2} name={keyword} conceptList={conceptList} />);
            key_index += 2;
            lastIndex = index + keyword.length;
            index = text.indexOf(keyword, lastIndex);
        }
    });
    parts.push(markdownComponent(text.substring(lastIndex), key_index));
    return parts;
}

function getTheoremFromList(theoremList: TheoremData[], name: string){
    let result: TheoremData = {name: name, front_log: [], back_log: []}
    theoremList.forEach(element => {
        if(element.name == name){
            result = element;
            return;
        }
    });
    return result;
}

function getConceptFromList(conceptList: ConceptData[], name: string){
    let result: ConceptData = {name: name, explain: "", front_log: []}
    conceptList.forEach(element => {
        if(element.name == name){
            result = element;
            return;
        }
        else if(element.other_name != null) {
            element.other_name.forEach(otherName => {
                if (otherName == name) {
                    result = element;
                    return;
                }
            })
        }
    });
    return result;
}
