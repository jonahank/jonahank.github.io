const Square = (props) => {

    return (
        <div className={props.board[props.index]? 'squareGreen' : 'square'} 
            onClick={() => props.toggle(props.index)}
            >
        </div>
    )
}

export default Square
