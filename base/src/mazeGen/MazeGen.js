import { Link } from 'react-router-dom';
import Header from '../components/Header';

const MazeGen = () => {
    return (
        <div>
            <Header />
            Hello
            @ <Link className='btn' to="/base">Go Back</Link>
        </div>
    )
}

export default MazeGen
