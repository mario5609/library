import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import Button from '../../components/Button/Button'
import { faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from '../../components/Star/Star'


export default function DisplayItems({value}) {
  const { state, dispatch } = useContext(Context)
  const [filteredData, setFilteredData] = useState(state)

  useEffect(()=> {
    const temp = state?.filter((items) => {
      for (const key in items) {
        if (items[key].toString().toLowerCase().includes(value.toString().toLowerCase())) {
          return items
        }
      }
    })
    setFilteredData(temp)
  },[value,state])

  function handleOnClick(id) {
    dispatch({
      type: "DELETE",
      payload: id
    })
  }

  return (
    <div className='DisplayItems'>
      {filteredData.map((items) => <ul key={items.id} className='listHolder' >
        <li className='listItems'>
          <b>Title : </b> {items.Title}<br />
          <b>Subtitle : </b> {items.Subtitle}<br />
          <b>Author : </b> {items.Author}<br />
          <b>Category : </b> {items.Category}<br />
          <b>Publisher : </b> {items.Publisher}<br />
          <Star />
        </li>
        <FontAwesomeIcon icon = {faTrashAlt} role={Button} type={'reset'} onClick={() => handleOnClick(items?.id)} className='deleteButton'/>
      </ul>
      )}
    </div>
  )
}


