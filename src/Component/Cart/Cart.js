import React from 'react';
import './Cart.css'
const Cart = (props) => {
    //console.log(props.data);
    const fvrtItems = props.data;
    return (
        <div className='w-85 mx-auto' >
            <h2 className='text-warning text-center fw-bold my-3'>Favourite Items</h2>
            {
                fvrtItems.map(x => {
                    return (<div className='mb-4 p-2 border rounded' key={x.idMeal}>
                        <div className=''>
                            <img src={x.strMealThumb} alt="" width='100%' className='rounded' />
                            <h4 className='fw-bold text-primary my-2 '>{x.strMeal}</h4>
                            <h5>{x.strCategory}</h5>
                        </div>
                    </div>)
                })
            }

        </div>
    );
};

export default Cart;