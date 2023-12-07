/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react'

import style from "./country.module.css"

const Country = (props) => {

    
    
    // eslint-disable-next-line react/prop-types
    const {name,flags,capital,population,area} = props.country;

    // eslint-disable-next-line no-unused-vars
    const handleRemoveCountry = (name)=>{
       props.onRemoveCountry(name)
    }
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag} />
           
            <h3>Name : {name.common}</h3>
            <h3> Population : {population}</h3>
            <h3>Capital : {capital}</h3>
            <h3> Area : {area}</h3>
            
            <button className={style.btn} onClick={()=>{handleRemoveCountry(name.common)}} >Remove Country</button>
        </div>
    </article>
  )
}

export default Country
