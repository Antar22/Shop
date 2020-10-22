import React from 'react';
import './Cart.css'
import {BiCart} from 'react-icons/bi'

class Cart extends React.Component{
    state = {
        isOpen: false
      };
    
    openFloatCart = () => {
        this.setState({ isOpen: true });
    };
    
    closeFloatCart = () => {
        this.setState({ isOpen: false });
    };
    render(){
        let classes = ['cart'];

        if (!!this.state.isOpen) {
          classes.push('cart-open');
        }

        return (
            <div className={classes.join(" ")}>
        
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="cart-closed"
          >
            X
          </div>
        )}

       
        {!this.state.isOpen && (
          <span
            onClick={() => this.openFloatCart()}
            className="cart-closed"
          ><BiCart class="cart-icon"/>
            <span className="quantity">{}</span>
          </span>
        )}
        <div className="cart-content">
                    <div className="cart-header">
                        <span className="cart-header-title">Cart</span>
                    </div>
                    <div className="cart-containter">
                        <p className="empty-cart">
                            Add some products in the cart <br/>
                        </p>
                    </div>
        </div>
    </div>
        )

        
    }
}

function CartClick(){
    
}

export default Cart