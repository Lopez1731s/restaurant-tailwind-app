import React from 'react'
import useFetch from '../hooks/useFetch'
import ProductCard from './ProductCard'
import TopicPage from './TopicPage';

const Home = () => {
    const { data } = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

    return (
        <div className="sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto mt-32">
            <TopicPage title={"Top Meals"} />
            <div className="grid sm:gap-x-8 sm:gap-y-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2 lg:grid-cols-3 content-center">
                <ProductCard product={data} />
            </div>
        </div>
    )
}

export default Home