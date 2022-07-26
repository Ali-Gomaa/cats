import react, { Component } from 'react';
import CartItem from '../components/cartItem'
import productsAPI from '../API/products'
import { connect } from 'react-redux';
class Cart extends Component {

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <div className="row">
                    {this.props.cartItems.map(item =>
                        <div className="col-md-3" key={item.product.id}>
                            <CartItem item={item} />
                        </div>
                    )}
                </div>
                <div className="row">
                    <br />
                    <br />
                    <h3>Total : {this.props.total}</h3>
                    <br />
                    <br />
                </div>
                <div className="row">
                    <button className="btn btn-primary">pay</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0)
    };

}

export default connect(mapStateToProps)(Cart)
