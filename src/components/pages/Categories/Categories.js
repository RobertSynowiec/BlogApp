import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const About = () => {
    const categories = useSelector(getAllCategories);

    console.log('categories', categories)

    return (
        <div>
            <h1>Categories</h1>
            <Nav defaultActiveKey="/home" className="flex-column">
                {categories.map(category => (
                    <Nav.Link href={`/category/${category.name.toLowerCase()}`}>{category.name}</Nav.Link>
                ))}
            </Nav>
        </div >
    );
};

export default About;