import { useEffect, useState } from "react";
import ImageGallery from "../components/ImageGallery";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Home = () => {
  const [user, setUser] = useState(false);
  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);

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
      // setLoading(false);
    };

    fetchImages();
  }, []);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return; // If there was no destination

    if (
      source.draggableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedImages = [...images];

      const imagesourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedImages] = reorderedImages.splice(imagesourceIndex, 1);
      reorderedImages.splice(storeDestinatonIndex, 0, removedImages); // remove 0 element, add removedImages in the storeDestinationIndex

      return setImages(reorderedImages);
    }
  };

  return (
    <div className="min-h-[100vh] w-[100%]">
      {user ? (
        <div>
          <h1 className="px-6 mt-5 text-xl md:text-2xl lg:text-3xl font-bold">
            Drag and Drop to rearrange images
          </h1>
          <DragDropContext onDragEnd={handleDragDrop}>
            {images.length > 0 && (
              <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 images"
                  >
                    {images.map((image, index) => (
                      <Draggable
                        draggableId={image.id}
                        key={image.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <ImageGallery key={image?.id} image={image} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </DragDropContext>
        </div>
      ) : (
        <h1 className="font-bold text-2xl">Sign In to View Images.</h1>
      )}
    </div>
  );
};

export default Home;
