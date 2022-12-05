const InfoBox = (props) => {
    return(
        <div
            style={{boxShadow: '0 0 0.7rem #000'}}
            className='h-[18rem] w-[30rem] my-[1.5rem] mx-[1rem]
             bg-white py-[35px] px-[50px] rounded-xl
             flex flex-col items-center justify-center'
        >
            {props.children}
        </div>
    )
}

export default InfoBox;