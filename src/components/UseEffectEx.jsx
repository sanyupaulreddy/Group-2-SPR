// import React,{useState,useEffect} from 'react'

// const UseEffectEx = () => {
//     const[count,setcount]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setcount(100);
//     },4000)
//     document.title="MRU";
// },[count])
// return (
//     <div>UseEffectEx
//     <h1>{count}</h1>
//     </div>
//   )
// }

// export default UseEffectEx

import React, {useEffect, useState} from 'react'

const UseEffectExample = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json()).then(data=>{
                setUsers(data);
            })
            .catch(err=>console.log(err)
            )
    }, []);

  return (
    <div>
        {/* {users.map(user =>(
            <ul key={user.id}>
            <h2>{user.name}</h2>{user.email}
            </ul>
        ))} */}

        {
            users.map((user, index)=>{
                return(
                    
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                        <hr></hr>
                        </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default UseEffectExample