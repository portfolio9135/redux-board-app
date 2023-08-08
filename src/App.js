import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addPost, deletePost } from './features/Posts';
import { useState } from 'react';
const { v4: uuidv4 } = require('uuid');


function App() {
  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const hondleClick = () => {
    dispatch(addPost(
      {
        id: uuidv4(),
        name: name,
        content: content,
      }
    ))

    setName("")
    setContent("")
  }

  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>

      <div className='addPost'>
        <input type='text' placeholder='お名前' onChange={(e) => setName(e.target.value)} value={name}/>
        <input type='text' placeholder='投稿内容' onChange={(e) => setContent(e.target.value)} value={content}/>
        <button onClick={hondleClick}>投稿</button>
        <hr />
      </div>

      <div className='displayPosts'>
        {postList.map((post) => (
          <div key={post.id} className='post'>
            <h1 className='name'>{post.name}</h1>
            <p className='content'>{post.content}</p>
            <button onClick={()=> dispatch(deletePost({id: post.id}))}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
