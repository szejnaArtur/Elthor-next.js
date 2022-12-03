import Title from "../ui/title";
import InfoContainer from "./info-container";

const Contact = () => {
    return (
        <section
            className='pt-[2rem] text-center text-[#333333] w-full bg-[#DBD9D9]'
            id='kontakt'
        >
            <Title>Zapraszamy do kontaktu</Title>
            <InfoContainer>
                <div className='h-[18rem] my-[1.5rem] mx-[1rem] w-[30rem] bg-white py-[35px] px-[50px]'>

                </div>
                <div className='h-[18rem] my-[1.5rem] mx-[1rem] w-[30rem] bg-red-300'>

                </div>
                <div className='h-[18rem] my-[1.5rem] mx-[1rem] w-[30rem] bg-red-300'>

                </div>

            </InfoContainer>
        </section>
    )
}

export default Contact;