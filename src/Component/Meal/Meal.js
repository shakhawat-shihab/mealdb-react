import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../dB';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Items from '../Items/Items';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [favourite, setFavourite] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
            .then(resp => resp.json())
            .then(json => {
                setMeals(json.meals);
                setFilteredMeals(json.meals);
            });
    }, []);
    useEffect(() => {
        if (meals.length) {
            const fvrt = getDataFromDb();
            const loadedFvrt = [];
            for (const key in fvrt) {
                for (const x of meals) {
                    if (x.idMeal === key) {
                        loadedFvrt.push(x);
                    }
                }
            }
            //console.log(loadedFvrt)
            setFavourite(loadedFvrt);
        }
    }, [meals])
    function addToFavourite(meal) {
        //if the meal is not yet added (flag=0) then show it and add to db
        let flag = 1;
        for (const x of favourite) {
            if (meal.idMeal === x.idMeal) {
                flag = 0;
            }
        }
        if (flag === 1) {
            setFavourite([...favourite, meal]);
            addToDb(meal.idMeal);
        }
    }
    function searchFood(event) {
        const pattern = event.target.value.trim().toLowerCase();
        const filtrdMeals = []
        for (const iterator of meals) {
            if (iterator.strMeal.toLowerCase().includes(pattern)) {
                filtrdMeals.push(iterator)
            }
        }
        setFilteredMeals(filtrdMeals);
    }

    return (
        <div>
            <Header eventHandler={searchFood}></Header>
            <div className='row mt-5 pt-3 g-0'>
                <div className='col-lg-9 col-md-8  col-sm-8 col-7 border-end m-0'>
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 px-4 py-2 g-2'>
                        {
                            filteredMeals.map(x => <Items data={x} key={x.idMeal} eventHandler={addToFavourite} ></Items>)
                        }
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-4 col-5'>
                    <Cart data={favourite}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Meal;