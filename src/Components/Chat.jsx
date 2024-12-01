import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
const params = useParams();
console.log('chat params',params);
if(params.uniqueId){
  return  (
    <h2>Chat: {params.uniqueId} </h2>
  )
}
  return (
    <h2>Empty Screen</h2>
  )
}

export default Chat