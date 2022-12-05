import {useContext} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaCopy, FaHome, FaPhone, FaTelegramPlane} from 'react-icons/fa';

import Title from "../ui/title";
import InfoContainer from "./info-container";
import InfoBox from "./info-box";

import NotificationContext from "../../store/notification-context";

const Contact = () => {

    const notificationContext = useContext(NotificationContext);

    const email = 'biuro@elthor.pl';

    const phones = [
        {name: 'Maciej Rąk', number: '+48 534 733 405'},
        {name: 'Marcin Szejna', number: '+48 512 192 210'},
        {name: 'Marcin Bujak', number: '+48 536 550 969'},
    ]

    const clickHandler = () => {
        notificationContext.showNotification({
            title: 'Sukces!',
            message: 'Skopiowano do schowka.',
            status: 'success'
        });
    }

    return (
        <section
            className='pt-[2rem] text-center text-[#333333] w-full bg-[#DBD9D9]'
            id='kontakt'
        >
            <Title>Zapraszamy do kontaktu</Title>
            <InfoContainer>
                <InfoBox>
                    <FaPhone className='text-4xl text-[#193366]'/>
                    <h3 className='text-3xl my-5'>Zadzwoń do nas</h3>
                    {phones.map(phone => (
                        <CopyToClipboard text={phone.number} key={phone.number}>
                            <div className='flex flex-row cursor-pointer' onClick={clickHandler}>
                                <p className='text-[18px] md:text-[22px] text-[#193366] font-bold'>
                                    {`${phone.number} - ${phone.name}`}
                                </p>
                                <FaCopy className='text-[22px] text-[#19336688] my-1 mx-2'/>
                            </div>
                        </CopyToClipboard>
                    ))}
                </InfoBox>
                <InfoBox>
                    <FaTelegramPlane className='text-4xl text-[#193366]'/>
                    <h3 className='text-3xl my-5'>Napisz do nas</h3>
                    <CopyToClipboard text={email}>
                        <div className='flex flex-row cursor-pointer' onClick={clickHandler}>
                            <button className='text-xl md:text-2xl text-[#193366] font-bold'>{email}</button>
                            <FaCopy className='text-xl md:text-2xl text-[#19336688] my-1 mx-2'/>
                        </div>
                    </CopyToClipboard>
                </InfoBox>
                <InfoBox>
                    <FaHome className='text-4xl text-[#193366]'/>
                    <h3 className='text-3xl my-5'>Adres</h3>
                    <p className='text-xl md:text-2xl text-[#193366] font-bold'>Wodzisławska 16/A2,</p>
                    <p className='text-xl md:text-2xl text-[#193366] font-bold'>50-561 Wrocław</p>
                </InfoBox>
            </InfoContainer>
        </section>
    )
}

export default Contact;