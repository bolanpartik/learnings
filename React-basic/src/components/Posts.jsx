// App component for this component

// const [posts, setPosts] = useState([])
// const postComponents = posts.map(post =>
//   <PostsComponent
//     image={post.image}
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.time}
//     description={post.description}
//   />
// )
// function addPost() {
//   setPosts([...posts, {
//     name: 'Random',
//     subtitle: '11000',
//     time: '20m ago',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBFbCgb0ajYdgdzEXKZ3Kg7y1Lc3upM0IDg&s',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet delectus repellendus praesentium, laborum ipsam'
//   }])
// }
// return <div style={{ background: "#dfe6e9", height: "100vh", }}>
//   <button onClick={addPost}>Add post</button>
//   <div style={{ display: "flex", justifyContent: "center" }}>
//     <div>
//       {postComponents}
//     </div>
//   </div>
// </div>

export default function PostsComponent({ image, name, subtitle, time, description }) {

    return <div style={{ width: 400, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, marginBottom: 5 }}>
        <div style={{ display: "flex" }}>
            <img src={image} style={{
                width: 30,
                height: 30,
                borderRadius: 20
            }} />
            <div style={{ fontSize: 10, marginLeft: 10 }}>
                <b>
                    {name}
                </b>
                <div>{subtitle}</div>
                {(time !== undefined) ? <div style={{ display: 'flex' }}>
                    <div>{time}</div>
                    <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{ width: 12, height: 12 }} />
                </div> : null}
            </div>
        </div>
        <div style={{ fontSize: 12,marginTop:5 }}>
            {description}
        </div>
    </div >
}
