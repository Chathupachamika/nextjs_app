import React from 'react'
import Link from 'next/link'

function page() {
  const vegis =[
    {
      id:1,
      veginame: "Brocoli"
    }
  ]
  return (
    <>
    <h1>Vegitables</h1>

    <ul>
      {vegis.map((vegi)=>{
        return(
          <li>
            <Link href={'/products/vegis/${vegi.veginame}'}>{vegi.veginame}</Link>
          </li>
        )
      })}
    </ul>
    </>
    
  )
}

export default page