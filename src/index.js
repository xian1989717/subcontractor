import React from 'react'
import ReactDom from 'react-dom'

import Hello from '@/components/Hello'

const obj = {
    name: '张三',
    age: 18
}
ReactDom.render(
    <div>
        <Hello {...obj}></Hello>
    </div>, document.getElementById('app'))