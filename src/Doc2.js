import React, {  useState } from 'react'
import useDoc from './hooks/useDoc';

function Doc2() {
const [count,setCount] = useState(0);

useDoc(count)


  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  )
}

export default Doc2
