import { createContext } from 'react';
import { Map } from 'immutable';

const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <StoreContext.Provider value={{
      email, setEmail,
      password, setPassword,
      firstName, setFirstName,
      lastName, setLastName
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStoreContext = () => {
  return useContext(StoreContext);
}