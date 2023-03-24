import React, { useEffect } from 'react';

const VideoEmbed = () => {
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

  return (
    <div style={{ width: '100%', margin: '0 auto', maxWidth: '640px', minWidth: '240px' }}>
      <div style={{ position: 'relative', width: '100%', minHeight: '100px', overflow: 'hidden', backgroundColor: 'transparent' }}>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          allowTransparency={true}
          width="100%"
          frameBorder="0"
          loading="lazy"
          name="vocalvideo_69206"
          scrolling="no"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          src="https://vocalvideo.com/embed/v1/cards/69206?card%5Baccent_color%5D=%23003A9C&card%5Bbackground_color%5D=%23FFFFFF&card%5Bbackground_gradient%5D=false&card%5Bbody_color%5D=%2336474F&card%5Bcorner_radius%5D=large&card%5Bdisplay_fields%5D=pull_quote&card%5Bfont_size%5D=m&card%5Bheading_color%5D=%23FF4C6C&card%5Bheading_font_id%5D=default_regular&card%5Bmax_width%5D=auto&card%5Bquote_mark%5D=1&card%5Bshadows%5D=large&card%5Bshow_attribution%5D=true&card%5Btext_font_id%5D=default_regular&card%5Bthumbnail_aspect_ratio%5D=landscape&card%5Btype%5D=standard"
          title="Vocal Video"
          style={{ background: 'transparent', position: 'relative', width: '1%', minWidth: '100%', height: '100px', zIndex: 1, display: 'block' }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;
