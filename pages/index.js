/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import Wallet from "../components/modals/Wallet";
import SelectCurrency from "../components/modals/SelectCurrency";
import {
  useMoralis,
  useMoralisWeb3Api,
  useWeb3Transfer,
  useERC20Balances,
} from "react-moralis";
import SelectWallet from "../components/modals/SelectWallet";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
//icons
import { MdAccountBalanceWallet, MdUpcoming } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";

import PriceBar from "../components/priceBar/PriceBar";
import axios from "axios";
import HowItWorks from "../components/howItWorks/HowItWorks";
import SwapForm from "../components/swapForm/SwapForm";
import { CodeBlock } from "react-code-blocks";
import Faq from "../components/faq/Faq";
import Referral from "../components/modals/Referral";

const selectList = [
  {
    name: "ETH",
    logoURI: "/currency/eth.svg",
    chain: "eth",
    fullName: "Ethereum",
  },
  {
    name: "BNB",
    logoURI: "/currency/bnb.svg",
    chain: "bsc",
    fullName: "Binance",
  },
  {
    name: "USDT",
    logoURI: "/currency/usdt.svg",
    chain: "eth",
    fullName: "Tether",
  },
];
const symbolList = [
  "BTC",
  "ETH",
  "BNB",
  "ADA",
  "SOL",
  "XRP",
  "LUNA",
  "DOGE",
  "DOT",
  "AVAX",
  "MATIC",
  "ATOM",
  "CRO",
  "LTC",
  "NEAR",
  "LINK",
  "UNI",
  "FTM",
  "ALGO",
  "TRX",
  "BCH",
  "FTT",
  "XLM",
  "ICP",
  "MANA",
  "HBAR",
  "VET",
  "LEO",
  "KLAY",
  "ETC",
  "AXS",
  "SAND",
  "FIL",
  "EGLD",
  "THETA",
  "XMR",
  "HNT",
  "XTZ",
  "MIOTA",
  "ONE",
  "EOS",
  "AAVE",
  "CAKE",
  "GRT",
  "MKR",
  "STX",
  "KCS",
  "NEXO",
  "BSV",
  "FLOW",
];
const coinPortfolio = [
  { name: "Bitcoin", symbol: "BTC" },
  { name: "Ethereum", symbol: "ETH" },
  { name: "BNB", symbol: "BNB" },
  { name: "Cardano", symbol: "ADA" },
  { name: "Solana", symbol: "SOL" },
  { name: "XRP", symbol: "XRP" },
  { name: "Terra", symbol: "LUNA" },
  { name: "Dogecoin", symbol: "DOGE" },
  { name: "Polkadot", symbol: "DOT" },
  { name: "Avalanche", symbol: "AVAX" },
  { name: "Polygon", symbol: "MATIC" },
  { name: "Cosmos", symbol: "ATOM" },
  { name: "Crypto.com Coin", symbol: "CRO" },
  { name: "Litecoin", symbol: "LTC" },
  { name: "NEAR Protocol", symbol: "NEAR" },
  { name: "Chainlink", symbol: "LINK" },
  { name: "Uniswap", symbol: "UNI" },
  { name: "Fantom", symbol: "FTM" },
  { name: "Algorand", symbol: "ALGO" },
  { name: "TRON", symbol: "TRX" },
  { name: "Bitcoin Cash", symbol: "BCH" },
  { name: "FTX Token", symbol: "FTT" },
  { name: "Stellar", symbol: "XLM" },
  { name: "Internet Computer", symbol: "ICP" },
  { name: "Decentraland", symbol: "MANA" },
  { name: "Hedera", symbol: "HBAR" },
  { name: "VeChain", symbol: "VET" },
  { name: "UNUS SED", symbol: "LEO" },
  { name: "Klaytn", symbol: "KLAY" },
  { name: "Ethereum Classic", symbol: "ETC" },
  { name: "Axie Infinity", symbol: "AXS" },
  { name: "The Sandbox", symbol: "SAND" },
  { name: "Filecoin", symbol: "FIL" },
  { name: "Elrond", symbol: "EGLD" },
  { name: "Theta Network", symbol: "THETA" },
  { name: "Monero", symbol: "XMR" },
  { name: "Helium", symbol: "HNT" },
  { name: "Tezos", symbol: "XTZ" },
  { name: "IOTA", symbol: "MIOTA" },
  { name: "Harmony", symbol: "ONE" },
  { name: "EOS", symbol: "EOS" },
  { name: "Aave", symbol: "AAVE" },
  { name: "PancakeSwap", symbol: "CAKE" },
  { name: "The Graph", symbol: "GRT" },
  { name: "Maker", symbol: "MKR" },
  { name: "Stacks", symbol: "STX" },
  { name: "KuCoin Token", symbol: "KCS" },
  { name: "Nexo", symbol: "NEXO" },
  { name: "Bitcoin SV", symbol: "BSV" },
  { name: "Flow", symbol: "FLOW" },
];

export default function Home() {
  const router = useRouter();
  const web3Api = useMoralisWeb3Api();
  const { isWeb3Enabled, Moralis, web3 } = useMoralis();
  const [selectTokenList, setSelectTokenList] = useState(selectList);
  const [selectedCurrency, setSelectedCurrency] = useState(""); //0:name 1:logo 2:price 3:chain
  const [swapAmount, setSwapAmount] = useState(0.0);
  const [convertToAmount, setConvertToAmount] = useState(0.0);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showSelectWallet, setShowSelectWallet] = useState(false);
  const [userBalance, setUserBalance] = useState(0.0);
  const [eRC20Balances, setERC20Balances] = useState([]);
  const [ethBalance, setEthBalance] = useState(0.0);
  const [bnbBalance, setBnbBalance] = useState(0.0);
  const [tetherBalance, setTetherBalance] = useState(0.0);
  const [etherPrice, setEtherPrice] = useState(0.0);
  const [binancePrice, setBinancePrice] = useState(0.0);
  const [usdtPrice, setUsdtPrice] = useState(0.0);
  const [walletConnected, setWalletConnected] = useState(isWeb3Enabled);
  const [coinsData, setCoinsData] = useState(null);
  const [indbData, setIndbData] = useState(null);
  const [holdingsData, setHoldingsData] = useState(null);
  const [customSendAddress, setCustomSendAddress] = useState("0x32323");
  const [showReferralModal, setShowReferralModal] = useState(false);
  const [referralCode, setReferralCode] = useState("0");
  const [referCodeField, setReferCodeField] = useState("");

  const resetForm = () => {
    setEthBalance(0.0);
    setBnbBalance(0.0);
    setTetherBalance(0.0);
    setUserBalance(0.0);
  };

  const { fetch } = useWeb3Transfer({
    amount: Moralis.Units.ETH(
      parseFloat(swapAmount) ? parseFloat(swapAmount) : 0.0
    ),
    receiver: "0x3F762aDeac88c1e82045020A6686E52b3E18E4F7",
    type: "native",
  });

  const handleSwap = (
    walletAddress,
    referCode,
    indb_amt,
    payment_total,
    payment_method
  ) => {
    console.log({
      amount: Moralis.Units.ETH(parseFloat(swapAmount)),
      receiver: "0x3F762aDeac88c1e82045020A6686E52b3E18E4F7",
      type: "native",
    });
    const data = {
      wallet_address: walletAddress,
      refer_code: referCode,
      indb_amount: indb_amt,
      payment_total: payment_total,
      payment_method: payment_method,
    };
    console.log(data);
    axios
      .post("/referrals", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    try {
      const transferRes = fetch();
      console.log(transferRes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isWeb3Enabled && selectedCurrency[0]) {
      setWalletConnected(isWeb3Enabled);
      //fetch eth balance
      web3Api.account
        .getNativeBalance({
          chain: "rinkeby",
        })
        .then((res) => {
          const bal = parseFloat(Moralis.Units.FromWei(res.balance))
            .toString()
            .match(/^-?\d+(?:\.\d{0,4})?/)[0];
          setEthBalance(parseFloat(bal));
        })
        .catch((err) => console.log(err));
      //fetch bnb balance
      web3Api.account
        .getNativeBalance({
          chain: "bsc",
        })
        .then((res) => {
          const bal = parseFloat(Moralis.Units.FromWei(res.balance))
            .toString()
            .match(/^-?\d+(?:\.\d{0,4})?/)[0];
          setBnbBalance(parseFloat(bal));
        })
        .catch((err) => console.log(err));
      //fetch tether balance
      web3Api.account
        .getTokenBalances({
          chain: "rinkeby",
        })
        .then((res) => {
          console.log(res);
          setERC20Balances(res);
        })
        .catch((err) => console.log(err));
      console.log("web3 : ", web3.currentProvider);
    }
  }, [isWeb3Enabled, selectedCurrency, web3.currentProvider]);
  useEffect(() => {
    if (eRC20Balances && eRC20Balances.length != 0) {
      console.log("erc : ", eRC20Balances);
      eRC20Balances.map((coin) => {
        //0xdac17f958d2ee523a2206206994597c13d831ec7
        if (coin.token_address == "0xd92e713d051c37ebb2561803a3b5fbabc4962431")
          setTetherBalance(
            parseFloat(coin.balance) / Math.pow(10, parseInt(coin.decimals))
          );
      });
    }
  }, [eRC20Balances]);
  useEffect(() => {
    console.log("tether : ", tetherBalance);
    if (selectedCurrency[0] && selectedCurrency[0] == "ETH")
      setUserBalance(tetherBalance);
  }, [tetherBalance]);
  useEffect(() => {
    console.log("ether : ", ethBalance);
    if (selectedCurrency[0] && selectedCurrency[0] == "ETH")
      setUserBalance(ethBalance);
  }, [ethBalance]);
  useEffect(() => {
    console.log("bnb : ", bnbBalance);
    if (selectedCurrency[0] && selectedCurrency[0] == "BNB")
      setUserBalance(bnbBalance);
  }, [bnbBalance]);
  useEffect(() => {
    console.log("user : ", userBalance);
    if (selectedCurrency[0] && selectedCurrency[0] == "USDT")
      setUserBalance(tetherBalance);
  }, [userBalance]);

  //fetch ticker tokens
  useEffect(() => {
    axios
      .get("coin_prices")
      .then((res) => {
        console.log(res);
        setCoinsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //fetch INDB tokens details
  useEffect(() => {
    axios
      .get("indb_info")
      .then((res) => {
        console.log(res);
        setIndbData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //fetch holdings
  useEffect(() => {
    axios
      .get("holdings")
      .then((res) => {
        console.log(res);
        setHoldingsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (swapAmount != 0 && swapAmount) {
      const newValue =
        (swapAmount *
          (selectedCurrency[0] == "ETH"
            ? etherPrice
            : selectedCurrency[0] == "BNB"
            ? binancePrice
            : usdtPrice)) /
        0.01;
      const limit =
        indbData && indbData.tokens_available
          ? parseFloat(indbData.tokens_available)
          : 1000000;
      if (newValue < limit) setConvertToAmount(newValue);
      else {
        const newCurr =
          (0.01 * limit) /
          (selectedCurrency[0] == "ETH"
            ? etherPrice
            : selectedCurrency[0] == "BNB"
            ? binancePrice
            : usdtPrice);
        setSwapAmount(newCurr);
        setConvertToAmount(limit);
      }
    } else setConvertToAmount(0.0);
  }, [swapAmount]);

  useEffect(() => {
    if (selectTokenList) {
      setSelectedCurrency([
        selectTokenList[0].name,
        selectTokenList[0].logoURI,
        selectTokenList[0].chain,
        selectTokenList[0].fullName,
      ]);
    }
  }, [selectTokenList]);

  //on wallet disconnection or connection
  useEffect(() => {
    resetForm();
    if (walletConnected && web3 && web3.currentProvider) {
      axios
        .post("/referral_code", {
          wallet_address: web3.currentProvider.selectedAddress,
        })
        .then((res) => {
          console.log(res);
          setReferralCode(res.data.refer_code);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [walletConnected]);

  return (
    <>
      <Head>
        <title>Index Block</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout
        setShowWalletModal={setShowWalletModal}
        setShowSelectWallet={setShowSelectWallet}
        walletConnected={walletConnected}
        setWalletConnected={setWalletConnected}>
        <div className="bg-[url('/home_bg.svg')] w-full pt-16 flex flex-col items-center justify-center ">
          {/* first section */}
          <div className="w-full xl:w-194 px-4 sm:px-6 flex flex-col items-center justify-center xl:justify-between">
            <div className="w-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-5/12 flex flex-col items-center sm:items-start justify-center">
                <div className="font-bold text-6xl mb-5">
                  The Largest Crypto Index Fund
                  <div className="font-medium text-sm text-lgrey mt-5">
                    Following the top 50 crypto assets
                  </div>
                </div>
                <div className="flex w-full items-start justify-start mb-4 lg:mb-12">
                  <button
                    onClick={() => {
                      setShowSelectWallet(true);
                    }}
                    className="bg-btnBlue text-white text-xs font-medium px-4 py-2 w-36 lg:w-42 flex rounded-lg items-center justify-center mb-4 sm:mb-0 mr-4 h-10"
                    type="button">
                    <MdAccountBalanceWallet
                      className="text-white mr-2"
                      size="24px"
                    />
                    Connect Wallet
                  </button>
                  <a href="#how">
                    <button
                      className="bg-white text-textBlue text-xs font-bold px-4 py-2 w-36 lg:w-42 flex rounded-lg items-center justify-center border border-textBlue h-10"
                      type="button">
                      Learn more
                    </button>
                  </a>
                </div>
                <div className="w-full font-medium text-xl italic text-black mb-2">
                  “Don't look for the needle in the haystack.
                  <br /> Just buy the haystack!”
                </div>
                <div className="w-full font-medium text-xs text-lgrey mb-4 xl:mb-10">
                  — John C. Bogle
                  <br />
                  founder of The Vanguard Group <br />
                  and inventor of the index fund
                </div>
              </div>
              <div className="w-full lg:w-7/12 mt-4 xl:mt-0 flex items-center justify-center">
                <img src="/home_ele.svg" alt="xxx" className="w-full" />
              </div>
            </div>
            <div className="font-medium text-xs text-lgrey w-full flex flex-wrap sm:flex-nowrap items-center justify-center xl:justify-start mt-4 gap-2">
              <div className="w-36 sm:w-40 h-24 bg-white border-t-4 border-textBlue sm:mr-6 rounded-b-lg drop-shadow-xl flex flex-col items-center justify-center">
                <div className="text-base px-4 text-lgrey w-full">
                  Fund Value
                </div>
                <div className="text-lg px-4 font-bold text-black w-full">
                  $
                  {indbData && indbData.total_value != undefined
                    ? indbData.total_value
                    : 100}
                </div>
              </div>
              <div className="w-36 sm:w-40 h-24 bg-white border-t-4 border-[#CC61FF] sm:mr-6 rounded-b-lg drop-shadow-xl flex flex-col items-center justify-center">
                <div className="text-base px-4 text-lgrey w-full">Token</div>
                <div className="text-lg px-4 font-bold text-black w-full">
                  INDB
                </div>
              </div>
              <div className="w-36 sm:w-40 h-24 bg-white border-t-4 border-[#FFAC4B] sm:mr-6 rounded-b-lg drop-shadow-xl flex flex-col items-center justify-center">
                <div className="text-base px-4 text-lgrey w-full">
                  Token Nav
                </div>
                <div className="text-lg px-4 font-bold text-black w-full">
                  $
                  {indbData && indbData.price_per_token != undefined
                    ? indbData.price_per_token
                    : 0.01}
                </div>
              </div>
            </div>
          </div>
          {/* second section */}
          {coinsData && (
            <div className="w-full 2xl:w-194 flex flex-col xl:flex-row items-center justify-center xl:justify-between mt-24 border-b-2 border-inpputText">
              <PriceBar coinsData={coinsData} />
            </div>
          )}
        </div>
        <a id="how">
          <div className=" w-full flex flex-col items-center justify-center bg-secondary">
            <HowItWorks />
          </div>
        </a>
        <a id="invest">
          <div className=" w-full flex flex-col items-center justify-center bg-bggray">
            <div className="w-full 2xl:w-194 flex flex-col items-center justify-center px-4 xl:px-24 py-16 xl:py-24">
              <div className="text-black w-full text-center text-4xl font-bold mb-8">
                Invest
              </div>
              <SwapForm
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                selectTokenList={selectTokenList}
                swapAmount={swapAmount}
                setSwapAmount={setSwapAmount}
                convertToAmount={convertToAmount}
                setConvertToAmount={setConvertToAmount}
                handleSwap={handleSwap}
                setShowSelectWallet={setShowSelectWallet}
                userBalance={userBalance}
                setUserBalance={setUserBalance}
                ethBalance={ethBalance}
                setEthBalance={setEthBalance}
                bnbBalance={bnbBalance}
                setBnbBalance={setBnbBalance}
                tetherBalance={tetherBalance}
                setTetherBalance={setTetherBalance}
                etherPrice={etherPrice}
                setEtherPrice={setEtherPrice}
                binancePrice={binancePrice}
                setBinancePrice={setBinancePrice}
                usdtPrice={usdtPrice}
                setUsdtPrice={setUsdtPrice}
                walletConnected={walletConnected}
                referCodeField={referCodeField}
                setReferCodeField={setReferCodeField}
              />
              <div className="w-full text-inputText text-center text-xl font-medium p-4">
                OR
              </div>
              <div className="w-full sm:w-112 p-12 bg-secondary rounded-2xl text-black text-xl font-medium flex flex-col mb-8">
                Send ETH, BNB (BSC), or USDT to this address
                <div className="flex flex-col xl:flex-row gap-4 w-full mt-2">
                  <div className="w-full xl:w-9/12 p-3 text-textBlue font-medium text-sm bg-secondary rounded-lg border">
                    {customSendAddress}
                  </div>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(customSendAddress);
                    }}
                    className="w-full xl:w-4/12 p-3 text-center text-black font-medium text-sm bg-secondary rounded-lg border cursor-pointer">
                    Copy
                  </div>
                </div>
              </div>
              <div className="w-full text-inputText text-center text-xs font-medium">
                Our pre-sale tokens are priced at the dollar value, and
                additional coins will only be released per $1 added into the
                fund or via exchanges between holders who want to liquidate and
                new people purchases. Once we hit our fund goal, there will be a
                waitlist to either release more tokens at the current token
                price based on the Net Asset Value (NAV) or in order to provide
                liquidation for original holders.
              </div>
            </div>
          </div>
        </a>
        <div className="w-full flex flex-col xl:flex-row justify-center bg-secondary  px-4 xl:px-24 py-16 xl:py-24">
          <div className="w-full xl:w-3/6 flex mr-0 xl:mr-8">
            <div className="w-full flex flex-col">
              <div className="font-medium text-sm text-lgrey mb-3  text-center xl:text-left ">
                SAFE ERC20-COMPLIANT SMART CONTRACT
              </div>
              <div className="font-bold text-4xl xl:text-5xl mb-5 leading-10 xl:leading-12 text-center xl:text-left">
                Index Block makes it easy for anyone to get exposure to crypto
                returns with broad, diversified risk.
              </div>
              <div className="flex w-full items-start justify-center xl:justify-start mb-4 lg:mb-12">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-btnBlue text-white text-xs font-medium px-4 py-2 w-36 lg:w-46 flex rounded-lg items-center justify-center mb-4 sm:mb-0 mr-4 h-12"
                    type="button">
                    <IoNewspaperOutline
                      className="text-white mr-1"
                      size="24px"
                    />
                    Read our white paper
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-btnBlue text-white text-xs font-medium px-4 py-2 w-36 lg:w-46 flex rounded-lg items-center justify-center mb-4 sm:mb-0 sm:mr-4 h-12"
                    type="button">
                    <MdUpcoming className="text-white mr-1" size="24px" />
                    Coming Soon
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto xl:w-3/6 flex items-center justify-center">
            <div className="w-full md:w-auto xl:w-auto flex border-8 border-['#CCE3FF'] rounded-lg h-112 p-8 shadow-lg">
              <CodeBlock
                text={`
                // INVESTOR OPTION TO LIQUIDATE TOKENS
                
                  function withdraw() external {
                      address investor = msg.sender;
                      uint256 tokens = withdrawals[investor].tokens;
                      require(tokens > 0);
                      uint256 requestTime = withdrawals[investor].time;
                      Price price = prices[requestTime];
                      require(price.numerator > 0);
                      uint256 withdrawValue = safeMul(tokens, price.denominator)
                                                      / price.numerator;
                      withdrawals[investor].tokens = 0;
                      if (this.balance >= withdrawValue)
                          enact_withdrawal_greater_equal(investor, withdrawValue, tokens);
                      else
                          enact_withdrawal_less(investor, withdrawValue, tokens);
                   }
                 
                   function enact_withdrawal_greater_equal(
                       address investor,
                       uint256 withdrawValue,
                       uint256 tokens
                   )
                       private
                   {
                       assert(this.balance >= withdrawValue);
                       balances[fundWallet] = safeAdd(balances[fundWallet], tokens);
                       investor.transfer(withdrawValue);
                       Withdraw(investor, tokens, withdrawValue);
                   }
                   function enact_withdrawal_less(
                       address investor,
                       uint256 withdrawValue,
                       uint256 tokens
                   )
                       private
                   {
                       assert(this.balance < withdrawValue);
                       balances[investor] = safeAdd(balances[investor], tokens);
                       Withdraw(investor, tokens, 0);
                   }
                `}
                language={"javascript"}
                theme={"dracula"}
                showLineNumbers={true}
                wrapLongLines={true}
                customStyle={{
                  height: "h-full",
                  overflow: "scroll",
                  backgroundColor: "transparent",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center bg-bggray  px-4 xl:px-24 py-16 xl:py-24">
          <div className="w-full flex flex-col xl:flex-row gap-12">
            <div className="w-full xl:w-4/6 flex flex-wrap w-full gap-4 bg-secondary rounded-xl p-8 justify-center">
              {holdingsData &&
                holdingsData.map((coin, index) => {
                  if (index < 50)
                    return (
                      <div
                        key={index}
                        className="w-1/10 flex flex-col items-center justify-center gap-1">
                        <img src={coin.image} alt="" className="h-6" />
                        <div className="text-lgrey text-sm font-medium">
                          {coin.symbol.toUpperCase()}
                        </div>
                        <div
                          className={`flex items-center justify-center text-xxs text-black font-bold`}>
                          {coin.new_percentage_of_portfolio.toFixed(2)}%
                        </div>
                      </div>
                    );
                })}
            </div>
            <div className="w-full xl:w-2/6 flex flex-col gap-4 h-full items-center justify-center">
              <div className="font-bold text-4xl xl:text-5xl mb-5 leading-10 xl:leading-12 text-center xl:text-left">
                Fund Holdings
              </div>
              <div className="font-medium text-sm text-lgrey text-center xl:text-left mb-3">
                Our formula takes into account numerous variables and factors
                backed by data to assess tokens to be bought and rebalanced.
              </div>
              <div className="flex flex-col gap-4 w-full items-center xl:items-start justify-between sm:justify-start mb-4 lg:mb-12">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-secondary text-btnBlue text-xs font-medium px-4 py-2 flex rounded-lg items-center justify-center mb-4 sm:mb-0 sm:mr-4 h-12"
                    type="button">
                    <IoLogoGithub className="text-btnBlue mr-2" size="24px" />
                    Fact Sheet Coming Soon
                  </button>
                </a>
                <a
                  href="https://cdn.indexblock.com/pdf/indb-whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button
                    className="bg-secondary text-btnBlue text-xs font-medium px-4 py-2 flex rounded-lg items-center justify-center mb-4 sm:mb-0 sm:mr-4 h-12"
                    type="button">
                    <IoNewspaperOutline
                      className="text-btnBlue mr-2"
                      size="24px"
                    />
                    White paper
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button
                    className="bg-secondary text-btnBlue text-xs font-medium px-4 py-2 flex rounded-lg items-center justify-center mb-4 sm:mb-0 sm:mr-4 h-12"
                    type="button">
                    <HiOutlineDocumentReport
                      className="text-btnBlue mr-2"
                      size="24px"
                    />
                    Report Coming Soon
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full xl:gap-4 xl:mt-16 justify-center">
            <div className="flex flex-col items-start justify-start w-80 h-64 p-5">
              <div className="w-full font-bold text-xl mb-4">Performance</div>
              <div className="w-full flex items-center justify-center text-sm font-medium text-inputText">
                The INDB token provided by Index Block allows for shareholders
                to track their performance via a single crypto asset. Index
                funds consistently beat the average managed fund since their
                inception.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-80 h-64 p-5">
              <div className="w-full font-bold text-xl mb-4">
                Ease and Simplicity
              </div>
              <div className="w-full flex items-center justify-center text-sm font-medium text-inputText">
                There are thousands of cryptocurrencies for investors to choose
                from leading to choice paralysis.Choice adds cost, complexity
                and the need for advice.Index Block eliminates this complexity
                for the new crypto investor.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-80 h-64 p-5">
              <div className="w-full font-bold text-xl mb-4">REFER Program</div>
              <div className="w-full flex items-center justify-center text-sm font-medium text-inputText mb-4">
                Want to join our referral program ? Earn money towards the
                fund.The more people you refer and more money you bring in , the
                quicker your partner level grows, which will allow you to have
                early insights, earn higher $ on dollars brought in , and more.
              </div>
              <div className="flex flex-col gap-4 w-full items-start ">
                <button
                  className="bg-secondary text-btnBlue text-xs font-medium px-4 py-2 flex rounded-lg items-center justify-center mb-4 sm:mb-0 sm:mr-4 h-12"
                  type="button"
                  onClick={() => {
                    if (walletConnected) setShowReferralModal(true);
                    else setShowSelectWallet(true);
                  }}>
                  Refer Now
                </button>
                <div className="font-medium text-xs text-textBlue underline">
                  Connect your wallet to get a referral code
                </div>
              </div>
            </div>
          </div>
          <div className="font-medium text-xs text-lgrey w-full flex flex-wrap sm:flex-nowrap items-center justify-center xl:justify-end mt-4 gap-2"></div>
        </div>
        <a id="faq">
          <div className="w-full flex flex-col xl:flex-row justify-center bg-secondary  px-4 xl:px-24 py-16 xl:py-24">
            <Faq />
          </div>
        </a>
        <div className="w-full flex flex-col justify-center bg-bggray px-4 xl:px-32 py-16 xl:py-24">
          <div className="font-medium text-3xl xl:text-4xl mb-5 leading-10 xl:leading-12 text-center xl:px-32 ">
            Join our amazing community by joining below!
          </div>
          <div className="flex flex-wrap w-full items-center justify-center">
            <img
              className="h-24 w-auto p-1"
              src="/social/telegram.svg"
              alt="logo"
            />
            <img
              className="h-24 w-auto p-1"
              src="/social/discord.svg"
              alt="logo"
            />
            <img
              className="h-24 w-auto p-1"
              src="/social/youtube.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center bg-footer px-4 sm:px-12 xl:px-32 py-16 xl:py-24">
          <div className="flex font-medium text-2xl text-secondary w-full mb-8">
            INDEX BLOCK
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-lg md:w-96 flex flex-col text-secondary mr-4">
              ABOUT
              <div className="text-xs text-[#CCCDCE]">
                The larget crypto index fund in the market. Join our pre-sale by
                swapping tokens today. Learn more by joining our Telegram group
                above.
              </div>
              <div className="text-sm mt-8 contact-info-to-be-added"></div>
            </div>
            <div className="text-lg w-full flex flex-col gap-1 items-end text-secondary">
              <div className="text-xs text-[#CCCDCE] w-full mt-8">
                IMPORTANT LEGAL DISCLAIMER Access to products and services
                detailed on this website may be restricted for certain persons
                or countries.In particular, the products and services referred
                to herein are not available to U.S.Persons, as defined by
                Regulation S of the United States Securities and Exchange
                Commission, as amended(“U.S.Persons”).The information contained
                on this website is not available to U.S.Persons.Investors who
                are such "U.S. Persons" should not view this website.The
                provision of the information in this website does not constitute
                an offer of securities to any person in the United States or to
                any "U.S. Person." Index Block is not registered under the
                U.S.Investment Company Act of 1940, as amended, nor is the sale
                of INDB tokens registered under the U.S.Securities Act of 1933,
                as amended.Consequently, it cannot be offered for sale or be
                sold in the United States, its territories, possessions or
                protectorates under its jurisdiction, nor to nationals, citizens
                or residents in any of those areas, except pursuant to a valid
                exemption.More generally, the products and services presented on
                this website may only be purchased in jurisdictions in which
                their marketing and distribution are authorised.Index Block
                advises all interested parties to check in advance whether they
                are legally entitled to purchase the products and / or services
                presented on the website.
              </div>
            </div>
          </div>
        </div>
        <Referral
          setShowReferralModal={setShowReferralModal}
          showReferralModal={showReferralModal}
          referralCode={referralCode}
        />
        <Wallet
          setShowWalletModal={setShowWalletModal}
          showWalletModal={showWalletModal}
          walletConnected={walletConnected}
          setWalletConnected={setWalletConnected}
        />
        <SelectWallet
          showSelectWallet={showSelectWallet}
          setShowSelectWallet={setShowSelectWallet}
          setWalletConnected={setWalletConnected}
        />
      </Layout>
    </>
  );
}
