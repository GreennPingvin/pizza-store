import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import PizzaBlock from '../components/PizzaBlock'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'

const Home = () => {
  const { searchValue } = useContext(SearchContext)
  const [items, setSortedItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter)

  function itemsLoadedHandler(items) {
    setSortedItems(items)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    const order = sort.sortBy.includes('-') ? 'desc' : 'asc'
    const sortBy = sort.sortBy.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    axios
      .get(
        `https://64685eb0e99f0ba0a8233bcf.mockapi.io/items?limit=4&page=${currentPage}&${category}${search}&sortBy=${sortBy}&order=${order}`
      )
      .then(({ data }) => itemsLoadedHandler(data))
    // window.scrollTo(0, 0)
  }, [categoryId, sort, searchValue, currentPage])

  const pizzas = items.map((item, i) => <PizzaBlock key={item.id} {...item} />)
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          id={categoryId}
          onChange={(id) => dispatch(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(num) => dispatch(setCurrentPage(num))} />
    </div>
  )
}

export default Home
