import React, { Component } from 'react';
import formarCurrency from './utils';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// import Modal from 'react-modal';
import '../App.css';

export default class Products extends Component {
       render() {
        return (
            <div>
                <div className="products">
                <h2>Some Delicacies</h2>
                <div className="production">
                    {this.props.products.map(product => (
                        <Fade bottom cascade>
                            <article key={product._id} class="product">
                                <div className="imgContainer">
                                    <img src={product.image} alt="" class="productImg" />
                                    <button className="bagBtn" data-id={product.id} onClick={() => this.props.addToCart(product)}>
                                        <i class="fas fa-shopping-cart"></i>
                                            Add to Basket
                                    </button>
                                </div>
                                <h3>{product.title}</h3>
                                <h4>{formarCurrency(product.price)}</h4>
                            </article>
                            </Fade>
                        ))}
                </div>
            </div>
            </div>
        )
    }
}
