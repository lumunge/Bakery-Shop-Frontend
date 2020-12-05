import React, { Component } from 'react';
import formarCurrency from './utils';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
import '../App.css';
import { connect } from 'react-redux';
import { fetchProducts } from '../Actions/productActions';
import { addToCart } from '../Actions/cartActions';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      width: '700px',
      height: '500px',
      color: 'var(--mainWhite)',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
        background                  : 'var(--mainGrey)'
    }
  };

class Products extends Component {
        constructor(props){
            super(props)
            this.state = {
                product: null,
            };
        }

        componentDidMount(){
            this.props.fetchProducts();
        }

        openModal = (product) => {
            this.setState({
                product
            });
        }

        closeModal = () => {
            this.setState({
                product: null
            });
        }

       render() {
        const { product } = this.state;
        console.log(this.props.products);

        return (
            <div>
                <div className="products">
                <h2>Some Delicacies</h2>
                {!this.props.products ? (
                                <div> Some Of Our Best Sellers... </div>
                            ) : (
                <div className="production">
                    {this.props.products.map((product) => (
                        <Fade bottom cascade>
                            <article key={product._id} class="product">
                                <div className="imgContainer">
                                    <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                    <img src={product.image} alt="" class="productImg" />
                                    </a>
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
                )}
                {product && (
                    <Modal isOpen={true} style={customStyles} onRequestClose={this.closeModal}>
                        <Zoom>
                            <button className="closemodal" onClick={this.closeModal}>X</button>
                            <div className="productDetails">
                                <img src={product.image} alt={product.title} />
                                <div className="productDetailsDesc">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>{product.description}</p>
                                    <div className="productPrice">
                                        <div>{formarCurrency(product.price)}</div>
                                        
                                    </div>
                                    <button className="modalbutton"
                                        onClick={() => {
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}>Add to Basket</button>
                                </div>
                            </div>  
                        </Zoom>
                    </Modal>
                )}
            </div>
            </div>
        )
    }
}

export default connect((state) => ({ products: state.products.filteredItems }), {
    fetchProducts,
    addToCart,
})(Products);