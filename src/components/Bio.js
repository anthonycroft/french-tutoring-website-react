import React from 'react';
import './Bio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bertrandIcon from '../assets/images/Bertrand-Icon.png';
import alliance from'../assets/images/af-piccy.png';

const Bio = ({title, description}) => {

    return (
        <section className="jumbotron-1 about-Bertrand container" id="about">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img class= "Bertrand-icon" src={bertrandIcon} alt= "Bertrand's emoticon">
                    
                </img>
                <h1 class="display-4 text-center about-Bertrand-h1 section-heading">
                    {title}
                </h1>
                <p class="lead text-center">
                    {description}
                    </p>
                    <div class="text-center">
                        <img src={alliance} alt= "alliance francaise logo" height="80vh"></img>
                    </div>
            </div>
         </section>
    
)}


export default Bio;

