import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import firebase from 'firebase';
import Post from '../post/Post'
import './Feed.css'
import InputOption from './InputOption'
function Feed() {

        const [posts,setPosts] = useState([]);
        const [input,setInput] = useState("");
        useEffect(()=>{
           db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>(
               setPosts(
                   snapshot.docs.map(doc=>({
                   id:doc.id,
                   data:doc.data()
               })))
           )) ;
           
        },[])

        const sendPost = (e)=>{
            e.preventDefault();
            db.collection("posts").add({
                name:"Sushant Chalise",
                description:"This is a test",
                message:input,
                photoUrl:'',
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
            setInput("");
        }
    return (
        <div className="feed">
                <div className="feed_inputContainer">
                    <div className="feed_input">
                        <Create/>
                        <form action="">
                            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                            <button onClick={sendPost} type="submit">Send</button>
                        </form>
                    </div>
                    <div className="feed_inputOptions">
                       <InputOption Icon={Image} title="Photo" color="#70B5F9"/> 
                       <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/> 
                       <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/> 
                       <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E"/> 
                    </div>
                </div>
                {posts.map(({id,data:{name,description,message,photoUrl}})=>{
                    return <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                })}
        </div>
    )
}

export default Feed
