const Square = (props) => {
    let name = 'square';

    const status = () => {
        props.toggle(props.index);
        let newStatus = props.board[props.index];
        
        let newName = newStatus? 'square Green' : 'square';
        name = newName;
        document.getElementById(`square${props.index}`).className = name;
    }

    return (
        <div id={`square${props.index}`} className={'square'} 
            onClick={() => status()}
            >
        </div>
    )

    
}

export default Square
