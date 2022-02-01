import { MdAccountBalanceWallet } from "react-icons/md";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { IoMdWallet } from "react-icons/io";
import { Menu, MenuItem } from "@mui/material";
const Navbar = ({
  setShowWalletModal,
  setShowSelectWallet,
  walletConnected,
  setWalletConnected,
}) => {
  const { web3, isWeb3Enabled } = useMoralis();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(anchorEl != null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };
  return (
    <nav className="bg-secondary fixed w-full shadow flex items-center px-4 xl:px-0 justify-center h-12 text-white z-10">
      <div className="w-full xl:w-194 flex items-center justify-between h-12 text-white">
        <div className="flex-shrink-0 flex items-center">
          <img
            className="block lg:hidden h-10 w-auto p-1.5"
            src="/logo.svg"
            alt="logo"
          />
          <img
            className="hidden lg:block h-10 w-auto p-1.5"
            src="/logo.svg"
            alt="logo"
          />
          <div className="font-bold text-sm sm:text-xl text-black">
            INDEX BLOCK
          </div>
        </div>
        <div className="flex items-center justify-end">
          <a href="#how">
            <div className="hidden lg:flex font-medium text-xs text-black px-2 py-2 mr-7 cursor-pointer hover:underline">
              How it works
            </div>
          </a>
          <a href="#invest">
            <div className="hidden lg:flex font-medium text-xs text-black px-2 py-2 mr-7 cursor-pointer hover:underline">
              Invest
            </div>
          </a>
          <a href="#faq">
            <div className="hidden lg:flex font-medium text-xs text-black px-2 py-2 mr-7 cursor-pointer hover:underline">
              FAQ
            </div>
          </a>

          {web3.currentProvider &&
          (web3.currentProvider.accounts ||
            web3.currentProvider.selectedAddress) &&
          isWeb3Enabled &&
          walletConnected ? (
            <div className="flex items-center">
              <button
                onClick={handleClick}
                className="bg-btnBlue text-xs font-medium px-2 sm:px-4 py-2 w-32 md:w-42 flex rounded items-center justify-center"
                type="button">
                <div className="font-bold w-24 md:w-32 flex items-center justify-center">
                  <div className="flex items-center justify-center truncate w-full text-white">
                    {web3.currentProvider.isMetaMask
                      ? `${String(
                          web3.currentProvider.selectedAddress
                        ).substring(0, 4)}...
                  ${String(web3.currentProvider.selectedAddress).substring(
                    String(web3.currentProvider.selectedAddress).length - 4
                  )}`
                      : `${String(web3.currentProvider.accounts[0]).substring(
                          0,
                          4
                        )}...
                  ${String(web3.currentProvider.accounts[0]).substring(
                    String(web3.currentProvider.accounts[0]).length - 4
                  )}`}
                  </div>
                  <IoMdWallet className="text-white ml-2" size="24px" />
                </div>
              </button>
              <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
                <MenuItem
                  onClick={() => {
                    setShowWalletModal(true);
                    setMenuOpen(false);
                  }}>
                  Open Wallet
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setWalletConnected(false);
                    setMenuOpen(false);
                  }}>
                  Disconnect
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setShowSelectWallet(true);
                }}
                className="bg-btnBlueLight text-textBlue text-xs font-medium px-4 py-2 w-42 flex rounded items-center justify-center"
                type="button">
                <MdAccountBalanceWallet
                  className="text-textBlue mr-2"
                  size="24px"
                />
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
