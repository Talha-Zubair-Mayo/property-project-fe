import React from 'react'
import PropertyGridCard from './PropertyGridCard'

export default function PropertiesGridView({ AllProperties }) {
  return (
    <>
      {AllProperties?.length > 0 && AllProperties.map((item, key) => (<PropertyGridCard item={item} />))}
    </>
  )
}
