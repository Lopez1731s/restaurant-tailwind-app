import React from 'react'
import { FormHelper } from '../helpers/FormHelper'
import useFetch from '../hooks/useFetch';
import ProductCard from './ProductCard';
import TopicPage from './TopicPage'

const Products = () => {

    const { handleChange, handleSubmit, data } = FormHelper();

    const dataMeal = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data.meal}`)

    

    return (

        <div className="sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto mt-32">
            <TopicPage title={"Products"} />
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Search a product..."
                        name="meal"
                        onChange={handleChange}
                    />
                </form>
            </div>
            <div className="grid sm:gap-x-8 sm:gap-y-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2 lg:grid-cols-3 content-center mt-12">
                <ProductCard product={dataMeal.data} />
            </div>
        </div>
    )
}

export default Products