import React, { useContext, useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Context } from '../../Context/Context'


export default function CreateItems() {

  const { state, dispatch } = useContext(Context)
  console.log("state : ", state);

  const [fieldColor, setFieldColor] = useState("createItems")

  const idnumber = Math.floor(Math.random() * 10000)


  function handleOnClick() {
    if (title.value, subtitle.value, author.value, category.value, publisher.value == "") {
      setFieldColor("noInput")
    } else {
      setFieldColor("createItems")
      dispatch({
        type: "ADD",
        payload: {
          id: idnumber,
          Title: title.value,
          Subtitle: subtitle.value,
          Author: author.value,
          Category: category.value,
          Publisher: publisher.value
        }
      })
    }
  }
  function handleOnClear() {
    title.value = "",
      subtitle.value = ""
    author.value = "",
      category.value = "",
      publisher.value = ""
  }

  return (
    <div className='createItems'>
        <h1>Library</h1>
      <div className={fieldColor}>
        <Input placeholder={"Enter the Title"} id={"title"} />
        <Input placeholder={"Enter the Subtitle"} id={"subtitle"} />
        <Input placeholder={"Enter the Author"} id={"author"} />
        <Input placeholder={"Enter the Category"} id={"category"} />
        <Input placeholder={"Enter the Publisher"} id={"publisher"} />
        <div className='createItemsButtons'>
          <Button className={"green"} type={"submit"} label={"Add"} onClick={handleOnClick} />
          <Button className={"red"} type={"reset"} label={"Clear"} onClick={handleOnClear} />
        </div>
      </div>
    </div>
  )
}
