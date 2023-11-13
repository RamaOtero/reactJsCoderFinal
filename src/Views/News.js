import React from 'react'
import img1 from '../Assets/merch/hoodie4.jpg'
import img2 from '../Assets/merch/hoodie1.jpg'
import img3 from '../Assets/merch/hoodie2.jpg'
import img4 from '../Assets/merch/hoodie3.jpg'
import '../App.css'

const News = () => {
  return (
    <div>
      <div className='news'>
        <div className='cardNews shadow-inset-center'>
            <img src={img1}></img>
          <div className='cardNewsText'>
            <h3>Colaboraciones Exclusivas con Artistas y Diseñadores</h3>
            <p>Las marcas de hoodies están llevando la moda a un nivel completamente nuevo al colaborar con artistas y diseñadores reconocidos. Ediciones limitadas de hoodies con diseños exclusivos están causando sensación en el mundo de la moda urbana. Estas colaboraciones no solo ofrecen prendas únicas, sino que también respaldan y promocionan el talento creativo de diversos artistas.</p>
          </div>
        </div>
        <div className='cardNews'>
            <img src={img4}></img>
          <div className='cardNewsText'>
            <h3>Personalización a la Carta: Hoodies únicos para cada cliente</h3>
            <p>¿Quieres un hoodie que refleje tu estilo único? Las empresas ahora están ofreciendo servicios de personalización a la carta. Desde la elección del color y el diseño hasta la posibilidad de agregar detalles personalizados, los consumidores pueden ahora diseñar su propia prenda de manera sencilla y obtener un hoodie que sea verdaderamente único.</p>
          </div>
        </div>
        <div className='cardNews'>
            <img src={img2}></img>
          <div className='cardNewsText'>
            <h3>Experiencias Inmersivas de Compra:</h3>
            <p>Las tiendas físicas y virtuales están reinventando la experiencia de compra de hoodies. Desde probadores virtuales hasta espacios interactivos en tiendas físicas, las marcas están buscando formas innovadoras de brindar a los clientes una experiencia de compra más inmersiva y personalizada.</p>
          </div>
        </div>
        <div className='cardNews'>
            <img src={img3}></img>
          <div className='cardNewsText'>
            <h3> Hoodies Multifuncionales: Más Allá de la Moda Urbana:</h3>
            <p>Los hoodies no son solo para el uso casual. Empresas están diseñando hoodies multifuncionales que se adaptan a diferentes situaciones y actividades. Desde hoodies para hacer ejercicio hasta modelos elegantes para eventos más formales, la versatilidad está en aumento.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News