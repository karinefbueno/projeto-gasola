import { createContext } from "react";
import { ReposProps } from "../types/types";

type ContextType = {
   favorites: ReposProps[],
   loading: boolean,
   deleteFavorite: (id: string) => Promise<void>,
   fetchData: () => Promise<void>
  }

const context = createContext({} as ContextType);

export default context;