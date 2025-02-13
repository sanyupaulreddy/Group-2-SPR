import React from 'react'

const FormExample = () => {
  return (
    <div>
        <h2>Enter the Form</h2>
        <form>
            <label>Username: </label>
            <input input="text"></input>

            <label>Password: </label>
            <input input="text"></input>

            <label>Country:</label>
            <select>
                <option value="country">India</option>
                <option value="country">USA</option>
                <option value="country">Russia</option>
                <option value="country">Germany</option>
                <option value="country">Australia</option>
            </select>

        </form>
    </div>
  )
}

export default FormExample