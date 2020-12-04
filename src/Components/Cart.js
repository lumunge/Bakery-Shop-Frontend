import React, { Component } from 'react';
import formatCurrency from './utils';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
// import onClickOutside from 'react-onclickoutside';
import { removeFromCart } from '../Actions/cartActions';
import { createOrder, clearOrder }  from '../Actions/orderActions';
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
            // cartItems: [], 
            showCheckout: false,  
            // showCart: false,         
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
            address: this.state.address,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
        };
        this.props.createOrder(order);
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

    // removeFromCart = (product) => {
    //     const cartItems = this.state.cartItems.slice();
    //     this.setState({
    //         cartItems: cartItems.filter((x) => x._id !== product.id),
    //     });
    // }
   
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
                    <Modal isOpen={true} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button className="closeModal" onClick={this.closeModal}>x</button>
                            <div className="orderDetails">
                                <h3 className="orderSuccess">Your Order has been Placed Successfully</h3>
                                <h2>Order {order._id}</h2>
                                <ul>
                                    <li>
                                        <div>Name</div>
                                        <div>{order.name}</div>
                                    </li>
                                    <li>
                                        <div>Email</div>
                                        <div>{order.email}</div>
                                    </li>
                                    <li>
                                        <div>Phone</div>
                                        <div>{order.phone}</div>
                                    </li>
                                    <li>
                                        <div>Address</div>
                                        <div>{order.address}</div>
                                    </li>
                                    <li>
                                        <div>Date</div>
                                        <div>{order.createdAt}</div>
                                    </li>
                                    <li>
                                        <div>Total</div>
                                        <div>{formatCurrency(order.total)}</div>
                                    </li>
                                    <li>
                                        <div>Items Ordered</div>
                                        <div>
                                            {order.cartItems.map((x) => (
                                                <div>
                                                    {x.count} {" x "} {x.title}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Zoom>
                    </Modal>
                )}

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
                                <li>
                                    <input type="text" name="address" required placeholder="Your Address eg buruburu, kahawa..." onChange={this.handleForm} />
                                </li>
                                <br/>
                                <li>
                                    <button type="submit" className="">CheckOut</button>
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

// const clickOutsideConfig = {
//     handleClickOutside: () => Cart.handleClickOutside,

// };

// export default onClickOutside(Cart, clickOutsideConfig);

export default connect(
    (state) => ({
        order: state.order.order,
        cartItems: state.cart.cartItems,
    }),
    { removeFromCart, createOrder, clearOrder }
)(Cart);