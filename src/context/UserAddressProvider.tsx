// UserAddressContext.js

import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { ChildrenType, AddressType } from "../models/models";
import { UserAddressContext } from "./Contexts";

export type AddressContextValue = [
  AddressType|null,
  Dispatch<SetStateAction<AddressType|null>>
];

export const useUserAddress = () => {
  const context = useContext(UserAddressContext);
  if (!context) {
    throw new Error("useUserAddress must be used within a UserAddressProvider");
  }

  return context;
};

export const UserAddressProvider = ({ children }: ChildrenType) => {
  const [userAddress, setUserAddress] = useState<AddressType|null>(()=>{
    const storedAddress=localStorage.getItem("userAddress");
    return storedAddress ? JSON.parse(storedAddress) : null;
  });

  useEffect(()=>{
    if(userAddress){
      localStorage.setItem("userAddress",JSON.stringify(userAddress));
    } else {
      localStorage.removeItem("userAddress");
    }
  },[userAddress])

  const addUserAddress = (newAddress: AddressType) => {
    setUserAddress(newAddress);
  };

  const value: AddressContextValue = [userAddress, setUserAddress];
  return (
    <UserAddressContext.Provider value={value}>
      {children}
    </UserAddressContext.Provider>
  );
};

export default UserAddressProvider;
