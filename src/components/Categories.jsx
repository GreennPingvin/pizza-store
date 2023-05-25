const Categories = ({ id, onChange }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index} className={index === id ? 'active' : null} onClick={() => onChange(index)}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
