import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removePost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

function ModuleDeletePost({ show, handleClose }) {

    const { id } = useParams();

    const dispatch = useDispatch();

    const remove = e => {
        e.preventDefault();
        dispatch(removePost(id));
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant='outline-info'>Cancel</Button>
                    <Button variant="primary" onClick={remove}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModuleDeletePost;