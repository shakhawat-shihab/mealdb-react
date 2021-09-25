import React from 'react';
import './Items.css';

const Items = (props) => {
    const { strMeal, strCategory, strArea, strMealThumb, strTags } = props.data;
    //console.log(props.data);
    return (
        <div className='col  ' >
            <div className='card h-100 w-95 p-2  mx-auto shadow rounded bg-light'>
                <div className='text-center'>
                    <img src={strMealThumb} alt="" width='100%' className='rounded' />
                </div>
                <div className='py-3 px-2 card-body' >
                    <h4 className='fw-bold text-primary '>{strMeal}</h4>
                    <h5>Type of  <span className='fw-bold text-info'> {strCategory}</span>   From <span className='fw-bold text-info'>{strArea}</span>  </h5>
                    <h6 className=' text-info'><i className="fas fa-tag"></i> {strTags}  </h6>
                </div>
                <div className=''>
                    <button className='btn btn-dark mb-2' onClick={() => { props.eventHandler(props.data) }}>Add to Favourite <i className="fas fa-heart text-danger ps-2 fw-bold fs-5"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Items;