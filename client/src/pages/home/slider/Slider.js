import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Button from '@material-ui/core/Button'
import useStyles from './slider.style'
import { SLIDES } from './slides'

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const classes = useStyles()

  const handlePrevSlide = () => {
    let slideNumber = activeSlide - 1
    if (slideNumber < 0) {
      setActiveSlide(SLIDES.length - 1)
    } else {
      setActiveSlide(slideNumber)
    }
  }

  const handleNextSlide = () => {
    let slideNumber = activeSlide + 1
    if (slideNumber === SLIDES.length) {
      setActiveSlide(0)
    } else {
      setActiveSlide(slideNumber)
    }

  }

  const handleRadioChange = (event) => {
    setActiveSlide(+event.target.value)
  }

  return (
    <div className={classes.root}>

      <div className={classes.slide}>
        {SLIDES.map((slide, index) => (
          <div
            className={
              activeSlide === index ? classes.active : classes.hidden
            }
          >
            <img className={classes.img} src={slide} alt={`slide: ${index}`} />
          </div>
        ))}
      </div>

      <div className={classes.control}>
        <Button onClick={handlePrevSlide}>
          <ArrowBackIosIcon />
        </Button>
        {SLIDES.map((slide, index) => (
          <Radio
            checked={index === activeSlide}
            value={index} 
            onChange={handleRadioChange}
            size='small'
          />
        ))}
        <Button onClick={handleNextSlide}>
          <ArrowForwardIosIcon />
        </Button>
      </div>

    </div>
  );
  
}

