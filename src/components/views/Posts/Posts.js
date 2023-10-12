import React from 'react';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardPost from '../CardPost/CardPost';
import { getAllPosts } from '../../../redux/postsRedux'
import Card from 'react-bootstrap/Card';
import ButtonMain from '../../common/ButtonMain/ButtonMain'

const Posts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <Row xs={1} md={2} lg={3}>
            {posts.map(post => (
                <Col key={post.id}>
                    <Card className='mx-auto mb-4 border p-2 border-1'>
                        <CardPost
                            id={post.id}
                            title={post.title}
                            author={post.author}
                            publishedDate={post.publishedDate}
                            shortDescription={post.shortDescription}

                        />
                        <ButtonMain className='ms-3'
                            href={`/post/${post.id}`} variant="primary">Read more</ButtonMain>
                    </Card>
                </Col>
            ))}
        </Row>
    );

}
export default Posts;