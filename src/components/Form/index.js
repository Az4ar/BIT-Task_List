import React from "react";
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Form.css';

function Form({ handleChange, handleSubmit, newTask }) {
    return (
        <form action='#' className='form' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}
                value={newTask} required={true} />
            <button type='submit'>
                <FaPlus />
            </button>
        </form>
    )
}

Form.propType = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
}

export default Form;