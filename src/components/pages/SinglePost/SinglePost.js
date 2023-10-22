import CardPost from '../../views/CardPost/CardPost';
import { getPostById } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate, NavLink } from 'react-router-dom';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModuleDeletePost from '../../common/Modal/Modal'

const Post = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    if (!postData || postData.length === 0) return <Navigate to="/" />;

    return (
        <div>
            <div className='d-flex justify-content-around'>
                <h1>{postData.title}</h1>
                <div className='d-flex'>
                    <ButtonMain as={NavLink} to={`/post/edit/${id}`} variant='outline-info'>Edit</ButtonMain>

                    <ButtonMain className='ms-1' variant="outline-danger" onClick={handleShow}>
                        Delete
                    </ButtonMain>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <Card className='mx-auto mb-4 border-0'>

                    <CardPost
                        key={postData.id}
                        id={postData.id}
                        title={postData.title}
                        author={postData.author}
                        publishedDate={postData.publishedDate}
                        category={postData.category}
                        shortDescription={postData.shortDescription}
                    />
                </Card>
            </div>

            <ModuleDeletePost
                show={show}
                handleClose={handleClose}
            />
        </div>
    );
};

export default Post;

