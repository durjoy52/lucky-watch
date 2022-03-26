import React from 'react';
import { MdDelete } from 'react-icons/md';
import './CartSide.css';
const CartSide = ({cart,deleteCart}) => {
    return (
        <div className='row bg-secondary mb-2 rounded align-items-center cart'>
                <div className="col-md-4 ">
                    <img className='img-fluid rounded' src={cart.img} alt="" />
                </div>
                <div className="col-md-6 text-white">
                    <p className='fw-bold m-0'>{cart.name}</p>
                    <p><small>${cart.price}</small></p>
                </div>
                <div onClick={_ => deleteCart(cart)} className="btn d-flex justify-content-center col-md-2">
                <MdDelete color='#435' fontSize={30}></MdDelete>
                </div>
        </div>
    );
};

export default CartSide;
