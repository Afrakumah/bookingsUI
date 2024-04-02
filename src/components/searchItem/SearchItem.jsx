import React from 'react'
import './searchItem.css'
import hotel1 from '../../assets/hotel1.jpg'
export default function SearchItem() {
  return (
    <div className='searchItem'>
        <img src={hotel1} alt="booking" className='siImg'/>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with air conditionig
            </span>
            <span className="siFeatures">
                Entire studio * 1 bathroom * 21m 1 full bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <span className="siPrice">$125</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}
