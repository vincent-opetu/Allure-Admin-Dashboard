const TextInput = ({ type, placeholder, name, handleclick }) => {
  return (
    <input name={name} type={type} placeholder={placeholder} className="text-sm py-1 px-4 font-light w-72" onChange={handleclick}/>
  )
}

export default TextInput