import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactMain'>
        <div className='contactInfo'>
          <span>prototype@hoodies.com</span>
          <span>+54 9 221 999 9999</span>
          <span>Horarios: 9:30 am | 18:00 pm ARG</span>
        </div>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52343.08435774937!2d-57.994369748163!3d-34.92043086951742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700879856176!5m2!1ses-419!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact