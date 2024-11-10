import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const data = [
        {
            description:"very very well, I just can't believe how someone can say that",
            filesize:".9mb",
            close: false,
            tag: {isOpen: true, tagTitle : "Download Now", tagColor :"green"}
        },
        {
            description:"very very well, I just can't believe how someone can say that",
            filesize:".9mb",
            close: false,
            tag: {isOpen: true, tagTitle : "Download Now", tagColor :"green"}
        },
        {
            description:"very very well, I just can't believe how someone can say that",
            filesize:".9mb",
            close: false,
            tag: {isOpen: true, tagTitle : "Download Now", tagColor :"green"}
        }
    ]

    const refr = useRef(null);
    return (
        <div ref={refr} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>

            {data.map((item,index)=>(<Card referal = {refr} dat = {item}/>))}
        </div>
        

    )
}

export default Foreground
