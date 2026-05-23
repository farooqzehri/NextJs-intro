import React from 'react'
interface SingleUserProps {
    params: {
         id: string
    }
}
const Nestedproduct = async ({params}: SingleUserProps) => {
    const {id} = params
  return (
    <div>Nestedproduct</div>
  )
}

export default Nestedproduct