import React from "react";
import Logo from "@/app/components/Logo";
import ConnectWallet from "@/app/components/ConnectWallet";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 w-full">
      <Logo />
      <ConnectWallet />
    </header>
  );
};

export default Header;
