import React from 'react'
import { useState } from 'react';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {

    const [color, setColor] = useState('blue');

    const buttonClick = () => {
        setColor('green');
    }

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const buttonclick = () => {
        setCount1(count1 + 1);
    }

    const button2click = () => {
        setCount2(count2 + 1);
    }

    const newItems = products.map(element => 
            <li
            key = {element.id}
            style={{
                color : color
            }}
            >
                {element.title}
                </li>
        )


    // const listItems = products.map(product =>
    //   <li
    //     key={product.id}
    //     style={{
    //       color: product.isFruit ? 'magenta' : 'darkgreen'
    //     }}
    //   >
    //     {product.title}
    //   </li>
    // );
  
    return (
        <>
        <button onClick={buttonclick}> Clicked {count1} times</button>
        <button onClick={buttonclick}> Clicked {count1} times</button>
        <ul>{newItems}</ul>
      </>
    );
  }