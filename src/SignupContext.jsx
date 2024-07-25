// SignupContext.jsx
import React, { createContext, useState } from 'react';

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    phone: '',
    gender: ''
  });

  return (
    <SignupContext.Provider value={{ signupDetails, setSignupDetails }}>
      {children}
    </SignupContext.Provider>
  );
};
