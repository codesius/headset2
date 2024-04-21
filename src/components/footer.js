import React from 'react'
import '../styles/footer.css'
import Codesius from '../assets/img/codesius.svg'

function footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <img src={Codesius} alt='Codesius' />
            <p>DEV.CODESIUS@GMAIL.COM</p>
            <p className='last'>Copyright © CODESIUS 2024</p>
        </div>
    </div>
  )
}

export default footer