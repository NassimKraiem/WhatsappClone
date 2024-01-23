import React from 'react'

export default function Message({isSent, message}) {
    return (
        <div className={(isSent==true)?"sent":"received"}><div className="message">{message}</div></div>
    )
}
