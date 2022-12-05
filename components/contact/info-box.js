const InfoBox = (props) => {
    return(
        <div
            style={{
                boxShadow: '0 0.3rem 1.9rem #000'
            }}
            className='h-[18rem] my-[1.5rem] mx-[1rem] w-[30rem] bg-white py-[35px] px-[50px] flex flex-col items-center'
        >
            {props.children}
        </div>
    )
}

export default InfoBox;