const BlogsList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map(({ id, title, author, body }) => (
        <div className="home-prev" key={id}>
          <h2>{title}</h2>
          <p>Written by {author}</p>
          <p>{body}</p>
          <button onClick={() => handleDelete(id)}>Click to delete</button>
        </div>
      ))}
    </div>
  );
};
  
  export default BlogsList;
  