import React from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../ducks/data/actions'
import '../../App.css'


const NavBar = () => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        console.log('handleClick')
        dispatch(getData(e.target.id))
    }
  return (
    <div className='nav'>
        <div className='row'>
            <div className='div' onClick={handleClick} id='Akita'>Akita</div>
            <div className='div' onClick={handleClick} id='Chow'>Chow</div>
            <div className='div' onClick={handleClick} id='Boxer'>Boxer</div>
            <div className='div' onClick={handleClick} id='Husky'>Husky</div>
            <div className='div' onClick={handleClick} id='Mix'>Mix</div>
        </div>
    </div>
  )
}

export default NavBar
