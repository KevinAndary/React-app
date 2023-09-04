import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';
import './ProductList.css';

export default class ProductList extends Component {
    render() {
        return (                // It is used as a wrapper component to group multiple elements together without introducing additional HTML elements into the DOM (Document Object Model) structure.
            <React.Fragment>    
                {/* Start of product list section */}
                <div className="py-5">
                    <div className="container">
                        {/* Heading for the product list */}
                        <h2 className="title">Our Products</h2>

                        {/* Container for displaying the products */}
                        <div className="row">
                            {/* Accessing the product data from the context */}
                            <ProductConsumer>
                                {(value) => {
                                    // Mapping over the products and rendering Product component for each product
                                    return value.products.map((product) => {
                                        return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                {/* End of product list section */}
            </React.Fragment>
        );
    }
}

