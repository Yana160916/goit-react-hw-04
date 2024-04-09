import { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import ImageGallery from '../components/ImageGallery/ImageGallery.jsx';
import Loader from '../components/Loader/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../components/ImageModal/ImageModal.jsx';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState('');

  const handleSearchSubmit = async (query) => {
    setQuery(query);
    setPage(1);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=Tj-Ibog63A5CLWSYTiYkR2ZJsHj70wgWJUjcrbLwQw4`
      );
      const data = await response.json();
      setImages(data.results.map(image => ({
        ...image,
        views: 0,
        description: image.alt_description // Добавляем свойство для хранения описания изображения
      })));
    } catch (error) {
      setError('Error fetching images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=Tj-Ibog63A5CLWSYTiYkR2ZJsHj70wgWJUjcrbLwQw4`
      );
      const data = await response.json();
      setImages([...images, ...data.results.map(image => ({
        ...image,
        views: 0,
        description: image.alt_description // Добавляем свойство для хранения описания изображения
      }))]);
    } catch (error) {
      setError('Error fetching more images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={selectedImage}
          imageUrl={selectedImage}
          views={images.find(image => image.urls.regular === selectedImage).views}
          description={images.find(image => image.urls.regular === selectedImage).description} // Передаем описание выбранного изображения
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
