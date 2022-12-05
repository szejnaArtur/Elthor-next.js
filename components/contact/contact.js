import {useContext, useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaHome, FaPhone, FaTelegramPlane} from 'react-icons/fa';

import Title from "../ui/title";
import InfoContainer from "./info-container";
import InfoBox from "./info-box";

import NotificationContext from "../../store/notification-context";

const Contact = () => {

    const notificationContext = useContext(NotificationContext);

    const email = 'biuro@elthor.pl';

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
                    <FaPhone className='text-4xl'/>
                    <h3 className='text-2xl my-5'>Zadzwoń do nas</h3>
                    <p className='text-xl'>+48 534 733 405 - Maciej Rąk</p>
                    <p className='text-xl'>+48 512 192 210 - Marcin Szejna</p>
                    <p className='text-xl'>+48 536 550 969 - Marcin Bujak</p>
                </InfoBox>
                <InfoBox>
                    <FaTelegramPlane className='text-4xl'/>
                    <h3 className='text-2xl my-5'>Napisz do nas</h3>
                    <CopyToClipboard text={email}>
                        <button className='text-xl' onClick={clickHandler}>{email}</button>
                    </CopyToClipboard>
                </InfoBox>
                <InfoBox>
                    <FaHome className='text-4xl'/>
                    <h3 className='text-2xl my-5'>Adres</h3>
                    <p className='text-xl'>Wodzisławska 16/A2,</p>
                    <p className='text-xl'>50-561 Wrocław</p>
                </InfoBox>
            </InfoContainer>
        </section>
    )
}

export default Contact;