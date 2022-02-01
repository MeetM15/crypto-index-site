/* eslint-disable react/no-unescaped-entities */
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function Faq() {
    return (
        <div className="w-full flex flex-col items-center justify-center xl:px-40">
      <div className="font-medium text-3xl md:text-4xl mb-5 leading-10 md:leading-12 text-center ">
        Frequently Asked Questions (FAQ)
      </div>
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>Is Index Block a platform?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                No - Index Block is not a platform. It is an autonomous,
                high-performance, low-cost cryptocurrency index fund.
                Index Block offers value now with access to 50 cryptocurrencies by holding a single token.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
       
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>What is an index fund?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                An index fund is a type of mutual fund or exchange-traded fund (ETF) with a portfolio constructed to match or track the components of a financial market index, such as the Standard & Poor's 500 Index (S&P 500). An index mutual fund is said to provide broad market exposure, low operating expenses, and low portfolio turnover. These funds follow their benchmark index regardless of the state of the markets. 
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>What are the fund costs?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                Fund automation will allow us to operate in a sustainable
                low-cost skeleton fund capacity and offer management fees of
                only 1% as opposed to the 3% plus 0.5% exit fees
                offered in the crypto market at the moment.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>Why is Index Block on the blockchain?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                There are many reasons to utilize blockchain technology for
                Index Block:
                <br />
                <br />
                <ul>
                  <li> Full transparency over fund activity</li>
                  <li>
                    Ability to trade or move tokens at will with no exit fee
                  </li>
                  <li>No minimum investment</li>
                  <li>No legacy banking costs means low fund fees</li>
                  <li>
                    Easy listing for sale and trading peer-to-peer on exchange
                  </li>
                  <li>Index Block only holds cryptocurrency assets</li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>
                  Why not buy the underlying assets myself and run my own index
                  fund?
                </span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                There are many reasons:
                <br />
                <br />
                <ul>
                  <li>Convenience - buy and forget</li>
                  <li>Large funds get volume based discounts on exchanges</li>
                  <li>You only have to hold a single asset instead of 10+</li>
                  <li>
                    Rebalancing a portfolio is a complex and time-consuming
                    process
                  </li>
                  <li>
                    INDB token value can exceed value of underlying assets but
                    can not fall below due to the liquidation option in the
                    smart contract
                  </li>
                  <li>
                    INDB tokens are designed to be attractive to fiat investors
                    seeking a straightforward way to gain exposure to
                    cryptocurrencies
                  </li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>
                  What will happen if one of the tokens that Index Block holds
                  undergoes a fork?
                </span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                We will integrate the additional tokens into the Index Block fund
                as soon as we are able and then follow normal rebalancing
                procedures. It is likely that the value of the
                fund will increase and will be passed onto INDB
                token-holders.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
    );
}