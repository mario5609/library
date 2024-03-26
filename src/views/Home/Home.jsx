import React, { useEffect, useState } from 'react'
import CreateItems from './CreateItems'
import SearchItems from './SearchItems'
import ContextProvider from '../../Context/Context'
import DisplayItems from './DisplayItems'
import "./Home.css"
import Button from '../../components/Button/Button'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  const [filteredData, setFilteredData] = useState([])
  const [themeColor, setThemeColor] = useState("original")
  const [value, setValue] = useState("");

  function handleThemeColor() {
    if (themeColor == "original") {
      setThemeColor("lightPink")
    } else if (themeColor == "lightPink") {
      setThemeColor("lightBlue")
    } else if(themeColor == "lightBlue"){
      setThemeColor("original")
    };

  }

  return (
    <div className={themeColor}>
      <ContextProvider className={themeColor}>
        <Button className={"themeSetter"} onClick={handleThemeColor} label={<FontAwesomeIcon icon={faShirt} className='shirt' />} />
        <CreateItems />
        <SearchItems setValue={setValue} />
        <DisplayItems value={value} />
      </ContextProvider>
    </div>
  )
}
