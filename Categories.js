import React from 'react'
import Categorie from './Categorie'

function Categories(props) {
  return (
    <div className='container d-flex p-5 justify-content-around'>
      <Categorie categorie="Technology" paragraph="Featuring Les Numériques" />,
      <Categorie categorie="Business" paragraph="Featuring Business" />,
      <Categorie categorie="Sport" paragraph="Featuring Sport" />
    </div>
  )
}

export default Categories