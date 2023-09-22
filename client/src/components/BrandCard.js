import React from 'react'

const BrandCard = ({title,Url}) => {
  return (
    <div className = 'brandCardContainer'>
      <img className = 'brandCardImage' src = {Url} alt = {title} />
      <h1 className = 'brandCardTitle'>{title}</h1>
    </div>
  )
}

export default BrandCard