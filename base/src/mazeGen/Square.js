const Square = (props) => {
    let name = 'square';
    const riBorder = Math.random();
    const boBorder = Math.random();
    const borderStyle = {
        borderRightWidth: (riBorder<0.27) && !(props.index%13 === 12)? '5px': '1px',
        borderRightColor: (riBorder<0.27) && !(props.index%13 === 12)? 'red': '',
        borderBottomWidth: (boBorder<0.27) && (props.index<156)? '5px' : '',
        borderBottomColor: (boBorder<0.27) && (props.index<156)? 'red' : '',
    }

    const status = () => {
        props.toggle(props.index);
        let newStatus = props.board[props.index];
        
        let newName = newStatus? 'square Green' : 'square';
        name = newName;
        document.getElementById(`square${props.index}`).className = name;
    }

    return (
        <div id={`square${props.index}`}
            style ={borderStyle}
            className={'square'} 
            onClick={() => status()}
            >
        </div>
    )

    
}

export default Square
