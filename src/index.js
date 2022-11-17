const rangeSlider = require('range-slider-david_ui')
const input_interger = require('input-integer_01')

module.exports = range_slider_integer

function range_slider_integer(opts) {


    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})


    const output = document.createElement('div')
    output.innerText = 0
    
    const range = rangeSlider(opts, listen)
    const input = input_interger(opts, listen)

    shadow.append(range, input, output)
    return el

    function listen (message){
        const {type, body} = message
        if (type === 'update') output.innerText = body

    }
}