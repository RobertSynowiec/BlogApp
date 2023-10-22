import Card from 'react-bootstrap/Card';

const CardPost = ({ title, author, publishedDate, category, shortDescription }) => {

    return (
        <>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span style={{ fontWeight: 'bold', marginRight: '8px' }}>Author:</span> {author}
                </Card.Text>
                <Card.Text>
                    <span style={{ fontWeight: 'bold', marginRight: '8px' }}>PublishedDate:</span> {publishedDate}
                </Card.Text>
                <Card.Text><span style={{ fontWeight: 'bold', marginRight: '8px' }}>Category:</span> {category}</Card.Text>
                <Card.Text>{shortDescription}</Card.Text>
            </Card.Body>
        </>
    );
};

export default CardPost;