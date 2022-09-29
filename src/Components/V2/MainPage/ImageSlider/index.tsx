import React from 'react';
import axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

export const ImageSlider = () => {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    const shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        'https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948'
      );
      console.log('==========>response = ', response);
      console.log('==========>shouldCancel = ', shouldCancel);
      if (!shouldCancel && response.data && response.data.length > 0) {
        console.log('==========> = ');
        setImages(
          response.data.map((url) => ({
            original: `${url}=w1024`,
          }))
        );
      }
    };
    call();
  }, []);

  return images ? (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
      showThumbnails={false}
    />
  ) : null;
};
