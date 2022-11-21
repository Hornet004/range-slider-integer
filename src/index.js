const rangeSlider = require('range-slider-david_ui')
const input_interger = require('input-integer_01')

module.exports = range_slider_integer

function range_slider_integer(opts) {

    const state = {}

    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})


    // const output = document.createElement('div')
    // output.classList.add('output')
    // output.innerText = 0

    const style = document.createElement('style')
    style.textContent = get_theme()
    
    const range = rangeSlider(opts, protocol)
    const input = input_interger(opts, protocol)

    shadow.append(range, input, style)
    return el

    function protocol(message, notify) {
        const {from} = message
        state[from] = {value: 0, notify}
        // console.log(message)
        return listen
    }

    function listen (message){
        const {from, type, data} = message
        state[from].value = data
        // console.log(state)
        if (type === 'update') {
            // output.innerText = data

            var notify
            if (from === 'range-slider-0') {
                notify = state['input-integer-0'].notify

            }
          
            else if (from === 'input-integer-0') {
                notify = state['range-slider-0'].notify
            }
            notify({type, data})
        }

    }
}

function get_theme() {
    return`
    :host{
        display: grid;
        /* justify-content: space-between; */
        height: 64px;
        grid-template-columns: 14fr 2fr;
        align-items: center;
        justify-items: center;
    }    
    `
}

