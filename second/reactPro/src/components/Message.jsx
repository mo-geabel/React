export default function Message() {
  function handelClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={handelClick}>click to get a message</button>
    </div>
  );
}
