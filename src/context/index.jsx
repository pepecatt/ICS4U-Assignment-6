import { createContext, useContext, useState } from 'react';
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [genres, setGenres] = useState([]);

  return (
    <StoreContext.Provider value={{
      email, setEmail,
      password, setPassword,
      firstName, setFirstName,
      lastName, setLastName,
      genreList, setGenreList,
      currentGenre, setCurrentGenre,
      loggedIn, setLoggedIn,
      cart, setCart,
      cartOpen, setCartOpen,
      settingsOpen, setSettingsOpen,
      genres, setGenres
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStoreContext = () => {
  return useContext(StoreContext);
}