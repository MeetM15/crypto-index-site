import { IoMdArrowDropdown } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { MenuItem, Menu } from "@mui/material";
const coingeckoUrl = () => {
  return `https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbinancecoin%2Ctether&vs_currencies=usd`;
};

const SwapForm = ({
  selectedCurrency,
  setSelectedCurrency,
  swapAmount,
  setSwapAmount,
  convertToAmount,
  selectTokenList,
  handleSwap,
  setShowSelectWallet,
  userBalance,
  etherPrice,
  setEtherPrice,
  binancePrice,
  setBinancePrice,
  usdtPrice,
  setUsdtPrice,
  walletConnected,
  setUserBalance,
  ethBalance,
  setEthBalance,
  bnbBalance,
  setBnbBalance,
  tetherBalance,
  setTetherBalance,
  referCodeField,
  setReferCodeField,
}) => {
  const { isWeb3Enabled, web3 } = useMoralis();
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(anchorMenu != null);

  const handleClick = (e) => {
    setAnchorMenu(e.currentTarget);
    setCurrencyMenuOpen(true);
  };
  const handleClose = () => {
    setAnchorMenu(null);
    setCurrencyMenuOpen(false);
  };
  useEffect(() => {
    const fetchPrices = async () => {
      fetch(coingeckoUrl()).then((response) =>
        response.json().then((jsonData) => {
          console.log(jsonData);
          setEtherPrice(jsonData.ethereum.usd);
          setBinancePrice(jsonData.binancecoin.usd);
          setUsdtPrice(jsonData.tether.usd);
        })
      );
    };
    fetchPrices();
  }, []);
  useEffect(() => {
    if (parseFloat(swapAmount) >= parseFloat(userBalance)) {
      setSwapAmount(parseFloat(userBalance));
    }
  }, [userBalance]);
  useEffect(() => {
    console.log(selectedCurrency);
    if (selectedCurrency[0] == "ETH") setUserBalance(ethBalance);
    else if (selectedCurrency[0] == "BNB") setUserBalance(bnbBalance);
    else if (selectedCurrency[0] == "USDT") setUserBalance(tetherBalance);
  }, [selectedCurrency]);
  return (
    <div className="bg-secondary py-4 rounded-2xl w-full mx-1 sm:mx-0 sm:w-128 min-h-144 sm:min-h-128 flex flex-col items-center ">
      <div className="flex flex-col items-center justify-between py-8 px-6 border-b border-#E7E3EB w-full">
        <span className="font-bold text-xl w-full text-center">
          Pre-sale for fund
        </span>
        <span className="font-base text-sm text-subText w-full text-center">
          Connect your wallet in order to buy into our limited pre-sale. You can
          directly use Ethereum (ETH), Binance Coin (BNB) or Tether (USDT) to
          purchase our tokens via a swap from your wallet. You will be able to
          see an estimated number of tokens that you will receive. Be one of the
          first to hold INDB tokens and receive a 50% discount on the management
          fee for the first year.
        </span>
      </div>
      <div className="flex flex-col items-center px-8 py-4 w-full">
        <form className="w-full flex flex-col items-center justify-evenly">
          <div className="w-full flex flex-col pt-2">
            <div className="w-full flex items-end justify-between">
              <div className="flex">
                <span className="p-1 text-sm font-medium flex items-center">
                  {selectedCurrency[1] && (
                    <img
                      src={selectedCurrency[1]}
                      alt="logo"
                      className="h-5 mr-2"
                    />
                  )}
                  {selectedCurrency[3] ? selectedCurrency[3] : ""}
                </span>
                <button
                  className="bg-transparent ml-2 text-xs text-inputText font-medium p-1 w-full flex rounded items-center justify-center"
                  onClick={handleClick}
                  type="button">
                  {selectedCurrency[0] ? selectedCurrency[0] : ""}
                  <IoMdArrowDropdown className="ml-1" />
                </button>
                <Menu
                  id="basic-currency-menu"
                  anchorEl={anchorMenu}
                  open={currencyMenuOpen}
                  onClose={handleClose}
                  fullWidth>
                  <MenuItem
                    onClick={() => {
                      setSelectedCurrency([
                        selectTokenList[0].name,
                        selectTokenList[0].logoURI,
                        selectTokenList[0].chain,
                        selectTokenList[0].fullName,
                      ]);
                      setCurrencyMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between">
                    {selectTokenList[0].name ? selectTokenList[0].name : ""}
                    {selectTokenList[0].logoURI && (
                      <img
                        src={selectTokenList[0].logoURI}
                        alt="logo"
                        className="h-5 ml-2"
                      />
                    )}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCurrency([
                        selectTokenList[1].name,
                        selectTokenList[1].logoURI,
                        selectTokenList[1].chain,
                        selectTokenList[1].fullName,
                      ]);
                      setCurrencyMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between">
                    {selectTokenList[1].name ? selectTokenList[1].name : ""}
                    {selectTokenList[1].logoURI && (
                      <img
                        src={selectTokenList[1].logoURI}
                        alt="logo"
                        className="h-5 ml-2"
                      />
                    )}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSelectedCurrency([
                        selectTokenList[2].name,
                        selectTokenList[2].logoURI,
                        selectTokenList[2].chain,
                        selectTokenList[2].fullName,
                      ]);
                      setCurrencyMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between">
                    {selectTokenList[2].name ? selectTokenList[2].name : ""}
                    {selectTokenList[2].logoURI && (
                      <img
                        src={selectTokenList[2].logoURI}
                        alt="logo"
                        className="h-5 ml-2"
                      />
                    )}
                  </MenuItem>
                </Menu>
              </div>
              <span className="font-medium text-sm text-gray-500">
                {`Balance : ${userBalance} ${selectedCurrency[0]}`}
              </span>
            </div>
            <div className="w-full pt-2">
              <input
                type="number"
                className="w-full text-black bg-inputbg py-3 px-6 rounded-xl shadow-inner font-medium"
                value={swapAmount}
                onBlur={(e) => {
                  if (e.target.value <= 0) {
                    e.target.value = 0;
                  }
                  if (e.target.value >= userBalance) {
                    e.target.value = userBalance;
                  }
                  setSwapAmount(parseFloat(e.target.value));
                }}
                onChange={(e) => setSwapAmount(parseFloat(e.target.value))}
              />
            </div>
            <div className="w-full flex items-center justify-between h-8 mt-1">
              <button
                className="border-2 border-btnBlue text-xs font-medium px-3 py-1 flex rounded-lg items-center justify-center text-btnBlue"
                onClick={() => {
                  setSwapAmount(userBalance);
                }}
                type="button">
                Max
              </button>
              <span className="font-medium text-sm text-gray-500">
                {`1 ${selectedCurrency[0]} = $${
                  selectedCurrency[0] == "ETH"
                    ? etherPrice
                    : selectedCurrency[0] == "BNB"
                    ? binancePrice
                    : usdtPrice
                }`}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col pt-6">
            <div className="w-full flex items-center justify-start">
              <span className="p-1 text-sm font-medium flex items-end">
                {<img src="/logo.svg" alt="logo" className="h-5 mr-2" />}
                {"Index Block"}
                <span className="ml-2 text-xs text-inputText font-medium">
                  INDB
                </span>
              </span>
            </div>
            <div className="w-full text-black bg-inputbg py-3 px-6 rounded-xl shadow-inner font-medium">
              {convertToAmount}
            </div>
            <div className="w-full flex items-end justify-end">
              <span className="font-medium text-sm text-gray-500">
                {`Price = $ 0.01`}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col pt-6">
            <div className="w-full font-medium text-sm">Referral Code</div>
            <div className="w-full pt-2">
              <input
                type="text"
                value={referCodeField}
                className="w-full text-black bg-inputbg py-3 px-6 rounded-xl shadow-inner font-medium"
                onChange={(e) => {
                  setReferCodeField(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center pt-6">
            {web3.currentProvider &&
            (web3.currentProvider.accounts ||
              web3.currentProvider.selectedAddress) &&
            isWeb3Enabled &&
            walletConnected ? (
              <button
                className="bg-btnBlue text-xs text-white font-medium px-4 py-2 w-full flex rounded items-center justify-center"
                onClick={() => {
                  handleSwap(
                    web3.currentProvider.selectedAddress,
                    referCodeField,
                    convertToAmount,
                    swapAmount,
                    selectedCurrency[0]
                  );
                }}
                type="button">
                Submit
                <BsCurrencyExchange className="ml-2 text-white" size="32px" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowSelectWallet(true);
                }}
                className="bg-btnBlue text-xs text-white font-medium px-4 py-2 w-full flex rounded items-center justify-center"
                type="button">
                <MdAccountBalanceWallet
                  className="text-white mr-2"
                  size="32px"
                />
                Connect Wallet
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SwapForm;
