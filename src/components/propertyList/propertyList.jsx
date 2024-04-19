import React from "react";
import "./propertyList.css";
import property1 from "../../assets/property1.jpg";
import property2 from "../../assets/property2.jpg";
import property3 from "../../assets/property3.jpg";
import property4 from "../../assets/property4.jpg";
import property5 from "../../assets/property5.jpg";
import useFetch from "../../hooks/useFetch";

export default function propertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/api/hotels/hotels/countbytype"
  );
  // console.log(data)

  // const images = [
  //    "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",
  //    "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",
  //    "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",
  //    "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",
  //    "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",

  // { property1 },
  // { property2 },
  // { property3 },
  // { property4 },
  // { property5 },
  // ];

  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {/* {data &&
            images.map((img, i) => {
              <div className="pListItem" key={i}>
                <img src={img} alt="property" className="pListImg" />

                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>;
            })} */}

          <div className="pListItem">
            <img src={property2} alt="property" className="pListImg" />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img src={property2} alt="property" className="pListImg" />
            <div className="pListTitles">
              <h1>Cabins</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img src={property3} alt="property" className="pListImg" />
            <div className="pListTitles">
              <h1>Apartments</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img src={property4} alt="property" className="pListImg" />
            <div className="pListTitles">
              <h1>Villas</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img src={property5} alt="property" className="pListImg" />
            <div className="pListTitles">
              <h1>Resorts</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
