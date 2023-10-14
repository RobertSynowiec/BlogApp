import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../NavBar/NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    return (
        <Navbar bg='primary' variant='dark' className='mt-4 mb-4 rounded'>
            <Container>
                <Navbar.Brand className='text-white' as={NavLink} to='/'>Blog App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link className={styles.navTextColor} as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link className={styles.navTextColor} as={NavLink} to='/about'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;