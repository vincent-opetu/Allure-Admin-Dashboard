const LabelField = ({ title }) => {
  return (
   <label htmlFor={ title } className="text-sm font-light pb-1">{ title }</label>
  )
}

export default LabelField