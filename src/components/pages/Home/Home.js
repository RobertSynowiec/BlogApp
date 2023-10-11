import ButtonAdd from '../../common/ButtonAdd/ButtonAdd'
const Home = () => {

    return (
        <div className='d-flex justify-content-between'>
            <h1>All posts</h1>
            <ButtonAdd href='/post/add'>Add post</ButtonAdd>{' '}
        </div>
    );
};

export default Home;