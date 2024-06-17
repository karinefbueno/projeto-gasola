import { useState } from "react";
import context from "./Context";

type ProviderProps = {
  children: React.ReactNode,
};

function Provider({ children }: ProviderProps) {
  const [favorited, setFavorited] = useState<boolean>(true);

  const contex = {
    favorited,
    setFavorited
  };

  return (
    <context.Provider value={contex}>
      {children}
    </context.Provider>
  );
}

export default Provider;