import React from 'react'
import BrandCard from './BrandCard'

const BrandContainer = () => {
  return (
    <div className = 'brandContainer'>
        <h1 className="cardContainerTitle">Grand Global Brands</h1>
        <div className = "brandCards">
            <BrandCard title = 'Giorgio Armani' Url = '/assets/images/armani_card.webp'/>
            <BrandCard title = 'Calvin Klein' Url = '/assets/images/calvin_klein_card.jpg'/>
            <BrandCard title = "LEVI'S" Url = '/assets/images/levi2_card.jpg'/>
            <BrandCard title = 'Louis Philippe' Url = '/assets/images/louis_philippe_card.jpg'/>
            <BrandCard title = 'Nike' Url = '/assets/images/nike_card.jpg'/>
            <BrandCard title = 'U.S. Polo Assn.' Url = '/assets/images/uspa2_card.jpg'/>
        </div>
    </div>
  )
}

export default BrandContainer