/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Dropdown({ options, onselect }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option) => {
    // Check if the option is already selected
    if (selectedOptions.includes(option)) {
      // If it's already selected, remove it
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      // If it's not selected, add it to the selected options
      setSelectedOptions([...selectedOptions, option]);
    }
  }

  useEffect(() => {
    onselect(selectedOptions);
  }, [selectedOptions])

  return (
    <div className='inline-block text-left w-full'>
      <div className='w-full'>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          pilih
        </button>
      </div>
      {isOpen && (
        <div 
          className="absolute mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg outline-none" 
          aria-labelledby="options-menu"
          style={{
            maxHeight: '200px', // Set the maximum height for the dropdown
            overflowY: 'auto',   // Enable vertical scrolling when content exceeds maxHeight
          }}
        >
          <div className="py-1">
            {options.map((option) => (
              <a
                key={option}
                onClick={() => selectOption(option)}
                href="#"
                className='flex gap-x-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white'
              >
                <input 
                  type="checkbox" 
                  checked={selectedOptions.includes(option)}
                  onChange={() => selectOption}
                />
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown