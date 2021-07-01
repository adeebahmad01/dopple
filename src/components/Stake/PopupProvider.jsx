import React, { createContext, useContext, useState } from "react";
import Popup from "../utils/Popup";

const PopupContext = createContext({
  open: false,
  setOpen: (open) => {},
});

export const usePopup = () => useContext(PopupContext);

const PopupProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = { open, setOpen };
  return (
    <PopupContext.Provider value={value}>
      <Popup {...value} />
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;
