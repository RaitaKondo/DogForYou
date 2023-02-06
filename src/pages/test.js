// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// });

// import dotenv from `.env.${process.env.NODE_ENV}`

// const fetch = require('node-fetch');
import fetch from 'node-fetch'
import React from 'react'
import DogForm from '../components/DogForm'

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest
const test = () =>{
//     const [data, setData] = React.useState('')

// const callingAPI = async() =>{
//     const url = 'https://api.api-ninjas.com/v1/dogs?energy=2&barking=1'
//     let min_height
//     const dog = 'whippet'
//     const response = await fetch(
//         url,
//       {
//         method: 'GET',
//         headers: {
//           'X-Api-Key': '/Cg9JHmBpDXR/mabWwKHHQ==9QTqVpv8Jd9M83mI'
//         },
//         contentType: 'application/json',
//       }
//     )
  
//     const data = await response.json();
  
//     //   console.log('#######################');
//     // console.log(data);
//     //   console.log('#######################');

//        setData(data)
// }
// console.log(data);
    return(
        <section>
            <DogForm/>
            {/* <button onClick={()=>callingAPI()}>call api</button> */}
        </section>
    )
}

export default test