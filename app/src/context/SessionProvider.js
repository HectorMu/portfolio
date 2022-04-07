import { useState, createContext } from "react";

export const Session = createContext();
function SessionProvider({ children }) {
  const userData = JSON.parse(window.localStorage.getItem("PORTSession"));
  const [user, setUser] = useState(userData);

  return (
    <Session.Provider value={{ user, setUser }}>{children}</Session.Provider>
  );
}

export default SessionProvider;
