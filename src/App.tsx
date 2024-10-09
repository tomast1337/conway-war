import React, { useState, createContext } from "react";
import ProfileSection from "./features/ProfileSection";
import Canvas from "./features/Canvas";

const context = createContext({});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <context.Provider value={{}}>{children}</context.Provider>;
};

function App() {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const getPlayerData = (id, data) => {
    if (id === 1) setPlayerOne(data);
    if (id === 2) setPlayerTwo(data);
  };

  return (
    <div className="App">
      <ProfileSection inputId={1} getPlayerData={getPlayerData} />
      <Canvas players={{ playerOne, playerTwo }} />
      <ProfileSection inputId={2} getPlayerData={getPlayerData} />
    </div>
  );
}

export default App;
