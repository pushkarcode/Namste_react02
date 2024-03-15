import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Opps!</h1>
        <h1>gand faat gayi </h1>
        <h1>hui hui</h1>
    </div>
  )
}

export default Error