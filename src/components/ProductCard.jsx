import React from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert'

const ProductCard = ({ product }) => {
    
    return (
        <>
            {product ? (
                (
                    product.meals ? (
                        product.meals.map((meal) => (
                            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-12 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" key={meal.idMeal}>
                                <Link to={`/product/${meal.strMeal}`}>
                                    <img
                                        className="rounded-t-lg"
                                        src={meal.strMealThumb}
                                        alt={meal.strMeal}
                                    />
                                </Link>

                                <div className="p-5">
                                    <Link to={`/product/${meal.strMeal}`}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                            {meal.strMeal}
                                        </h5>
                                    </Link>

                                    <div className="flex flex-wrap mb-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            {meal.strArea}
                                        </span>

                                        <span className="bg-yellow-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            {meal.strCategory}
                                        </span>


                                        {meal.strTags ? (
                                            <span className="bg-red-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                                {meal.strTags}
                                            </span>
                                        ) : ""}
                                    </div>

                                    <p className="mb-3 font-normal text-gray-700">
                                        {meal.strInstructions.substring(0, 125)}...
                                    </p>

                                    <Link to={`/product/${meal.strMeal}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : ""
                )
            ) : (<Alert title="Loading" color="blue" />)}
        </>
    )
}

export default ProductCard