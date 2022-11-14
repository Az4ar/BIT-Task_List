import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Task.css';

function Task({ tasks, handleEdit, handleDelete }) {
    return (
        <ul className='task'>
            {tasks.map((tasks, index) => (
                <li key={tasks}>{tasks}
                    <span>
                        <FaEdit onClick={(e) => handleEdit(e, index)} className='edit' />
                        <FaWindowClose onClick={(e) => handleDelete(e, index)} className='delete' />
                    </span>
                </li>
            ))}
        </ul>
    )
}

Task.propType = {
    tasks: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default Task;