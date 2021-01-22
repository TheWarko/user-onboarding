import React,{ useState } from 'react'


const PriceInput = (props) => {

  const {
    register, 
    ...inputProps
  } = props

  // const [value,setValue] = useState(null)
  const [isEditing,setIsEditing] = useState(false)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const toggleEditing = () => {
    setIsEditing( !isEditing );
  }

  return (
    isEditing ? (
      <input 
        type="number"
        ref={register}
        {...inputProps} 
        onBlur={toggleEditing}
        value={props.value}
        placeholder="$0,00"
        // onChange={(event) => {
        //   setValue(event.target.value)
        // }}
        onChange={props.onChange}
      />
    ) : (
      <input 
        type="text"
        ref={register}
        {...inputProps} 
        value={formatter.format(props.value)}
        placeholder="$0,00"
        onFocus={toggleEditing}
        readOnly
      />
    )
  )
}

export default PriceInput
