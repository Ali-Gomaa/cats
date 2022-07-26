import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

function CartIcon(props) {

    return (
        <div>
            <Link to='/cart'>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="badge bg-danger">{props.totalQuantity}</span>
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + item.quantity, 0)
    };
}

export default connect(mapStateToProps)(CartIcon);