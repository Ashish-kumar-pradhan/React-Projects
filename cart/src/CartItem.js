import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        const { price , title , qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} />
                </div>
                <div className="right-block">
                <div style = {{ fontSize: 25}}>{title}</div>
                <div style = {{ color : '#777'}} >Rs {price}</div>
                <div style = {{ color : '#777'}} >Qty: {qty}</div>
                <div className="cart-items-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://image000.flaticon.com/png/24/1828/1828926.png" />
                    <img alt="decrease" className="action-icons" src="https://image000.flaticon.com/png/24/992/992683.png" />
                    <img alt="delete" className="action-icons" src="https://image000.flaticon.com/png/24/3096/3096673.png" />
                </div>
                </div>
            </div>

        );

    } 
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
