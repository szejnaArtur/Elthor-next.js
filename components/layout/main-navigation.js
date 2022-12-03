import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/legacy/image";

import logoBlack from '../../public/logo-black.png';
import logoWhite from '../../public/logo-white.png';

import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const MainNavigation = (props) => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const {links} = props;

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const changeColor = () => {

            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setTextColor('#ffffff');
                setColor('transparent');
            }
        }
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={
                textColor === '#ffffff' ? {
                    backgroundColor: `${color}`
                } : {
                    backgroundColor: `${color}`,
                    boxShadow: '0 0.3rem 1.9rem #000'
                }
            }
            className='fixed w-full z-10 easy-in-out duration-300 '
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <Image
                        src={textColor === '#ffffff' ? logoWhite : logoBlack}
                        alt='/'
                        width={200}
                        height={60}
                    />
                </Link>
                <ul className='hidden md:flex' style={{color: `${textColor}`}}>
                    {
                        links.map(link => (
                            <li className='p-4 ease-in duration-300 hover:text-[#193366]' key={link.name}>
                                <Link href={link.href} scroll={true}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className='hidden md:flex'>
                    <li className='px-7 py-2 bg-[#193366] rounded-[50px] hover:bg-[#254591] ease-in-out duration-300'>
                        <Link href="/#kontakt">Kontakt</Link>
                    </li>
                </ul>
                <div className='block md:hidden z-10 cursor-pointer' onClick={handleNav}>
                    {nav ? <AiOutlineClose size={30} style={{color: `#ffffff`}}/>
                        : <AiOutlineMenu size={30} style={{color: `${textColor}`}}/>}
                </div>

                <div
                    className={nav ? 'md:hidden absolute top-0 left-0 bottom-0 right-0 flex items-center flex-col w-full h-screen bg-black text-center easy-in duration-300'
                        : 'md:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex items-center flex-col w-full h-screen bg-black text-center easy-in duration-300'}>
                    <div className='w-[100%] flex'>
                        <Link href='/' className='m-5'>
                            <Image
                                src={logoWhite}
                                alt='/'
                                width={170}
                                height={60}
                            />
                        </Link>
                    </div>
                    <div
                        className='flex flex-row items-center justify-center w-[100%] border-y-[1px] border-y-gray-800'>
                        <div className='p-2 border-wh'>
                            <p>tel.: 555-666-777</p>
                        </div>
                        <div className='h-[20px] w-[1px] bg-gray-800 m-2'/>
                        <div className='p-2'>
                            <p>biuro@elthor.pl</p>
                        </div>
                    </div>
                    <ul className='mt-7'>
                        {
                            links.map(link => (
                                <li key={link.name}
                                    onClick={() => setNav(false)}
                                    className='text-3xl p-4 hover:text-gray-500'>
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className='m-8'>
                        <li className='px-12 py-4 bg-[#193366] rounded-[50px] hover:bg-[#2d5bb9] ease-in-out duration-300'
                            onClick={() => setNav(false)}>
                            <Link href="/#kontakt">
                                <p className='text-xl'>Kontakt</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainNavigation;