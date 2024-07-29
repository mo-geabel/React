import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';
import { click } from '@testing-library/user-event/dist/click';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const[name,setName]= useState('mohammed')
  const Click = () => {
    setName('ali');

  } ;
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res=> {
        return res.json()
      })
      .then(data=> {
        console.log(data)
        setBlogs(data)
      })
  },[name]);

  return (
    <div className="home">
      {blogs&&<BlogsList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
      {blogs&&<BlogsList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete} />}
      
    </div>
  );
};

export default Home;
