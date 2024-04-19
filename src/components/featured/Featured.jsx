import React from "react";
import "./featured.css";
import city1 from "../../assets/city1.jpg";
import city2 from "../../assets/city2.jpg";
import city3 from "../../assets/city3.jpg";
import useFetch from "../../hooks/useFetch";

export default function Featured() {
  const { data, loading, error } = useFetch(
  "http://localhost:4000/api/hotels/countbycity?cities=kumasi,accra,koforidua"
  );
  //  console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading, please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={city1} alt="city" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Kumasi</h1>
              <h2>532 properties</h2>
              {/* <h2>{data[0]} properties</h2> */}
            </div>
          </div>

          <div className="featuredItem">
            <img src={city2} alt="city" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Accra</h1>
              <h2>533 properties</h2>
              {/* <h2>{data[1]} properties</h2> */}
            </div>
          </div>

          <div className="featuredItem">
            <img src={city3} alt="city" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Koforidua</h1>
              <h2>534 properties</h2>
              {/* <h2>{data[2]} properties</h2> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
