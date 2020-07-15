import React from 'react'
import Option from './Option'

export default function Options({ handleDeleteOptions, options, handleDeleteOption }) {
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__title'>Your Options</h3>
                <button
                    className='button button--link'
                    disabled={options.length === 0}
                    onClick={handleDeleteOptions}
                >
                    Remove All
            </button>
            </div>
            {options.length === 0 && <p className='widget__message'>No options. Please add an one</p>}
            {
                options.map((option, index) => (
                    <Option
                        key={option}
                        count={index + 1}
                        optionText={option}
                        handleDeleteOption={handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}