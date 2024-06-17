import { createContext } from "react";

type ContextType = {
   favorited: boolean,
   setFavorited: React.Dispatch<React.SetStateAction<boolean>>
  }

const context = createContext({} as ContextType);

export default context;