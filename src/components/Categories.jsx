import React from 'react'
import Breadcumb from './Breadcumb'
import CategoriesCard from './CategoriesCard'
import TopicPage from './TopicPage'

const Categories = () => {
	return (
		<div className="sm:container sm:mx-auto md:container md:mx-auto lg:container lg:mx-auto mt-32">
			<TopicPage title={"Categories"} />
			<Breadcumb titlePage="Categories" urlPage="/categories" />
			<div className="grid sm:gap-x-8 sm:gap-y-2 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-2 lg:grid-cols-3 content-center">
				<CategoriesCard />
			</div>
		</div>
	)
}

export default Categories