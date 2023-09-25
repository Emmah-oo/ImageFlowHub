import { useEffect, useState } from "react";

import ImageGallery from "../components/imageGallery";

const Home = () => {
  const [user, setUser] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser);
    }

    const fetchImages = async () => {
      const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${API_KEY}&per_page=20`
      );
      const data = await response.json();
      console.log(data);
      setImages(data);
      setLoading(false);
    };

    fetchImages();
  }, []);
  return (
    <div className="min-h-[100vh] flex items-center justify-center w-[100%]">
      {user ? (
        <div>
          <h1 className="px-6 mt-5 text-xl md:text-2xl lg:text-3xl font-bold">
            Drag and Drop to rearrange images
          </h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image) => (
                <ImageGallery key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <h1 className="font-bold text-2xl">Sign In to View Images.</h1>
      )}
    </div>
  );
};

export default Home;
