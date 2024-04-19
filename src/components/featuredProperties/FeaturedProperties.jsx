import React from "react";
import hotel1 from "../../assets/hotel1.jpg";
import hotel2 from "../../assets/hotel2.jpg";
import hotel3 from "../../assets/hotel3.jpg";
import hotel4 from "../../assets/hotel4.jpg";
import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";



export default function FeaturedProperties() {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/api/hotels/hotels/countbytype"
  );

  return (
    <div className="fp">
      <div className="fpItem">
        <img src={hotel1} alt="hotel" className="fpImg" />
        <span className="fpName">Aparthotel Stare Niasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={hotel2} alt="hotel" className="fpImg" />
        <span className="fpName">Aparthotel Stare Niasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={hotel3} alt="hotel" className="fpImg" />
        <span className="fpName">Aparthotel Stare Niasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={hotel4} alt="hotel" className="fpImg" />
        <span className="fpName">Aparthotel Stare Niasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}
