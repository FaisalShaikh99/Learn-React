import React, { useEffect, useState } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData([])

//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/FaisalShaikh99')
//         .then(Response => Response.json())
//         .then(data => {
//             setData(data)
//         })
//     } , [])

return (
    <div className='text-center my-20 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='flex mx-auto justify-center itmes-center rounded-full m-4'
       src={data.avatar_url} 
       alt="Git picture" 
       width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const Response = await fetch("https://api.github.com/users/FaisalShaikh99")
   return Response.json()
}
