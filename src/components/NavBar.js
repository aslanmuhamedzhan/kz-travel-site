import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import './NavBar.css'
import {useSelector, useDispatch} from 'react-redux'



function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const theme = useSelector(state => state)
    const dispatch = useDispatch();

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={theme === 'light' ? 'navbar light' : 'navbar dark'}>
                <div className='navbar-container'>
                    <div className='logo-themetoggler'>
                        <Link to='/' className='toggle-theme' onClick={()=>dispatch({type: 'toggle'})}><i className={theme === 'light' ? "fas fa-sun" : "fas fa-moon"}></i></Link>
                        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}> TRAVELKZ</Link>
                    </div>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? `nav-menu active ${theme === 'light' ? 'light' : 'dark'}` : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
