import React from 'react';

const DropdownField = ({ label, name, options, value, onChange, onBlur }) => (
  
  <div className='form-group'>
    <label htmlFor={name}>{label}:</label>
    <select className='input-control' id={name} name={name} onChange={onChange} onBlur={onBlur} value={value}>
      <option value="" label={`Select a ${name}`} />
      {options.map((option) => (
        <option className='input-control' key={option.id} value={option.id} label={option.name} />
      ))}
    </select>
  </div>
);


export default DropdownField;
// export default DropdownField;