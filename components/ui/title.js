const Title = (props) => {
    return(
        <h1 className='xl:text-6xl lg:text-5xl text-4xl'>
            {props.children}
        </h1>
    )
}

export default Title;