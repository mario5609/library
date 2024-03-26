import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

export default function SearchItems({ setValue }) {

  function handleOnClick() {
    setValue(search.value)
  }

  function handleOnClear() {
    search.value = ""
  }

  function handleOnReset() {
    setValue("");
  }

  return (
    <div className='SearchItems'>
      <Input placeholder={"Enter the word"} id={"search"} />
      <div className='SearchItemsButtons'>
        <Button className={"green"} type={"submit"} label={"Search"} onClick={handleOnClick} />
        <Button className={"blue"} type={"reset"} label={"Reset"} onClick={handleOnReset} />
        <Button className={"red"} type={"reset"} label={"Clear"} onClick={handleOnClear} />
      </div>
    </div>
  )
}
