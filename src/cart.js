import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from 'axios';

const Cart = () => {
  const [cart, changecart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/dis")
      .then(cart => changecart(cart.data))
      .catch((err) =>  console.log(err));
  }, []);

  const removeItem = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res =>{ 
      console.log(res)
      window.location.reload()
      toast.success("Item removed")
    })
    .catch(err=>console.log(err))
  };

  return (
    <div className="bod">
      <header>
        <h1>Your Cart</h1>
        <br/>
        <Link to={'/'}className="logou-button">Logout</Link>
      </header>
      <div className="con">
        {cart.map(item => {
          return <div className="cart-item">
            <div className="cart-content">
            <h2>{item.Shoename}</h2>
            <p>color: {item.color}</p>
            <br/>
              <button onClick={() => removeItem(item._id)} className="btn btn-danger">Remove</button>
          </div>
          <img src={item.image} alt={item.Shoename} className="img-size" />
          </div>
    })}
      </div>
    </div>
  );
};

export default Cart;
