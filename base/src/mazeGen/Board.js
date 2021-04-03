import Square from "./Square"

const Board = (props) => {

    //size 13
    const row = (i) => {
        return <div>
            <Square> 
                status={props.square[0+i]}
                index={0+i}
            </Square>
            <Square> 
                status={props.square[1+i]}
                index={1+i}
            </Square>
            <Square> 
                status={props.square[2+i]}
                index={2+i}
            </Square>
            <Square> 
                status={props.square[3+i]}
                index={3+i}
            </Square>
            <Square> 
                status={props.square[4+i]}
                index={4+i}
            </Square>
            <Square> 
                status={props.square[5+i]}
                index={5+i}
            </Square>
            <Square> 
                status={props.square[6+i]}
                index={6+i}
            </Square>
            <Square> 
                status={props.square[7+i]}
                index={7+i}
            </Square>
            <Square> 
                status={props.square[8+i]}
                index={8+i}
            </Square>
            <Square> 
                status={props.square[9+i]}
                index={9+i}
            </Square>
            <Square> 
                status={props.square[10+i]}
                index={10+i}
            </Square>
            <Square> 
                status={props.square[11+i]}
                index={11+i}
            </Square>
            <Square> 
                status={props.square[12+i]}
                index={12+i}
            </Square>
        </div>
    };



    return (
        // repeat this 13 times:
            <div>
                <div className='board-row' id='row'>
                {row (0)}
                </div>
                <div className='board-row' id='row'>
                {row (1)}
                </div>
                <div className='board-row' id='row'>
                {row (2)}
                </div>
                <div className='board-row' id='row'>
                {row (3)}
                </div>
                <div className='board-row' id='row'>
                {row (4)}
                </div>
                <div className='board-row' id='row'>
                {row (5)}
                </div>
                <div className='board-row' id='row'>
                {row (6)}
                </div>
                <div className='board-row' id='row'>
                {row (7)}
                </div>
                <div className='board-row' id='row'>
                {row (8)}
                </div>
                <div className='board-row' id='row'>
                {row (9)}
                </div>
                <div className='board-row' id='row'>
                {row (10)}
                </div>
                <div className='board-row' id='row'>
                {row (11)}
                </div>
                <div className='board-row' id='row'>
                {row (12)}
                </div>
            </div>
        )
}

export default Board
