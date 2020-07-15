import React from 'react'

export default function Option({ optionText, handleDeleteOption, count }) {
    return (
        <div className='option'>
            <p className='option__text'>{count}. {optionText}</p>
            <button
                className='button button--link'
                onClick={(e) => {
                    handleDeleteOption(optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}