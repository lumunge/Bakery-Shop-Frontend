import React, { Component } from 'react';
import formatCurrency from './utils';
import Fade from 'react-reveal/Fade';
import onClickOutside from 'react-onclickoutside';
import '../App.css';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            cartItems: [], 
            showCheckout: false,  
            showCart: false,         
        };
    }

    handleForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            cartItems: this.state.cartItems,
        };
        this.props.createOrder(order);
    };

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

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product.id),
        });
    }
   
    render() {
        const {cartItems} = this.props;
        const {showCart} = this.state;
        Cart.handleClickOutside = () => {
            this.setState({
                showCart: false
            });
        }
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
                                <div className="money">{formatCurrency(item.price)} x 
                                <div className="counter">
                                <a href="#!" data-id={item.id} onClick={() => this.props.addToCart(item)}><i class="fas fa-chevron-up"></i></a>
                                <p class="">{ item.count }</p>
                                <a href="#!" data-id={item.id} onClick={() => this.props.decreaseCart(item)}><i class="fas fa-chevron-down"></i></a> 
                                </div>
                                </div>
                                <button className="button remove" onClick={() => this.props.removeFromCart(item)}>X</button>
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
                        <h4>Please Fill Out the Form Below</h4>
                        <form onSubmit={this.createOrder}>
                            <ul className="formContainer">
                            <li>
                                    <input type="text" name="name" required placeholder="Your Name..." onChange={this.handleForm} />
                                </li>
                                <li>
                                    <input type="email" name="email" required placeholder="Email Address..." onChange={this.handleForm} />
                                </li>
                                <li>
                                    <input type="number" name="phone" required placeholder="Phone Number..." onChange={this.handleForm} />
                                </li>
                                <br/>
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

const clickOutsideConfig = {
    handleClickOutside: () => Cart.handleClickOutside,

};

export default onClickOutside(Cart, clickOutsideConfig)