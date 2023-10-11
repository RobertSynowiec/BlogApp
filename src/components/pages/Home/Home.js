import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Home</h1>
            <p className={styles.subtitle}>Subtilte</p>
        </div>
    );
};

export default Home;