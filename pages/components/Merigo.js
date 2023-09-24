import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import qube from '../../public/qube.png'


const Merigo = () => {

    const carouselRef = useRef(null)
const { scrollX } = useScroll({
  container: carouselRef
})
// const backgroundX = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
const textX = useTransform(scrollX, [0,1], ["10%", "100%"]);
  return (
    <div className='w-full h-screen'>
        <h1 className='font-bold text-white text-4xl md:text-3xl top-20 px-8 uppercase'>Web applications</h1>
        <h1 className='px-8 text-sm uppercase text-primary'>Throughtfully designed, engaging experiences.</h1>
    <div ref={carouselRef}>
    {/* {children} */}
    <div className='flex gap-2 w-full py-6'>
    <motion.div className=' bg-gray-200 p-2 rounded-xl relative' 
    style={{ x: textX }}
    >
        <Image
          src={qube}
          alt='image'
        //   layout='fill'
        //   objectFit='cover'
          style={{
            backgroundPosition: 'bottom',
            // backgroundSize: 'cover',
            // y: backgroundY,
          }}
        />
        <h1 className='text-sm uppercase text-primary'>Qube</h1>
        <h1>Web applcation, SAAS CRM for moving indutry. Ticket system with sales buckets.</h1>
        </motion.div>
        <motion.div className='w-1/2 bg-gray-200 p-2 rounded-xl' 
    // style={{ y: backgroundY }}
    >
        <Image
          src={qube}
          alt='image'
        //   layout='fill'
        //   objectFit='cover'
          style={{
            backgroundPosition: 'bottom',
            // backgroundSize: 'cover',
            // y: backgroundY,
          }}
        />
        <h1>Qube</h1>
        <h1>Web applcation, SAAS CRM for moving indutry. Ticket system with sales buckets.</h1>
        </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Merigo