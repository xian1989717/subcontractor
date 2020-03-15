import React from 'react'

export default function Item(item) {
    return <div>
        <h1>评论人:{item.user}</h1>
        <p>评论内容:{item.content}</p>
    </div>
}