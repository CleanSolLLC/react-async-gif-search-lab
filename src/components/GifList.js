import React from "react";

const GifList = (url) => {
    return (
       <ul>
          <li>
             <img
               src={url.url}
               alt="giph"
               />
          </li> 
       </ul>
    )
}
export default GifList;