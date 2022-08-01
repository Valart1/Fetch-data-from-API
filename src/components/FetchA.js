import React,{useEffect, useState} from 'react';

function FetchA() {

    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [comm, setComm] = useState([]);
const apiGet = () =>{
  
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setData(json);
    });
};

const apGet = () =>{
  
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setUser(json);
    });
};

const aGet = () =>{
  
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setComm(json);
    });
};

useEffect(()=>{
    apiGet();  
    apGet();
    aGet();
}, []);
  return (
  
    <div>
        Newspaper <br />
        <button onClick={(apiGet,apGet,aGet)}>Fetch API</button>
        <br />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div>
            <ol>
                {data.map((post) =>(
                    <li>Title: {post.title} <br /> ByUserId: {post.userId} <br /> Body: {post.body}</li>
                ))}
            </ol>
            <ol>
                {user.map((user) =>(
                    <li>UserId: {user.id} <br /> Autori: {user.name} <br /> Email: {user.email}</li>
                ))}
            </ol>
            <ol>
                {comm.map((comm) =>(
                    <li>Post: {comm.postId} <br /> ByEmail: {comm.email} <br /> Comment: {comm.body}</li>
                ))}
            </ol>
        </div>
    </div>
  
  );

}

export default FetchA