import Card from 'react-bootstrap/Card';
import ButtonMain from '../../common/ButtonMain/ButtonMain'

const CardPost = ({ title, author, publishedDate, shortDescription, id }) => {

    return (
        <>
            <Card className='mx-auto mb-4'>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <span style={{ fontWeight: 'bold', marginRight: '8px' }}>Author:</span> {author}
                    </Card.Text>
                    <Card.Text>
                        <span style={{ fontWeight: 'bold', marginRight: '8px' }}>PublishedDate:</span> {publishedDate}
                    </Card.Text>
                    <Card.Text>{shortDescription}</Card.Text>
                    <ButtonMain href={`/post/${id}`} variant="primary">Read more</ButtonMain>
                </Card.Body>
            </Card >
        </>
    );
};

export default CardPost;