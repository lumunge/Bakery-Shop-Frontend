import React, { Component } from 'react';
import formatCurrency from './utils';
import Fade from 'react-reveal/Fade';
import '../App.css';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,   
            showCart: false,         
        };
    }

    showCheckout = () => {
        this.setState({
            showCheckout: true
        });
    }

    toggleCart(e){
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        });
    }
   
    render() {
        const {cartItems} = this.props;
        const {showCart} = this.state;

        return (
            <div>

                <div className="cartBtn" onClick={(e) => this.toggleCart(e)}>
                    <span className="navIcon"><i class="fas fa-cart-plus"></i></span>
                    <div className="cartLength">{cartItems.length}</div>
                </div>

            <div className={`cartOverlay ${showCart ? 'transparentBg' : ''}`}>
            
            <div className={`cart ${showCart ? 'showCart' : ''}`}>

                <div className="navIcon" onClick={(e) => this.toggleCart(e)}>
                    <span className="closeCart" ><i class="fas fa-window-close"></i></span>
                </div>

                <div>
                {cartItems.length === 0 ? (
                    <div className="money">
                        Cart Is Empty
                    </div>
                ) : (
                    <div className="money">
                        You have {cartItems.length} Items
                    </div>
                )}
                </div>
                <ul className="cartItems">
                    {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div>
                                <div className="itemTitle">{item.title}</div>
                                <div className="right">
                                <div className="money">{formatCurrency(item.price)} x { item.count }{" "}</div>
                                <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove </button>
                                </div>
                                </div>
                            </li>
                        ))}
                </ul>
                {cartItems.length !== 0 && (
                <div className="cartFooter">
                        <div className="money">
                            Totals: {" "}
                            {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0)
                            )}
                        </div>
                        <button className="button primary" onClick={this.showCheckout}>Proceed</button>
                    </div>
            )}
            {this.state.showCheckout && (
                <Fade right cascade>
                    <div className="checkOutForm">
                        <form>
                            <ul className="formContainer">
                                <li>
                                    <input type="email" required placeholder="Email" onChange={this.handleForm} />
                                </li>
                                <li>
                                    <input type="text" required placeholder="Full Names" onChange={this.handleForm} />
                                </li>
                                <li>
                                    <button type="submit" className="button">CheckOut</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </Fade>
            )}
            </div>

            
            
            </div>
            </div>
        )
    }
}
