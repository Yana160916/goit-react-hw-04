import styles from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.imageGalleryContainer}>
      {images.map(image => (
        <li key={image.id} className={styles.imageGalleryItem}>
          <img 
            src={image.urls.small} 
            alt={image.alt_description} 
            onClick={() => onImageClick(image.urls.regular)} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;