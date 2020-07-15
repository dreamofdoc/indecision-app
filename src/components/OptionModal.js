import React from 'react'
import Modal from "react-modal"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#333745',
        color: '#a5afd7'
    }
}

export default function OptionModal({ selectedOption, handleClearSelectedOption }) {
    return (
        <Modal
            isOpen={!!selectedOption}
            onRequestClose={handleClearSelectedOption}
            ariaHideApp={false}
            contentLabel="Selected Option"
            style={customStyles}
        >
            <h3>Selected Option</h3>
            {selectedOption && <p>{selectedOption}</p>}
            <button onClick={handleClearSelectedOption}>Okay</button>
        </Modal>
    )
}