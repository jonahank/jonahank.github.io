import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Board from './Board';

const MazeGen = () => {

    //const board = Array(169).fill(true);

    const [gameBoard, setBoard] = useState ([]);

    useEffect( () => {
        const getBoard = async () => {
            setBoard(Array(169).fill(false))
        }

        getBoard();
    }, [] )


    //switch between true/false
    const toggle = (i) => {
        let newBoard = gameBoard;
        newBoard[i] = (!gameBoard[i]);
        setBoard(newBoard);
    }

    return (
        <div>
            <Header />
            <div className='container'>
            <Board 
                square={gameBoard}
                toggle={toggle}
            />
            </div>

        </div>
    )
}

export default MazeGen
