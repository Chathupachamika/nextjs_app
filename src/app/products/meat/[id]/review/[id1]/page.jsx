import React from 'react'

function page({params}) {
  return (
    <div>Meet Item {params.id} Review {params.id1}</div>
  )
}

export default page