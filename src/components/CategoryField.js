import React from 'react'

const CategoryField = (props) => {


  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          value={props.category}
          checked={ props.checked }
          onChange={ props.handleChange }
        />
        <label>{ props.category }</label>

      </div>
    </div>
  )
}

export default CategoryField
