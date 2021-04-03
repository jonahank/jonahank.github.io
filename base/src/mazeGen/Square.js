const Square = (props) => {
    return (
        <button className='square' 
            index = {props.value}
            status = {props.status}
            >
        </button>
    )
}

export default Square
