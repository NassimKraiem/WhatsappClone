import React from 'react'


export default function Personne({pdp, name, date, content}) {
    return (
        <div className='conversation'>
            <img src={pdp} className='friend_icon' />
            <div className='friend_message'>
                <div className='message_header'>
                    <div className='message_title'>{name}</div>
                    <div className='message_date'>{date}</div>
                </div>
                <div className='message_content'>{content}</div>
            </div>
        </div>
    )
}
