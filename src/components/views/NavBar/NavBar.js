import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../NavBar/NavBar.module.scss'

const NavBar = () => {


    return (
        <Navbar bg='primary' variant='dark' className='mt-4 mb-4 rounded'>
            <Container>
                <Navbar.Brand className='text-white' href='#'>Blog App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link className={styles.navTextColor} href="#home">Home</Nav.Link>
                        <Nav.Link className={styles.navTextColor} href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;