import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from "./Action"
import Header from "./Header"
import OptionModal from "./OptionModal"
import Footer from './Footer'

export default class Indecision extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.options.length !== this.state.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randNum]
        this.setState(() => ({ selectedOption: option }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    render() {
        const subtitle = 'Put your life in the hands of computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <Footer />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

Indecision.defaultProps = {
    options: []
}