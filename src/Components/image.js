import React from 'react'
import Image from'../Assets/signin.jpg';

const image = () => {
  return (
    <>
    <div className=" mt-3" style={{ width: "100%" }}>
        <div className=" mt-3">
            <img src={Image} style={{ maxWidth: 400 }} alt="" />
        </div>
    </div>
</>
  )
}

export default image
