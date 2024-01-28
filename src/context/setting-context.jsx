import React, { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingsProvider = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <SettingContext.Provider
      value={{
        mobileNav,
        setMobileNav,
        modalIsOpen, setIsOpen, openModal, closeModal
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingsProvider;
