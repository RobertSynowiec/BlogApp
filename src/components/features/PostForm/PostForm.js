import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ButtonMain from '../../common/ButtonMain/ButtonMain';

const PostForm = ({ action, actionText, props }) => {

    const initialTitle = props && props.title ? props.title : '';
    const initialAuthor = props && props.author ? props.author : '';
    const initialPublishedDate = props && props.publishedDate ? props.publishedDate : '';
    const initialShortDescription = props && props.shortDescription ? props.shortDescription : '';
    const initialContent = props && props.content ? props.content : '';

    const [title, setTitle] = useState(initialTitle || '');
    const [author, setAuthor] = useState(initialAuthor || '');
    const [publishedDate, setPublishedDate] = useState(initialPublishedDate || '');
    const [shortDescription, setShortDescription] = useState(initialShortDescription || '');
    const [content, setContent] = useState(initialContent || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };


    return (
        <Form>
            <Form.Group className='mb-3 col-md-6' controlId='PostForm.ControlInput1'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter title'
                    value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-6' controlId='PostForm.ControlInput2'>
                <Form.Label>Author</Form.Label>
                <Form.Control type='text' placeholder='Enter author'
                    value={author} onChange={e => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-6' controlId='PostForm.ControlInput3'>
                <Form.Label>Published</Form.Label>
                <Form.Control type='date' value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required
                />
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='PostForm.ControlInput4'>
                <Form.Label>Short description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Leave a comment here'
                    value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='PostForm.ControlInput5'>
                <Form.Label>Main content</Form.Label>
                <Form.Control as='textarea' rows={7} placeholder='Leave a comment here'
                    value={content} onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <ButtonMain onClick={handleSubmit} className='ms-1 btn btn-primary'
            >
                {actionText}
            </ButtonMain>
        </Form>
    );
};

export default PostForm;