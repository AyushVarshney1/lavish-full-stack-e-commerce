import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <div className = "cardContainer">
        <h1 className = "cardContainerTitle">Shop by categories</h1>
        <div className = "cards">
            <Card title = "Men's" Url = "/assets/images/men_card.jpg"/>
            <Card title = "Women's" Url = "/assets/images/women_card.jpg"/>
            <Card title = "Kid's" Url = "/assets/images/kid_card.jpg"/>
            <Card title = "Accessories" Url = "/assets/images/accessories_card.jpg"/>
        </div>
    </div>
  )
}

export default CardContainer



