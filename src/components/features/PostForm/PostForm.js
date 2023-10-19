import React, { useState, useEffect } from 'react';
import CustomQuillEditor from '../../common/ReactQuill/ReactQuill'
import Form from 'react-bootstrap/Form';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import DatePicker from 'react-datepicker';
import dateToStr from '../../../utils/dateToStr'
import 'react-datepicker/dist/react-datepicker.css';

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
        action({ title, author, publishedDate: dateToStr(publishedDate), shortDescription, content });
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
                <div>
                    <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)}
                        dateFormat="dd/MM/yy" />

                </div>
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='PostForm.ControlInput4'>
                <Form.Label>Short description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Leave a comment here'
                    value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='PostForm.ControlInput5'>
                <Form.Label>Main content</Form.Label>
                <CustomQuillEditor value={content} onChange={setContent} placeholder='Leave a comment here' />
            </Form.Group>
            <ButtonMain onClick={handleSubmit} className='ms-1 btn btn-primary'
            >
                {actionText}
            </ButtonMain>
        </Form>
    );
};

export default PostForm;