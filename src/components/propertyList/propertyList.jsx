import React from 'react'
import './propertyList.css'
import property1 from '../../assets/property1.jpg'
import property2 from '../../assets/property2.jpg'
import property3 from '../../assets/property3.jpg'
import property4 from '../../assets/property4.jpg'
import property5 from '../../assets/property5.jpg'


export default function propertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={property1} alt="property" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={property2} alt="property" className='pListImg' />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={property3} alt="property" className='pListImg' />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={property4} alt="property" className='pListImg' />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={property5} alt="property" className='pListImg' />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}
