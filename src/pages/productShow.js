import React from 'react';
import { getById } from '../API/products'
export default class ProductShow extends React.Component {

    state = {
        product: {},
        quantity: 1,
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getById(parseInt(id)).then(product => {
            this.setState({
                product
            })
        })
    }


    handelQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {

        const quantity = this.state.quantity;
        const price = this.state.product.price;
        return (
            <div className="row">
                <div className={"col-md-4"}>
                    <div className="card">
                        <img src={this.state.product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.product.name} </h5>
                            <p className="card-text">
                                {this.state.product.price}
                            </p>
                            <p>{this.state.product.description}</p>
                        </div>
                        <input type="number" min={"1"} value={quantity} onChange={this.handelQuantity} />

                        <p> total : {price * quantity}</p>

                        <button className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        );
    }

}