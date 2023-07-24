import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({img,title,reviews,prevPrice,newPrice,company,color,category}) {
  console.log(img)
  return (
    <section className="card">
        <img
          src={img}
          alt="shoe"
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-review">
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <div className="total-reviews">{reviews}</div>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bar-icon" />
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card
