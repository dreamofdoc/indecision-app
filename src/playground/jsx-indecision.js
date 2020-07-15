console.log('runing')

const app = {
    title: 'Indecision App',
    subtitle: 'This is JSX',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const removeAll = () => {
    app.options = []
    render()
}

const makeDecision = () => {
    const randNum = Math.floor(Math.random() * Math.floor(app.options.length))
    alert(app.options[randNum])
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : undefined}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()
