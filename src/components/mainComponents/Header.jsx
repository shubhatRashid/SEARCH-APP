import React from 'react'

const Header = ({showResult}) => {
  return (
    <div className={`absolute right-10 ${showResult?"z-10":""}`}>
        <img className='w-[100px] mix-blend-color-burn' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDWYEBi219Q_QseU5r63bhbrMot0Cm5Lf9O51WN2nJQ&s'/>
    </div>
  )
}

export default Header