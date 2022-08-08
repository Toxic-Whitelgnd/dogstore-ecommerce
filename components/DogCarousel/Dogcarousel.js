import React from 'react'
import Image from "next/image"
import img1 from "../../images/husky.jpg"
import img2 from "../../images/bulldog.jpg"
import img3 from "../../images/labroder.jpg"
import Carousel from 'react-bootstrap/Carousel';

export default function Dogcarousel() {
  return (
    <div className='home'>
       <Carousel>
      <Carousel.Item interval={1000}>
      <Image className="d-block w-100" src={img1} alt="First slide"  width={1600} height={900}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image className="d-block w-100" src={img2} alt="First slide"   width={1600} height={900}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Image className="d-block w-100" src={img3} alt="First slide"   width={1600} height={900}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}



// <Image className="d-block w-100" src={img1} alt="First slide"  width={800} height={500}/>