import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useEffect, useRef } from 'react'

export default function SearchItems({ setValue }) {

  const ref = useRef(null);

  function handleOnClick() {
    /*
     ref.current.focusInput()
     ref.current.assignText()
     ref.current.TextColor()
     */
    setValue(search.value)
  }

  function handleOnClear() {
    search.value = ""
  }

  function handleOnReset() {
    setValue("");
  }

  /*
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/todos').then((res) => console.log(res))
   },[])

  // sessionStorage.setItem("test", "hello world")
  */

  return (
    <div className='SearchItems'>
      <Input ref={ref} placeholder={"Enter the word"} id={"search"} />
      <div className='SearchItemsButtons'>
        <Button className={"green"} type={"submit"} label={"Search"} onClick={handleOnClick} />
        <Button className={"blue"} type={"reset"} label={"Reset"} onClick={handleOnReset} />
        <Button className={"red"} type={"reset"} label={"Clear"} onClick={handleOnClear} />
      </div>
    </div>
  )
}
