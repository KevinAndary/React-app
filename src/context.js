import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const productContext = React.createContext();
//Provider
//Consumer

export default class ProductProvider extends Component {
    state = {
        products: [],                   // Array to store the product data
        detailProduct: detailProduct,   // Current detailed product being displayed
        cart: [],                       // Array to store the items in the shopping cart
        modalOpen: false,               // Flag to indicate if the modal is open or not
        modalProduct: detailProduct,    // Product displayed in the modal
        cartSubTotal: 0,                // Subtotal of the items in the cart
        cartTax: 0,                     // Tax amount applied to the cart
        cartTotal: 0                    // Total cost of the cart including tax
    };

    componentDidMount() {
        this.setProducts(); // Call the method to set the products when the component mounts
    }

    // Method to set the products in the state
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });

        this.setState(() => {
            return {products: tempProducts}; // Update the state with the products data
        });
    }

    // Method to get a specific product based on its ID
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    // Method to handle displaying the details of a specific product
    handleDetail = id => {
        const product = this.getItem(id); // Get the product based on its ID
        this.setState(() => {
            return { detailProduct: product }; // Update the state with the selected product
        });
    }


    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        }, this.addTotals);
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product, modalOpen:true};
        });
    }

    closeModal = () =>{
        this.setState(() => {
            return {modalOpen:false};
        });
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
            cart: [...tempCart]
            };
        }, this.addTotals);
    };
    
    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
            return { cart: [...tempCart] };
            }, this.addTotals);
        }
    };
    
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        tempCart = tempCart.filter(item => {
            return item.id !== id;
        });

        this.setState(() => {
            return {
            cart: [...tempCart],
            products: [...tempProducts]
            };
        }, this.addTotals);
    };

    clearCart = () => {
        this.setState(()=> {
            return { cart:[] };
        },
        ()=> {
            this.setProducts();
            this.addTotals();
        });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => 
            {
                subTotal += item.total;
                return subTotal;
            });
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=> {
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        });
    }

    render() {
        return (
            <productContext.Provider
            value={{
                ...this.state,                      // Pass all the properties from the state as context values
                handleDetail: this.handleDetail,    // Method to handle displaying product details
                addToCart: this.addToCart,          // Method to add a product to the cart
                openModal: this.openModal,          // Method to open the modal
                closeModal: this.closeModal,        // Method to close the modal
                increment: this.increment,          // Method to increment the quantity of an item in the cart
                decrement: this.decrement,          // Method to decrement the quantity of an item in the cart
                removeItem: this.removeItem,        // Method to remove an item from the cart
                clearCart: this.clearCart           // Method to clear the entire cart
            }}
            >
                {this.props.children} {/* Render the children components wrapped in the productContext.Provider */}
            </productContext.Provider>
        );
    }
}

const ProductConsumer = productContext.Consumer; // Create a constant to access the productContext.Consumer

export { ProductProvider, ProductConsumer } // Export the ProductProvider and ProductConsumer components
