import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Board from './Board';

const MazeGen = () => {
    const board = Array((169)).fill(false);

    return (
        <div>
            <Header />
            <div className='container'>
            <Board square={board}/>
            </div>

        </div>
    )
}

export default MazeGen
