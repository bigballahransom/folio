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
        className='font-bold text-white text-3xl md:text-3xl top-28 relative z-10'>
            <h1>ANDREW RANSOM</h1>
            <h1 className='uppercase text-sm text-primary'>Frontend Developer & Business Executive</h1>
            <a href="https://calendly.com/bookqube/30min?month=2023-06" target="_blank" rel="noopener noreferrer">
                  <button className='flex gap-2 text-primary bg-white rounded-full px-6 py-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                      Schedule a Meeting</button>
                      </a>
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