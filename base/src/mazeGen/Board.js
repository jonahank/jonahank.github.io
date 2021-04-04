import Square from "./Square"

const Board = (props) => {

    //size 13
    const row = (i) => {
        return <div>
            {/* <Square
                board={props.square}
                status={props.square[0+i]} 
                index={0+i}
                toggle={props.toggle}
            />
            <Square
                status={props.square[1+i]}
                board={props.square}
                toggle={props.toggle}
                index={1+i}
            />
            <Square
                status={props.square[2+i]}
                board={props.square}
                toggle={props.toggle}
                index={2+i}
            />
            <Square
                status={props.square[3+i]}
                board={props.square}
                toggle={props.toggle}
                index={3+i}
            />
            <Square
                status={props.square[4+i]}
                board={props.square}
                toggle={props.toggle}
                index={4+i}
            />
            <Square
                status={props.square[5+i]}
                board={props.square}
                toggle={props.toggle}
                index={5+i}
            />
            <Square
                status={props.square[6+i]}
                board={props.square}
                toggle={props.toggle}
                index={6+i}
            />
            <Square
                status={props.square[7+i]}
                board={props.square}
                toggle={props.toggle}
                index={7+i}
            />
            <Square
                status={props.square[8+i]}
                board={props.square}
                toggle={props.toggle}
                index={8+i}
            />
            <Square
                status={props.square[9+i]}
                board={props.square}
                toggle={props.toggle}
                index={9+i}
            />
            <Square
                status={props.square[10+i]}
                board={props.square}
                toggle={props.toggle}
                index={10+i}
            />
            <Square
                status={props.square[11+i]}
                board={props.square}
                toggle={props.toggle}
                index={11+i}
            />
            <Square
                status={props.square[12+i]}
                board={props.square}
                toggle={props.toggle}
                index={12+i}
            /> */}
        </div>
    };



    return (
        // repeat this 13 times:
            <div>
                <div className='board-row' id='row'>
                {row (0)}
                </div>
                <div className='board-row' id='row'>
                {row (13)}
                </div>
                <div className='board-row' id='row'>
                {row (26)}
                </div>
                <div className='board-row' id='row'>
                {row (39)}
                </div>
                <div className='board-row' id='row'>
                {row (52)}
                </div>
                <div className='board-row' id='row'>
                {row (65)}
                </div>
                <div className='board-row' id='row'>
                {row (78)}
                </div>
                <div className='board-row' id='row'>
                {row (91)}
                </div>
                <div className='board-row' id='row'>
                {row (104)}
                </div>
                <div className='board-row' id='row'>
                {row (117)}
                </div>
                <div className='board-row' id='row'>
                {row (130)}
                </div>
                <div className='board-row' id='row'>
                {row (143)}
                </div>
                <div className='board-row' id='row'>
                {row (156)}
                </div>
            </div>
        )
}

export default Board
