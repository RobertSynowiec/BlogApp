import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardPost from '../card/card';

const Posts = () => {

    const posts = useSelector(state => state.posts);

    if (!posts || posts.length === 0) return <Navigate to="/" />;

    return (
        <Row xs={1} md={2} lg={3}>
            {posts.map(post => (
                <Col key={post.id}>
                    <CardPost
                        id={post.id}
                        title={post.title}
                        author={post.author}
                        publishedDate={post.publishedDate}
                        shortDescription={post.shortDescription}
                    />
                </Col>
            ))}
        </Row>
    );

}
export default Posts;