import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Card = ({title,Url}) => {

  const {handleChange} = useAppContext()

  const navigate = useNavigate()

  const onClickCard = (title) => {
    let value = ''
    if(title === "Men's"){
      value = "Men"
    }
    if(title === "Women's"){
      value = "Women"
    }
    if(title === "Kid's"){
      value = "Kid"
    }
    if(title === "Accessories"){
      value = "Accessory"
    }
    navigate('/products')
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use 'auto' for instant scrolling
    });
    handleChange({name: "category", value: value})
  }

  return (
    <div className = "card" onClick = {()=>onClickCard(title)}>
      <h1 className = "cardTitle">{title}</h1>
      <img src= {Url} alt="" className = "cardImage" />
    </div>
  )
}

export default Card