import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({
    firstName: "Fisrt Name",
    lastName: "Last Name",
  });
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        ></input>
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        ></input>
      </form>
    </div>
  );
}
