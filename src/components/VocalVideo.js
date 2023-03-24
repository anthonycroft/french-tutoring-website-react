import React, { useEffect } from 'react';
import Slider from 'react-slick';

const VocalVideo = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vocalvideo.com/embed/v1/host.js';
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{ textAlign: 'center', margin: '0 auto', width: '100%', minWidth: '200px' }}>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: 'transparent' }}>
        <Slider {...settings}>
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            allowTransparency
            width="100%"
            frameBorder="0"
            loading="lazy"
            name="vocalvideo_647"
            scrolling="no"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            src="https://vocalvideo.com/embed/v1/galleries/647"
            title="Vocal Video"
            style={{
              background: 'transparent',
              position: 'relative',
              width: '1%',
              minWidth: '100%',
              height: '80vh',
              zIndex: 1,
              display: 'block'
            }}
          />
        </Slider>
      </div>
    </div>
  );
};

export default VocalVideo;

