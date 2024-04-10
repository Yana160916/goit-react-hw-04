import styles from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ imageUrl, altDescription, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={imageUrl} alt={altDescription} />
    </div>
  );
};

export default ImageCard;