import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      height={80}
      width={80}
      radius={9}
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      wrapperClassName="loader-wrapper" 
    />
  );
};

export default Loader;