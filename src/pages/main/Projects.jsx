import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [name, setName] = useState("");
  // return <h1>Projects</h1>;
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
    console.log("rendering", name);
    console.log("ref", prevName.current);
  }, [name]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-red-600 ml-48 border"
      />
      <h1>name: {name}</h1>
      <p>use to be: {prevName.current}</p>
    </>
  );
}
