import React from 'react'

import Item from './Item'

import CssObj from '../css/globel.css'


class Hello extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '学习react',
            arr: [
                {
                    id: 0, user: 'peter', content: 'haha'
                }, {
                    id: 1, user: 'peter', content: 'haha'
                }, {
                    id: 2, user: 'peter', content: 'haha'
                }, {
                    id: 3, user: 'peter', content: 'haha'
                }, {
                    id: 4, user: 'peter', content: 'haha'
                }
            ]
        }
    }
    render() {
        return <div>
            <p style={{ fontSize: '35px' }} className={CssObj.title}>这是评论列表组件</p>
            {this.state.arr.map(item => <Item key={item.id} {...item}></Item>)}
        </div>
    }
}

export default Hello