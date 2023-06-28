import React from 'react';
import { CartWidget } from '../CartWidget';

const Navbar = () => {
  return (
    <>
      
        <h1>DeTodito</h1>
        <ul>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      
      <CartWidget />

    </>
  )
}

export { Navbar }  