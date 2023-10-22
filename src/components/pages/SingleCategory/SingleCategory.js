import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux'
import { useParams } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardPost from '../../views/CardPost/CardPost';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import { NavLink } from 'react-router-dom';

const SingleCategory = () => {

    const { name } = useParams();
    const posts = useSelector(getAllPosts);
    const filteredPosts = posts.filter(post => post.category.toLowerCase() === name);
    console.log('filteredPosts ', filteredPosts);

    return (
        <>
            <h1>Categories: {filteredPosts[0].category}</h1>
            <Row xs={1} md={2} lg={3}>
                {filteredPosts.map(post => (
                    <Col key={post.id}>
                        <Card className='mx-auto mb-4 border p-2 border-1'>
                            <CardPost
                                id={post.id}
                                title={post.title}
                                author={post.author}
                                publishedDate={post.publishedDate}
                                category={post.category}
                                shortDescription={post.shortDescription}
                            />
                            <ButtonMain className='ms-3'
                                as={NavLink} to={`/post/${post.id}`} variant="primary">Read more
                            </ButtonMain>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
export default SingleCategory;