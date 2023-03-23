import React, { useState, useEffect } from "react";
import './UnsplashImg.css';


const UnsplashImg = function(props){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       fetch(`https://api.unsplash.com/search/collections/?query=${props.query}&client_id=n9E_S2EHFcnLYsoG5u6jQxiQbaC0NN-KhidZTVGIH8w`)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
             setLoading(false);
          })
          .catch((err) => {
             console.log(err.message);
             setLoading(false);
          });
    }, []);
 
    let fullURL = "";
    if (posts.results && posts.results.length > 0) {
        fullURL = posts.results[1].cover_photo.urls.full;
        console.log(posts.results[1].cover_photo.urls.full);
    }
    
    return (
        <>
           
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex justify-content-center unsplash-container">
                <img
                    className="unsplash-img"
                    src={fullURL || "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy"}
                    alt="Cover photo from an Unsplash photo collection"
                />
                </div>
            )}
        </>
    )
   
}

export default UnsplashImg;