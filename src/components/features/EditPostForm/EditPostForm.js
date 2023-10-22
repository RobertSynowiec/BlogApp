import PostForm from '../PostForm/PostForm'
import { useDispatch, useSelector } from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsRedux'
import { useNavigate, Navigate } from 'react-router-dom';
import { useParams } from 'react-router';


const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));

    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    };

    if (!post || post.length === 0) return <Navigate to="/" />;


    return (
        <PostForm action={handleSubmit}

            title={post.title}
            author={post.author}
            publishedDate={new Date(post.publishedDate)}
            category={post.category}
            shortDescription={post.shortDescription}
            content={post.content}
            actionText="Edit post" />
    )
};

export default EditPostForm;