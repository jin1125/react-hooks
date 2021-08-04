import React, { useEffect, useState } from "react";

function DataFeatch() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async()=>{
    const response = await fetch('https://api.randomuser.me/')
    console.log(response);
    const data =await response.json()
    console.log(data);
    const [item] = data.results

    setUser(item)
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return <div>
    {loading ? <h1>loading...</h1>:<h1>{user.name.first}{user.name.last}</h1>}
  </div>;
}

export default DataFeatch;
