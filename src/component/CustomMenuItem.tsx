import React, { useState } from "react";

type useOpenStateProps = {
  features: boolean;
  company: boolean;
};
export const useOpenState = (initialOpeningState: useOpenStateProps) => {
  const [isOpen, setIsOpen] = useState(initialOpeningState);
  const handleOpen = (menu: string) => {
    if (menu === "company") setIsOpen({ ...isOpen, company: !isOpen.company });
    if (menu === "features")
      setIsOpen({ ...isOpen, features: !isOpen.features });
  };
  return {
    isOpen,
    handleOpen,
  };
};

type CustomMenuItemProps = {
  children: React.ReactNode;
};

const CustomMenuItem = ({ children }: CustomMenuItemProps) => {
  return <>{children}</>;
};

export default CustomMenuItem;
