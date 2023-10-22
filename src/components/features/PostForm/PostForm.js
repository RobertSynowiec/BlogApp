import React, { useState } from 'react';
import CustomQuillEditor from '../../common/ReactQuill/ReactQuill'
import Form from 'react-bootstrap/Form';
import ButtonMain from '../../common/ButtonMain/ButtonMain';
import DatePicker from 'react-datepicker';
import dateToStr from '../../../utils/dateToStr'
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const initialTitle = props && props.title ? props.title : '';
    const initialAuthor = props && props.author ? props.author : '';
    const initialPublishedDate = props && props.publishedDate ? props.publishedDate : '';
    const initialShortDescription = props && props.shortDescription ? props.shortDescription : '';
    const initialContent = props && props.content ? props.content : '';
    const initialCategory = props && props.category ? props.category : '';
    console.log('initialCategory  ', initialCategory)

    const [title, setTitle] = useState(initialTitle || '');
    const [author, setAuthor] = useState(initialAuthor || '');
    const [publishedDate, setPublishedDate] = useState(initialPublishedDate || '');
    const [category, setCategory] = useState(initialCategory || '');
    console.log('category  ', category)
    const [shortDescription, setShortDescription] = useState(initialShortDescription || '');
    const [content, setContent] = useState(initialContent || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const categories = useSelector(getAllCategories);

    console.log('categories  ', categories)

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if (content && publishedDate) {
            action({ title, author, publishedDate: dateToStr(publishedDate), category, shortDescription, content });
        }
    };
    return (
        <Form>
            <Form.Group className='mb-3 col-md-6' controlId='PostForm.ControlInput1'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register("title", { required: true, minLength: 3 })}
                    type='text'
                    placeholder='Enter title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                {errors.title && errors.title.type === "required" && <small className="d-block form-text text-danger mt-2">This field is required</small>}

                {errors.title && errors.title.type === "minLength" && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}

            </Form.Group>
            <Form.Group className='mb-3 col-md-6' controlId='PostForm.ControlInput2'>
                <Form.Label>Author</Form.Label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    type='text'
                    placeholder='Enter author'
                    value={author} onChange={e => setAuthor(e.target.value)} />

                {errors.author && errors.author.type === "required" && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}

                {errors.author && errors.author.type === "minLength" && <small className="d-block form-text text-danger mt-2">The minimum number of characters is 3</small>}
            </Form.Group>
            <Form.Group className='mb-3 col-md-6' >
                <Form.Label>Published</Form.Label>
                <div>
                    <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)}
                        dateFormat="dd/MM/yy" />

                </div>
                {dateError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <Form.Group className='mb-3 col-md-6'>
                <Form.Label>Select a category</Form.Label>
                <Form.Select
                    {...register("category", { required: true })}
                    className='mb-3 col-md-6'
                    aria-label="Select a category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    type="text"

                >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.name} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </Form.Select>
                {errors.category && errors.category.type === "required" && (
                    <small className="d-block form-text text-danger mt-2">
                        This field is required
                    </small>
                )}
            </Form.Group>
            <Form.Group className='mb-3 col-md-8' controlId='PostForm.ControlInput4'>
                <Form.Label>Short description</Form.Label>
                <Form.Control
                    {...register("shortDescription", { required: true, minLength: 20 })}
                    as='textarea'
                    rows={5} placeholder='Leave a comment here'
                    value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                {errors.shortDescription && errors.shortDescription.type === "required" && <small className="d-block form-text text-danger mt-2">This field is required</small>}

                {errors.shortDescription && errors.shortDescription.type === "minLength" && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20)</small>}
            </Form.Group>
            <Form.Group className='mb-3 col-md-8'>
                <Form.Label>Main content</Form.Label>
                <CustomQuillEditor value={content} onChange={setContent} placeholder='Leave a comment here' />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            </Form.Group>
            <ButtonMain onClick={validate(handleSubmit)} className='ms-1 btn btn-primary'
            >
                {actionText}
            </ButtonMain>
        </Form>
    );
};

export default PostForm;