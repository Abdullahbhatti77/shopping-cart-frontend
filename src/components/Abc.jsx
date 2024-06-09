import { useContext } from "react";
import { userContext } from "./HelloWorld";
export default function Abc() {
    const {name,age}=useContext(userContext);
  return (
    <>
      <h1>my name is {name}</h1>
      <p>my age is {age}</p>
    </>
  );
}
