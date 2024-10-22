import { useState } from 'react'
import PostsComponent from './Posts'

function App() {
  const [posts, setPosts] = useState([])

  const postComponents = posts.map(post =>
    <PostsComponent
      image={post.image}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      description={post.description}
    />
  )

  function addPost() {
    setPosts([...posts, {
      name: 'Random',
      subtitle: '11000',
      time: '20m ago',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet delectus repellendus praesentium, laborum ipsam'
    }])
  }

  return <div style={{ background: "#dfe6e9", height: "100vh", }}>
    <button onClick={addPost}>Add post</button>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {postComponents}
      </div>
    </div>
  </div>

}

export default App