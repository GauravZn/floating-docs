import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ dat ,referal}) {


    return (
        <motion.div drag dragConstraints={referal} whileDrag={{scale:1.1}} dragElastic = {0.2} dragTransition={{bounceStiffness:100, bounceDamping:30}} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{dat.description}.</p>
            <div className='footer absolute bottom-0  w-full   left-0'>
                <div className='flex px-8 py-3 items-center justify-between mb-3 '>
                    <h5>{dat.filesize}</h5>
                    {/* <h5>.9mb</h5> */}

                    <span className='w-7  h-7  bg-zinc-200 rounded-full flex items-center justify-center'>
                        {dat.close ? <IoMdClose color='#000' /> : <MdOutlineFileDownload size="0.7em" color='#000' />}

                    </span>
                </div>

                {
                    dat.tag.isOpen && <div className={`tag w-full py-4 bg-green-600 flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{dat.tag.tagTitle}</h3>
                    </div>
                }


            </div>
        </motion.div>
    )
}

export default Card
