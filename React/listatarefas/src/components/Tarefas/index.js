import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './tarefas.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
