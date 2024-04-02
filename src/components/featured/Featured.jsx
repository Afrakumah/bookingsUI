import React from 'react'
import './featured.css'
import city1 from '../../assets/city1.jpg'
import city2 from '../../assets/city2.jpg'
import city3 from '../../assets/city3.jpg'

export default function Featured() {
  return (
    <div className='featured'>
        {/* <div className="featuredItem">
            <img src="" alt="bookings" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div> */}

        <div className="featuredItem">
            <img src={city1} alt="city" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={city2} alt="city" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={city3} alt="city" className='featuredImg' />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>

    </div>
  )
}
