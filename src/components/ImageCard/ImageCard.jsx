const ImageCard = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Large version of the image" />
    </div>
  );
};

export default ImageCard;