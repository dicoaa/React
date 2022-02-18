import React, { useEffect, useState } from 'react'
import imagen1 from '../../assets/images/imagen1.jpg' 
import imagen2 from '../../assets/images/imagen2.jpg' 
import { Imagen } from '../Imagen/Imagen'

export const Contador = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {

        const img = document.getElementById('imagenid')
        const img2 = document.getElementById('imagenid2')
        const boton = document.getElementById('botonid')
        if (counter % 2 == 0){
            img.classList.remove('inactive')
            img.classList.add('active')
            img2.classList.remove('inactive')
            img2.classList.add('active')
            boton.classList.remove('inactivebtn')
            boton.classList.add('activebtn')
            boton.textContent = 'On'
        } else{
            img.classList.remove('active')
            img.classList.add('inactive')
            img2.classList.remove('active')
            img2.classList.add('inactive')
            boton.classList.remove('activebtn')
            boton.classList.add('inactivebtn')
            boton.textContent = 'Off'
        }
    },[counter])

  return (
    <div>
        <button id="botonid" onClick={sumar}></button>
        <Imagen src={imagen1} id="imagenid"/>
        <Imagen src={imagen2} id="imagenid2"/>
    </div>
  )
}
