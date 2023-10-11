import styles from './Post.module.scss';

const Post = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Post</h1>
            <p className={styles.subtitle}>Subtilte</p>
        </div>
    );
};

export default Post;