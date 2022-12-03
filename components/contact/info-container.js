const InfoContainer = (props) => {
    return(
        <div className='flex flex-row items-center justify-center flex-wrap'>
            {props.children}
        </div>
    )
}

export default InfoContainer;