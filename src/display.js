import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

const Display = () => {
  const [shoedata, shoedatachange] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/display')
    .then(shoedata=>shoedatachange(shoedata.data))
    .catch(err=>console.log(err))
  }, []);

  const addTocart = (item) => {
    const newItem = {
        Shoename: item.Shoename,
        Price: item.Price,
        color: item.color,
        size: item.size,
        image: item.image,
    };

    axios.post('http://localhost:3001/addToCart', newItem)
        .then((response) => {
            console.log('Item added to cart:', response.data);
            toast.success('Item added to cart!');
        })
        .catch((error) => {
            console.error('Error adding item to cart:', error);
            toast.error('Error adding item to cart. Please try again later.');
        });
};

  return (
    <div className="bod">
      <header>
        <div className="top-buttons">
            <Link to={'/cart'} className="btn btn-primary">Cart</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/'}className="btn btn-primary">Logout</Link>
        </div>
        <h1>Shoeish</h1>
        <p className="slogan">Step into Style and Comfort</p>
        </header>
        <div className="cont">
	      {shoedata.map(item => {
        return <div className="shoe-card">
            <img className="img-resize" src={item.image} alt={item.Shoename}/>
            <h2>{item.Shoename}</h2>
            <p>Size: {item.size}</p>
            <p>Color:{item.color}</p>
            <p>${item.Price}</p>
            <button type="submit" onClick={() => addTocart(item)}>Add to Cart</button>
          </div>
      })}
      </div>
      </div>
  );
};

export default Display;
