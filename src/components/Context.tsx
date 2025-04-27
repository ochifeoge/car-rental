import { createContext } from "react";

const AnimationContext = createContext();
const Context = ({children}) => {




  return <AnimationContext.Provider value={{}}>{children}</AnimationContext.Provider>;
  
};

export default Context;
