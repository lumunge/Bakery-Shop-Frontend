import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Products from '../Components/Products';
import data from '../data.json';
import Cart from '../Components/Cart';
import '../App.css';
import Footer from '../Components/Footer';

export default class CakesAndConfectionaries extends Component {
    constructor(){
        super();
        this.state = {
            products: data.products,
            cartItems: [],
    }
    }


    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });
    };

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
          if(item._id === product._id){
            item.count++;
            alreadyInCart = true;
          }
        });
        if(!alreadyInCart){
          cartItems.push({...product, count: 1});
        }
        this.setState({cartItems});
        this.setState({showCart: true});
      };      

    render() {
        return (
            <div>
            <Menu />
            <div className="hero">
                <div className="banner">
                    <h1 className="bannerTitle">Some of our Best Sellers</h1>
                    <button className="bannerBtn">Shop Now </button>
                </div>
            </div>
            <Products 
                products = {this.state.products}
                addToCart = {this.addToCart}
            />
                <Cart
                    cartItems = {this.state.cartItems}
                    removeFromCart = {this.state.removeFromCart}
                />
                <Footer />
            </div>
        )
    }
}
