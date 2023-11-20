import React, { useState } from 'react'

import data from '../components/json/data.json'

export const Place = () => {

    const [selectedImage, setSelectedImages] = useState(data.places[0].imageurl)
  return (
    <section className="place section" id="place">
    <div className="place__container container">
      <h2 className="section__title">
        Make you feels good With <br />
        our comfy fasilities
      </h2>

      <div className="place__content grid">
        <div className="place__images">
          <img
            src={selectedImage}
            alt=""
            className="place__img-big"
          />
          <div className="place__img-smalls">
           {data.places.map((place, index)=>{
            return(
                <>
                <img
                 key={index}
                src={place.imageUrl}
                alt=""
                onClick={()=>setSelectedImages(place.imageUrl)
                }
                className={`place__img-small ${selectedImage === place.imageUrl && 'active'}`}
              />
              </>
            )
           })}
           
            
          </div>
        </div>

        <div className="place__data">
          <h2 className="place__title">Find a place you love</h2>
          <p className="place__description">
            We provide the best place to stay productive <br />
            and focus with good vibes and beautiful design.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
