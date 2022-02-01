/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HowItWorks = () => {
    return (
        <div className="w-full xl:w-194 px-4 sm:px-6 lg:px-12 flex flex-col xl:flex-row items-center justify-center xl:justify-between">
      <div className="py-32 w-full flex flex-col items-center justify-center">
        <div className="text-inputText text-center w-full text-xs font-medium">
          How it works
        </div>
        <div className="text-black w-full text-center text-3xl font-medium">
          We take what works from the old-world financial
          <br className="hidden xl:block" /> system and remove what doesn't
        </div>
        <div className="flex flex-wrap w-full gap-4 mt-16 justify-center">
          <div className="flex flex-col items-center justify-evenly w-80 h-80 rounded-2xl bg-secondary p-5 shadow-lg">
            <img
              className="h-24 w-auto p-1"
              src="/how/trading.svg"
              alt="logo"
            />
            <div className="w-full font-bold text-xl mt-4 text-center">
              Easy Liquidation
            </div>
            <div className="w-full flex items-center justify-center text-sm font-medium text-inputText text-center">
              Your token is your share of investment in the fund. Exchange your INDB tokens for USDT. No exit fees.
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly w-80 h-80 rounded-2xl bg-secondary p-5 shadow-lg">
            <img className="h-24 w-auto p-1" src="/how/fees.svg" alt="logo" />
            <div className="w-full font-bold text-xl mt-4 text-center">
              Lowest Management Fees
            </div>
            <div className="w-full flex items-center justify-center text-sm font-medium text-inputText text-center">
              Annual fees of only 1% - much lower than the 3% out there.
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly w-80 h-80 rounded-2xl bg-secondary p-5 shadow-lg">
            <img className="h-24 w-auto p-1" src="/how/auto.svg" alt="logo" />
            <div className="w-full font-bold text-xl mt-4 text-center">
              Low Maintenance
            </div>
            <div className="w-full flex items-center justify-center text-sm font-medium text-inputText text-center">
              Index funds do not require expensive managers for active trading.
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly w-80 h-80 rounded-2xl bg-secondary p-5 shadow-lg">
            <img
              className="h-24 w-auto p-1"
              src="/how/science.svg"
              alt="logo"
            />
            <div className="w-full font-bold text-xl mt-4 text-center">
              Powered by Data
            </div>
            <div className="w-full flex items-center justify-center text-sm font-medium text-inputText text-center">
              The formula uniquely decides on what to buy and sell based on numerous factors all supported by data.
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly w-80 h-80 rounded-2xl bg-secondary p-5 shadow-lg">
            <img className="h-24 w-auto p-1" src="/how/track.svg" alt="logo" />
            <div className="w-full font-bold text-xl mt-4 text-center">
              Track the Index
            </div>
            <div className="w-full flex items-center justify-center text-sm font-medium text-inputText text-center">
              Index funds consistently beat actively managed funds for over
              the last 30 years.
            </div>
          </div>
          <div className="flex flex-col items-center justify-evenly w-80 h-80 rounded-2xl bg-secondary p-5 shadow-lg">
            <img
              className="h-24 w-auto p-1"
              src="/how/blockchain.svg"
              alt="logo"
            />
            <div className="w-full font-bold text-xl mt-4 text-center">
              Blockchain Transparency
            </div>
            <div className="w-full flex items-center justify-center text-sm font-medium text-inputText text-center">
             Track the underlying assets in real time and view INDB token transactions directly on the blockchain.
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HowItWorks;