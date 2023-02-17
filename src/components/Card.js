import React from "react"

const Card = (props) => {
    return (
      <div className="col-3 card-container">
        <div className="url">
            <img src={props.url} />
        </div>
        <div>
            <h3>{props.header}</h3>
            <p>{props.content}</p>
            <ul>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-dribbble"></i>
            <i class="fa-brands fa-facebook-f"></i>
            </ul>
        </div>
      </div>
    )
  }
  
  export default Card