import Modal from 'react-modal';
import styles from '../ImageModal/ImageModal.module.css'

const ImageModal = ({ isOpen, imageUrl, onRequestClose, views, description }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Large version of the image" />
        <p className={styles.views}>Views: {views}</p>
        <p className={styles.description}>Description: {description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;