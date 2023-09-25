import PropTypes from "prop-types";

const ImageGallery = ({ image }) => {
  return (
    <div className="w-[100%] px-6 my-6">
      <div className="group relative">
        <img
          src={image.urls.raw}
          alt=""
          className="w-full h-auto cursor-pointer transition-transform transform duration-300 ease-in-out group-hover:grayscale-0"
        />
        <div className="absolute cursor-pointer inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <h1 className="text-white text-lg self-start px-4 py-2 rounded-md">{image.description || ''}</h1>
        </div>
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGallery;
