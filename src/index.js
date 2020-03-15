import React from 'react'
import ReactDom from 'react-dom'


function Hello() {
    return <div>123456</div>
}

ReactDom.render(
    <div>
        <Hello></Hello>
    </div>, document.getElementById('app'))