import React, {useState} from 'react';
import {FaLongArrowAltRight} from 'react-icons/fa';

const Button = props => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            style={{boxShadow: '0 0.3rem 0.9rem #000'}}
            className='h-[60px] w-[300px] bg-[#254591] m-3 rounded-[30px] flex flex-row-reverse shadow-2xl'
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <div
                style={
                    isHovered ? {
                        width: '60px'
                    } : {}
                }
                className='w-full h-full bg-[#193366] ease-in duration-300 rounded-[30px] relative hover:w-[60px]'
            />
            <div className='absolute flex'>
                <p className='relative font-bold text-[16px] top-[19px] right-11'>SPRAWDZ NASZĄ OFERTĘ</p>
                <FaLongArrowAltRight
                    style={
                        isHovered ? {
                            fontSize: '30px',
                            top: '16px',
                            right: '13px'
                        } : {

                        }
                    }
                    className='text-2xl relative top-[19px] right-[17px] ease-in duration-300'
                />
            </div>
        </button>
    )
}

export default Button;