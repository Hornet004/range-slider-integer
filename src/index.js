const rangeSlider = require('range-slider-david_ui')
const input_interger = require('input-integer_01')

module.exports = range_slider_integer

function range_slider_integer(opts) {


    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})


    const output = document.createElement('div')
    output.classList.add('output')
    output.innerText = 0

    const style = document.createElement('style')
    style.textContent = get_theme()
    
    const range = rangeSlider(opts, listen)
    const input = input_interger(opts, listen)

    shadow.append(range, input, output, style)
    return el

    function listen (message){
        const {type, body} = message
        if (type === 'update') output.innerText = body

    }
}

function get_theme() {
    return`
    :host{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 20vh;

    }
    .output{
        border: 1px solid red;
        text-align: center;
        width: 4em;
        padding: 1em;
        border-radius: 8px;
    }
    
    
    
    `
}

