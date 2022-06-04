import React from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch';

import Breadcumb from './Breadcumb';
import TopicPage from './TopicPage';

const CategoryProducts = () => {

    const category = useParams();
    const { data } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.category}`);


    return (
        <>
            {data ? (
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <TopicPage title={`Category :${category.category}`} />
                        <Breadcumb titlePage="Categories" urlPage="/categories" namePage={category.category} />

                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {data.meals.map((meal) => (
                                <Link key={meal.idMeal} to={`/product/${meal.strMeal}`} className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={meal.strMealThumb}
                                            alt={meal.strMealThumb}
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">Code: {meal.idMeal}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{meal.strMeal}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : ""}


            {/*  */}
        </>
    )
}

export default CategoryProducts