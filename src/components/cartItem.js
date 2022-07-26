import React from 'react';
export default function CartItem(props) {
    const { item } = props;
    const { product } = item;

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> </h5>
                            <p className="card-text">
                                name: {product.name} <br />
                                price :  {product.price}  <br />
                                quantity: {item.quantity} <br />
                                total :  {product.price * item.quantity}  <br />

                            </p>
                            <a className="btn btn-danger">delete </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}