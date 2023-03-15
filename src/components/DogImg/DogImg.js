import React from 'react'
import { useSelector } from 'react-redux'

const DogImg = () => {
    const dog = useSelector((state) => state.data.dog)
    console.log(dog)
  return (
    <div className='img'>
        {dog.length > 0  ?  <img width={'300px'} src={dog[0].message}></img> : <p>Выберите породу собаки</p>}
    </div>
  )
}

export default DogImg
