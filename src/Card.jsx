import React from "react";


function Card(props)
{
    return(
        <div className="card_container">
            <div className="image_box">
            <img src={props.imgsrc}/>
            </div>
            <div className="content_box">
              <div className="title">
              A netfilx Original Series
              </div>
              <div className="movie_title"> 
              {props.mname}
              </div>
              <div className="watch_btn">
               <a href={props.movieslink}>
               <button>Watch Now</button>
               </a>
              </div>
            </div>
        </div>
    )
}

export default Card;