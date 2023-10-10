import React from 'react'

function MyProflie({ data }) {
  return (
    <>
        <p>My Name is {data.firstName} {data.lastName}</p>
        <img src={data.imgPic} height="150" width="150" alt={data.firstName}/>
    </>
  )

}

export default MyProflie