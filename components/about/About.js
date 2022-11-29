import Title from "../ui/Title";
import Image from "next/legacy/image";

import photo from '../../public/about-img.jpeg';
import {useState} from "react";
import useCollapse from "react-collapsed";

const AboutPage = (props) => {

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    const { allAbouts } = props

    return (
        <div className='w-full flex justify-center py-10'>
            <div id='onas' className='flex flex-col flex max-w-[1240px] items-center'>

                <div className='flex lg:flex-row flex-col items-center justify-center gap-10'>
                    <div className='lg:w-[50%] w-[90%]'>
                        <Image src={photo} alt='/' width={1000} height={900}/>
                    </div>
                    <div className='flex flex-col lg:w-[50%] w-[90%] xl:text-[20px] lg:text-[18px] gap-4'>

                        <div className='flex flex-col w-full gap-4 text-gray-600'>
                            <Title text='Trochę o nas'/>

                            <p>Jesteśmy młodą firmą z dużym doświadczeniem w dziedzinie
                                elektrotechniki i automatyki przemysłowej. Mamy na koncie liczne realizacje dla
                                największych
                                zakładów przemysłowych, a nasi Klienci mogą liczyć na niezawodność, bezpieczeństwo i
                                nowatorskość proponowanych rozwiązań. </p>

                            <p>Dysponujemy wyspecjalizowaną kadrą i nowoczesnym sprzętem, co
                                pozwala nam na podjęcie się każdego wyzwania. Działamy w różnych segmentach przemysłu,
                                do
                                każdego zlecenia podchodząc indywidualnie i z pełnym zaangażowaniem.</p>
                        </div>

                        <div
                            {...getCollapseProps()}
                            className='flex flex-col w-full gap-4 text-gray-600 ease-in-out duration-300'
                        >
                            <p className='text-gray-600'>Zdobywaliśmy doświadczenie przy współpracy z największymi
                                firmami i
                                zakładami w Polsce z różnych segmentów przemysłu, takich jak energetyczny, górniczy,
                                spożywczy, chemiczny itp.</p>

                            <p>Do naszych usług zalicza się:</p>

                            <ul className='relative left-6 list-disc'>
                                <li>montaż</li>
                                <li>serwis</li>
                                <li>automatyka</li>
                                <li>uruchomienia</li>
                                <li>instalacje teletechniczne</li>
                                <li>prefabrykacja</li>
                            </ul>
                        </div>


                        <button
                            {...getToggleProps({
                                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                            })}
                            style={{boxShadow: '0 0.3rem 0.9rem #000'}}
                            className='bg-[#193366] text-white py-2 w-[14rem] rounded-[30px] hover:bg-[#254591]'
                        >
                            {
                                isExpanded ? "Zobacz mniej..." : "Zobacz wiecej..."
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;