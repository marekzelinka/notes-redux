import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

export function VisiblityFilter() {
  const dispatch = useDispatch()

  const filter = useSelector((state) => state.filter)

  const filterOptions = ['all', 'important', 'nonimportant']

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {filterOptions.map((option) => {
        const value = option.toUpperCase()

        return (
          <label key={option}>
            {option}{' '}
            <input
              type="radio"
              name="filter"
              checked={filter === value}
              onChange={() => dispatch(setFilter(value))}
            />
          </label>
        )
      })}
    </div>
  )
}
