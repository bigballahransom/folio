import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import full from '../public/full2.jpg'
import bottom from '../public/bottom.png'

export default function MtParalax() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  return (
    <div ref={ref} className='w-full h-screen overflow-hidden relative grid px-8'>
        <motion.div 
        style={{ y: textY }}
        className='font-bold text-white text-4xl md:text-3xl top-28 relative z-10'>
            <h1>ANDREW RANSOM</h1>
            <h1 className='uppercase text-sm text-primary'>Frontend Developer & Business Executive</h1>
        </motion.div>

        <motion.div className='absolute bottom-0 right-0 left-0 top-0 z-5 border-bottom-2xl shadow border-bg-backdrop' style={{ y: backgroundY }}>
        <Image
          src={full}
          alt='image'
          layout='fill'
          objectFit='cover'
          style={{
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            // y: backgroundY,
          }}
        />
        </motion.div>   
        <motion.div className='absolute top-60 left-0 right-0 bottom-[-100px] z-20' >
          
        <Image
          src={bottom}
          alt='image'
          layout='fill'
          objectFit='cover'
          style={{
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        />
        </motion.div>
        
    </div>
  )
}