import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux'
import { useNavigate } from 'react-router-dom';
import ButtonMain from '../../common/ButtonMain/ButtonMain';

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
        navigate('/');
    };

    return (
        <Form>
            <Form.Group className='mb-3 col-md-6' controlId='AddPostForm.ControlInput1'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter title'
                    value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-6' controlId='AddPostForm.ControlInput2'>
                <Form.Label>Author</Form.Label>
                <Form.Control type='text' placeholder='Enter author'
                    value={author} onChange={e => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-6' controlId='AddPostForm.ControlInput3'>
                <Form.Label>Published</Form.Label>
                <Form.Control type='date' value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required
                />
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='AddPostForm.ControlInput4'>
                <Form.Label>Short description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Leave a comment here'
                    value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='AddPostForm.ControlInput5'>
                <Form.Label>Main content</Form.Label>
                <Form.Control as='textarea' rows={7} placeholder='Leave a comment here'
                    value={content} onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <ButtonMain className='ms-1 btn btn-primary' onClick={handleSubmit}
            >
                Add Post
            </ButtonMain>
        </Form>
    );
};

export default AddPostForm;