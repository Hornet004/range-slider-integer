const rangeSlider = require('range-slider-david_ui')
const input_interger = require('input-integer_01')

module.exports = range_slider_integer

function range_slider_integer(opts) {


    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})
    
    const range = rangeSlider(opts)
    const input = input_interger(opts)

    shadow.append(range, input)
    return el
}