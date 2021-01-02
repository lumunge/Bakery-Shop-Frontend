import React, { Component } from 'react';
import formatCurrency from './utils';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import Modal from 'react-modal';
import { removeFromCart, addToCart, decreaseCart } from '../Actions/cartActions';
import { clearOrder }  from '../Actions/orderActions';
import '../App.css';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            mpesa: "",
            decoration: "",
            // cartItems: [], 
            showCheckout: false, 
            // showCart: false,         
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createOrder = (e) => {
        e.preventDefault()

        const order = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            decoration: this.state.decoration,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
        };

        axios.post('api/orders', order)
            .then((res) => {
                console.log(res.data);
                localStorage.clear('cartItems');
            }).catch((error) => {
                console.log(error)
            });

            this.setState({
                name: '',
                email: '',
                phone: '',
                address: '',
                decoration: '',
                cartItems: '',
                total: ''
            })

    };

    closeModal = () => {
        this.props.clearOrder();
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
        const {cartItems, order} = this.props;
        const {showCart} = this.state;

        // Cart.handleClickOutside = () => {
        //     this.setState({
        //         showCart: false
        //     });
        // }

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

                {order && (
                    <div className="orderModal">
                    <Modal isOpen={true} onRequestClose={this.closeModal} className="orderModal">
                        <Zoom>
                            <button className="closeModal" onClick={this.closeModal}>x</button>
                            <div className="orderDetails">
                                <h3 className="orderSuccess">Your Order has been Placed Successfully</h3>
                                <h2>Order {order._id}</h2>
                                <ul>
                                    <li>
                                        <div><span className="orderTitle">Name:</span> <span className="detail">{order.name}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Email:</span> <span className="detail">{order.email}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Phone:</span>  <span className="detail">{order.phone}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Address:</span> <span className="detail">{order.address}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Mpesa Transaction Code:</span> <span className="detail">{order.mpesa}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Cake Decoration:</span> <span className="detail">{order.decoration}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Date:</span> <span className="detail">{order.createdAt}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Totals:</span> <span className="detail">{order.total}</span></div>
                                    </li>
                                    <li>
                                        <div><span className="orderTitle">Items Ordered:</span></div>
                                        <div>
                                        <span className="detail">
                                            {order.cartItems.map((x) => (
                                                <div>
                                                    {x.count} {" x "} {x.title}
                                                </div>
                                            ))}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Zoom>
                    </Modal>
                    </div>
                )}

                <ul>
                    {cartItems.map(item => (
                            <li key={item._id} className="cartItems">

                                <div className="cart1">
                                    <div>
                                    <img src={item.image} alt={item.title} />
                                    </div>
                                    <div> 
                                    <button className="button remove" onClick={() => this.props.removeFromCart(item)}>X</button>
                                    </div>
                                </div>

                                <div className="cart2">
                                <div className="itemTitle">{item.title}</div>
                                </div>

                                <div className="cart3">
                                <div className="money">
                                <div>{formatCurrency(item.price)} <span className="multiply">x</span> </div>
                                </div>
                                <div className="counter">
                                <a href="#!" data-id={item._id} onClick={() => this.props.addToCart(item)}><i class="fas fa-chevron-up"></i></a>
                                <p class="">{ item.count } kgs</p>
                                <a href="#!" data-id={item._id} onClick={() => this.props.decreaseCart(item)}><i class="fas fa-chevron-down"></i></a> 
                                </div>
                                </div>
                                <hr/>

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
                        <a href="#!"><i class="far fa-question-circle"></i></a>
                        <form onSubmit={this.createOrder}>
                            <ul className="formContainer">
                                <li>
                                    <input type="text" name="name" required placeholder="Your Name..." onChange={this.handleInput} />
                                </li>
                                <li>
                                    <input type="email" name="email" required placeholder="Email Address..." onChange={this.handleInput} />
                                </li>
                                <li>
                                    <input type="number" name="phone" required placeholder="Phone Number..." onChange={this.handleInput} />
                                </li>
                                <li>
                                    <select name="address" onChange={this.handleInput}>
                                        <option value="Roasters">Roasters</option>
                                        <option value="Garden Estate">Garden Estate</option>
                                        <option value="TRM">TRM</option>
                                        <option value="Garden City">Garden City</option>
                                        <option value="Ngumba">Ngumba</option>
                                        <option value="Roysambu">Roysambu</option>
                                        <option value="Alsoaps">Alsoaps</option>
                                    </select>
                                </li>
                                <li>
                                    <input type="text" name="mpesa" required placeholder="Mpesa Transaction Code..." onChange={this.handleInput} />
                                </li>
                                <li>
                                    <textarea rows="2" name="decoration" placeholder="Cake Decoration Text..." onChange={this.handleInput}></textarea>
                                </li>
                                <br/>
                                <li>
                                    <button type="submit" className="button primary">CheckOut</button>
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


export default connect(
    (state) => ({
        order: state.order.order,
        cartItems: state.cart.cartItems,
    }),
    { addToCart, decreaseCart, removeFromCart, clearOrder }
)(Cart);