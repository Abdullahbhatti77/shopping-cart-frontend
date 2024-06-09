import Abc from "./Abc";
import { createContext } from "react";

export const userContext=createContext();
export default function Hellowworld() {
  return (
    <>
    <userContext.Provider value={{name:"abdullah", age:12}}>
      <h1>Hello World</h1>
        <Abc />
    </userContext.Provider>
    </>
  );
}
