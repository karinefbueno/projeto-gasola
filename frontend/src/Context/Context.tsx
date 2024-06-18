import { createContext } from "react";
import { ReposProps } from "../types/types";

type ContextType = {
   favorited: boolean,
   setFavorited: React.Dispatch<React.SetStateAction<boolean>>,
   favorites: ReposProps[],
   loading: boolean,
   deleteFavorite: (id: string) => Promise<void>,
   fetchData: () => Promise<void>
  }

const context = createContext({} as ContextType);

export default context;