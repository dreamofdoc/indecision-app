import React, { Component } from 'react'

export default class AddOption extends Component {
    state = {
        error: undefined
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error && <p className='error-message'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.onFormSubmit}>
                    <input className='add-option__input' type="text" name="option" />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        )
    }
}