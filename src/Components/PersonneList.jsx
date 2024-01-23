import React from 'react'
import Personne from './Personne'
import { dataList } from './Data/dataPersonne'

export default function PersonneList() {
    return (
        <div id="conversations_list" className="conversations_list">
            {
                dataList.map((dataPersonne, i) => <Personne key={i} {...dataPersonne} />)
            }
        </div>
    )
}
