import react, { Component } from 'react';
import ProductItem from '../components/productItem'
import productsAPI from '../API/products'
export default class Products extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        productsAPI.getAll().then(data => {
            this.setState({
                products: data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>products</h1>
                <div className="row">
                    {this.state.products.map(product =>
                        <div className="col-md-4" key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}