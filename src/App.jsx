import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './scss/app.scss'
import Cart from './pages/Cart'
import NotFoundBlock from './components/NotFoundBlock/NotFoundBlock'
import { createContext, useState } from 'react'

const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='App'>
      <div className='wrapper'>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFoundBlock />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  )
}

export default App
export { SearchContext }
