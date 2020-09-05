import React, { useState } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import { Radio } from '@material-ui/core'
import useStyles from './slider.style'


let slides = [
  "https://www.w3schools.com/w3images/coffee.jpg",
  "https://www.w3schools.com/w3images/workbench.jpg",
  "https://www.w3schools.com/w3images/sound.jpg",
];


export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const classes = useStyles()

  const prevSlide = () => {

  }

  const nextSlide = () => {

  }

  const handleRadioChange = (event) => {
    setActiveSlide(+event.target.value)
  }

  return (
      <div>
          {slides.map((slide, index) => (
            <div
              className={
                activeSlide === index ? classes.active : classes.hidden
              }
            >
              <img src={slide} alt={`slide: ${index}`} />
            </div>
          ))}

            {slides.map((slide, index) => (
              <Radio 
                checked={index === activeSlide}
                value={index} 
                onChange={handleRadioChange}
              />
            ))}
      </div>
    );
  
}

