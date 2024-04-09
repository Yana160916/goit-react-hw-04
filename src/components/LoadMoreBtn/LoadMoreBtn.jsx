import styles from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.loadMoreBtnContainer}>
      <button className={styles.loadMoreBtn} onClick={onClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;