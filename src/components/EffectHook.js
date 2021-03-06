import React,{useState,useEffect} from 'react'

function EffectHook() {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('');

  useEffect(()=>{
    document.title = `クリック数：${count}`
    console.log('render');
  },[count])

  return (
    <div>
      <p>クリック数：{count}</p>
      <p>名前：{name}</p>
      <input
      type='text'
      value={name}
      onChange={(e) =>setName(e.target.value)}
      />
      <button onClick={()=>setCount(count +1)}>+</button>
    </div>
  )
}

export default EffectHook
