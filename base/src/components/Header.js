import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <h1>Other projects!</h1>
            <h2>
                <a className ='btn' href='/task-tracker'>
                    Task Tracker
                </a> 
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='btn' to="/maze">Maze Generator</Link>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Link className='btn' to ='/base'>Empty</Link>
            </h2>
        </header>
    )
}

export default Header
