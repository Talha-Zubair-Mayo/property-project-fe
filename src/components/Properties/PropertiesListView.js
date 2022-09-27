import React from 'react'
import PropertyListCard from './PropertyListCard'
export default function PropertiesListview({ AllProperties }) {
    return (
        <div className="row">
            {AllProperties?.length > 0 && AllProperties.map((item, key) => (<PropertyListCard item={item} />))}
        </div>
    )
}
