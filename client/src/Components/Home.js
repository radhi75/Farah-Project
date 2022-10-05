

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { FaShoppingCart } from 'react-icons/fa';
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <div className='home' >
    <section>
  <Carousel  activeIndex={index} onSelect={handleSelect} style={{witdh:"100%"}}>
      <Carousel.Item>
        <img style={{witdh:"1000px",height:"500px"}}
          className="d-block w-100"
          src="https://www.colonelgustave.com/wp-content/uploads/2021/02/Golden-retriever-e1613467936598.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Golden retriver</h3>
          <p>get your best friend new</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{witdh:"1000px",height:"500px"}}
          className="d-block w-100"
          src="https://www.woopets.fr/assets/races/000/160/og-image/chow-chow_2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>chaw chaw </h3>
          <p>I am the lion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{witdh:"1000px",height:"500px"}}
          className="d-block w-100"
          src="https://www.woopets.fr/assets/races/000/213/og-image/husky-siberien_2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>husky</h3>
          <p>
            snow
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></section>
<section className='about-us'>
  <h1> about us</h1>
  <p>lscizizncncsicnaiovnaevnaevnaivpnaevaibnvaieobvqvinpaoevaepinvqvnnaibpeveapvnai
    vniaevnbaevbipaqvinaeiovbapiapi</p>
    <Button variant="success" href="/productList">Shop now <FaShoppingCart/></Button>
</section>
  </div>;
};

export default Home;