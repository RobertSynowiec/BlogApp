import CardPost from '../../views/CardPost/CardPost';
import { getPostById } from '../../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import Card from 'react-bootstrap/Card';
import { removePost } from '../../../redux/postsRedux'

const Post = () => {
    const { id } = useParams();

    const postData = useSelector(state => getPostById(state, id));
    const dispatch = useDispatch();

    const remove = e => {
        e.preventDefault();
        console.log('działa')
        if (postData && postData.length > 0) {
            dispatch(removePost(postData[0].id));
        }
    };

    if (!postData || postData.length === 0) return <Navigate to="/" />;

    return (
        <div>
            <div className='d-flex justify-content-around'>
                <h1>{postData[0].title}</h1>
                <div className='d-flex'>
                    <ButtonMain href={`/post/edit/${id}`} variant='outline-info'>Edit</ButtonMain>
                    <ButtonMain onClick={remove} className='ms-1' variant='outline-danger'>Delete</ButtonMain>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <Card className='mx-auto mb-4 border-0'>

                    {postData.map(post =>
                        <CardPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            publishedDate={post.publishedDate}
                            shortDescription={post.shortDescription}
                        />)}
                </Card>
            </div>
        </div>
    );
};

export default Post;

