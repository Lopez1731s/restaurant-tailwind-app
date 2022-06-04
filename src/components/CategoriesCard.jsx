import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

const CategoriesCard = () => {
    const { data } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    return (
        <>
            {data ?
                (
                    data.categories.map((category) => (
                        <Link to={`/categories/${category.strCategory}`} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mb-8">
                            <img
                                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={category.strCategoryThumb}
                                alt={category.strCategory}
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{category.strCategory}</h5>
                                <p className="mb-3 font-normal text-gray-700">{category.strCategoryDescription.substring(0, 125)}...</p>
                            </div>
                        </Link>
                    ))
                ) : ""}
        </>
    )
}

export default CategoriesCard