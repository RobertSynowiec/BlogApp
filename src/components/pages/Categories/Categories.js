import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { NavLink } from 'react-router-dom';

const About = () => {
    const categories = useSelector(getAllCategories);

    return (
        <>
            <h1>All categories</h1>
            <Nav defaultActiveKey="/home" className="flex-column">
                {categories.map(category => (
                    <Nav.Link as={NavLink} to={`/category/${category.name.toLowerCase()}`}>{category.name}</Nav.Link>
                ))}
            </Nav>
        </ >
    );
};

export default About;