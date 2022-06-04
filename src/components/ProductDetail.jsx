import React from "react";
import { useParams } from "react-router-dom";
import { LocalFavorites } from "../helpers/LocalFavorites";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {

    const { meal } = useParams();
    const { data } = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal);
    const { toggleFavorite } = LocalFavorites();

    const onToggleFavorite = () => {
        toggleFavorite(meal);
    }

    return (
        <>
            {data ? (
                <>
                    <div className="sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto mt-32">
                        <img
                            className="rounded-full sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto shadow-xl"
                            src={data.meals[0].strMealThumb}
                            alt={data.meals[0].strMeal}
                        />
                        <h1 className="text-center text-3xl font-semibold mt-4 mb-1">{data.meals[0].strMeal}</h1>
                        <div className="flex justify-center">
                            <div className="h-1 w-32 shadow-lg bg-amber-500"></div>
                        </div>
                    </div>
                    {/* {data.meals[0].strMealThumb.substring(45,65)} */}
                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl tracking-tight text-gray-900 sm:text-3xl">{data.meals[0].strMeal}</h1>
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900" style={{ whiteSpace: 'break-spaces', lineHeight: '2.0' }}>{data.meals[0].strInstructions}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>

                            <div className="mt-4">
                                <ul className="pl-4 list-disc text-sm space-y-2">
                                    {data.meals[0].strIngredient1 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient1}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient2 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient2}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient3 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient3}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient4 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient4}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient5 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient5}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient6 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient6}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient7 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient7}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient8 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient8}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient9 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient9}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient10 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient10}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient11 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient11}</span>
                                        </li>
                                    }
                                    {data.meals[0].strIngredient12 &&
                                        <li className="text-gray-400">
                                            <span className="text-gray-600">{data.meals[0].strIngredient12}</span>
                                        </li>
                                    }

                                </ul>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-3 w-full bg-amber-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                            onClick={onToggleFavorite}
                        >
                            Add to favorite
                        </button>
                    </div>
                </>
            ) : ""}


        </>
    );
};

export default ProductDetail;
