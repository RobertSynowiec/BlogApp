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
        <PostForm props={post} action={handleSubmit} actionText="Edit post" />
    )
};

export default EditPostForm;