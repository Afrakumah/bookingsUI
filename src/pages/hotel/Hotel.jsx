import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleXmark, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


export default function Hotel() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
   
  const photos = [
    {
      src: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",
    },
    {
      src: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2346.jpg?t=st=1712069228~exp=1712072828~hmac=c5db21020a204abfc010b534d4b4a6bfe8dd74d2411fa9cab660c3a77af92705&w=900",
    },
    {
      src: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2724.jpg?t=st=1712069340~exp=1712072940~hmac=c5eeb7d39dfacb965b5026d8824915b973fec630f2ed4ae663f5860e5d49fe67&w=900",
    },
    {
      src: "https://img.freepik.com/free-photo/elegant-hotel-room-with-window_1203-1492.jpg?t=st=1712069389~exp=1712072989~hmac=7e299f573f15a2e911bc39333c9480430a6f39a62cfdfdf6d2a2a5828042ed0e&w=900",
    },
    {
      src: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2724.jpg?t=st=1712069340~exp=1712072940~hmac=c5eeb7d39dfacb965b5026d8824915b973fec630f2ed4ae663f5860e5d49fe67&w=900",
    },
    {
      src: "https://img.freepik.com/free-photo/elegant-hotel-room-with-window_1203-1492.jpg?t=st=1712069389~exp=1712072989~hmac=7e299f573f15a2e911bc39333c9480430a6f39a62cfdfdf6d2a2a5828042ed0e&w=900",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
   {open && <div className="slider">
    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove('l')}/>
    <div className="sliderWrapper">
      <img src={photos[slideNumber].src} alt="slider" className="sliderImg" />
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove('r')}/>
    </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="hotelsrc" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakov, Tower
                Street Apartments has accomodations with air conditioning and
                free WiFi. The units come with hardwod floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower, The nearest
                airport is John Paul II International Krakow-Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
}
