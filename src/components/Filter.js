import React from 'react';

function Filter(props) {
  const { options, onChange, selectedOption } = props;

  return (
    <div className="filter">
      <label>{props.label}:</label>
      <select value={selectedOption} onChange={onChange}>
        <option value="">-- Select {props.label} --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
