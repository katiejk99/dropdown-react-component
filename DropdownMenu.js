import React, { useState, useEffect } from 'react';
import "./DropdownMenu.css"

function DropdownMenu({ options, multiSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectAllMode, setSelectAllMode] = useState(true);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleOption = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return multiSelect ? [...prevOptions, option] : [option];
      }
    });
    setInputValue(''); // Clear the input value when an option is selected
  };

  const toggleSelectAll = () => {
    if (selectAllMode) {
      setSelectedOptions([...options]);
    } else {
      setSelectedOptions([]);
      setInputValue(''); // Clear the input field
    }
    setSelectAllMode((prevMode) => !prevMode);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option) => {
    toggleOption(option);
  };

  const handleInputClick = () => {
    toggleDropdown();
  };

  useEffect(() => {
    // Check if all options are selected and update the selectAllMode
    if (selectedOptions.length === options.length) {
      setSelectAllMode(false);
    } else {
      setSelectAllMode(true);
    }
  }, [selectedOptions, options]);

  const getHighlightedOptions = () => {
    if (inputValue) {
      return options.map((option) => ({
        value: option,
        highlighted: option.toLowerCase().includes(inputValue.toLowerCase().trim()),
      }));
    } else {
      return options.map((option) => ({
        value: option,
        highlighted: false,
      }));
    }
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="Select options"
        value={inputValue || selectedOptions.join(', ')}
        onClick={handleInputClick}
        onChange={handleInputChange}
      />
      {isOpen && (
        <div className="dropdown-content">
          <button className="select-button" onClick={toggleSelectAll}>
            {selectAllMode ? 'Select All' : 'Deselect All'}
          </button>
          <ul>
            {getHighlightedOptions().map((option) => (
              <li
                key={option.value}
                className={option.highlighted ? 'highlighted' : ''}
              >
                <label>
                  <input
                    type={multiSelect ? 'checkbox' : 'radio'}
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleOptionClick(option.value)}
                  />
                  {option.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
