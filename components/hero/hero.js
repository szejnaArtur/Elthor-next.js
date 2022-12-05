import React from 'react';
import Button from "../ui/button";

const Hero = ({heading}) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover bg-image-hero'>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-2"/>
            <div className="p-5 text-white z-[2] flex flex-col justify-center items-center">
                <h2
                    style={{textShadow: '0 0.3rem 0.5rem #000'}}
                    className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold text-center"
                >
                    {heading}
                </h2>
                <Button name='POZNAJ NASZĄ OFERTĘ' />
            </div>
        </div>
    )
}

export default Hero;