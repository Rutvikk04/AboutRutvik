import { useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const Background = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const ref = useRef()
    const isInView = useInView(ref, { once: true })

    const handleScroll = () => {
        const newScrollPosition = window.scrollY;
        setScrollPosition(newScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);

    // console.log(rotation)// Normalize rotation
    return (
        <div ref={ref} className={`flex  justify-around fixed items-center place-items-center w-screen h-screen`} >
            <div style={{
                rotate: `${scrollPosition / 8}deg`,
            }} className={`bg-div ${isInView ? 'top-40 left-40 rotate-0' : 'top-0 rotate-180 -left-12'} `} ></div>
            <div
                style={{
                    rotate: `${scrollPosition / 14}deg`,
                }} className={`bg-div ${isInView ? 'top-24 right-8 rotate-0' : 'rotate-90 top-0 -right-52'}  `}></div>
            <div style={{
                rotate: `${scrollPosition / 17}deg`,
            }} className={`bg-div ${isInView ? ' bottom-16 left-44 rotate-0' : 'rotate-90 -bottom-10 -left-52'} `}></div>
            <div style={{
                rotate: `${scrollPosition / 13}deg`,
            }} className={`bg-div ${isInView ? 'bottom-52 right-72 rotate-0' : 'rotate-90 -bottom-20 -right-52'}   `}></div>
            <div style={{
                rotate: `${scrollPosition / 7}deg`,
            }} className={` bg-div ${isInView ? 'top-52 right-96 rotate-0' : 'rotate-90 top-0 -right-52'}   `}></div>
            <div style={{
                rotate: `${scrollPosition / 11}deg`,
            }} className={` bg-div ${isInView ? 'top-96 left-96 rotate-0' : 'rotate-90 -top-0 -left-52'}   `}></div>
            <div style={{
                rotate: `${scrollPosition / 9}deg`,
            }} className={` bg-div ${isInView ? ' bottom-12 right-96 rotate-0' : 'rotate-90 -bottom-20 -right-52'} `}></div>


        </div>
    )
}

export default Background