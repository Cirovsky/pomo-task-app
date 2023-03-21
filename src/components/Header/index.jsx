import {AiOutlineMenu} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import './Header.css';

const Header = props => {
    return(
        <header className='header'>
            <AiOutlineMenu className='menu'/>
            <h1 className='title'>pomo task</h1>
            <FaUserCircle className='user'/>
        </header>
    )
}

export default Header;