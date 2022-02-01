/* eslint-disable react/no-unescaped-entities */
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function Faq() {
  return (
    <div className="w-full flex flex-col items-center justify-center xl:px-40">
      <div className="font-medium text-3xl md:text-4xl mb-5 leading-10 md:leading-12 text-center ">
        Have any question ? Check FAQs
      </div>
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <div className="shadow-lg rounded-xl">
              <Disclosure.Button
                className={`flex justify-between w-full px-8 py-5 text-sm font-medium text-left text-black bg-secondary border border-inputbg focus:outline-none ${
                  open ? "border-b-0  rounded-t-xl" : "rounded-xl"
                }`}>
                <span>Is CRYPTO20 a platform?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                No - CRYPTO20 is not a platform. It is an autonomous,
                high-performance, low-cost cryptocurrency index fund.
                Development of the trading system is complete - CRYPTO20 offers
                value now, not at some point in the future. Diversification to
                the top 20 cryptocurrencies is now possible by holding a single
                token.
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
                <span>Where is CRYPTO20 incorporated?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                CRYPTO20 has been established in the Cayman Islands
                jurisdiction. The Caymans are a popular international
                jurisdiction for the incorporation of investment funds. The
                Cayman jurisdiction has seen a strong increase in private equity
                funds year on year over the past decade. The popularity of
                Cayman private equity funds has been fuelled by the increase in
                hedge fund managers growing into the private equity space and by
                the increased use of private equity funds to pursue distressed
                asset investments. The Cayman limited liability company (LLC)
                was introduced last year as a flexible, tax-neutral low-cost
                fund vehicle with a corporate personality. The LLC is a flexible
                structure ideally suited for use as a closed-end investment
                vehicle. The Cayman LLC was established under legislation that
                was drafted with the key terms of private equity vehicles in
                mind. The registration, due diligence and reporting requirements
                which arise from this legislation is generally delegated to a
                private equity fund’s administrator. The procedures are closely
                aligned with existing anti-money laundering (AML/KYC)
                requirements to ensure that the use of Cayman vehicles for
                private equity structures remains a low cost option. Please see
                this Deloitte report for more.
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
                <span>What are CRYPTO20's public reporting requirements?</span>
                <HiPlus
                  className={`${open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
                <HiMinus
                  className={`${!open ? "hidden" : "block"} w-5 h-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`px-8 pb-5 text-sm text-lgrey border border-t-0 border-inputbg rounded-b-xl`}>
                Please see our public reporting requirements document.
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
                  Have the CRYPTO20 Fund's asset holdings been verified by a
                  third party?
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
                An Agreed Upon Procedures engagement has been completed by KPMG;
                you may see the procedures Crypto20 requested to be performed in
                the report here.
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
                Please see our learn page to discover more about index funds and
                crypto investment.
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
                only 0.5% p/a as opposed to the 3% p/a plus 0.5% exit fees
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
                <span>Why is CRYPTO20 on the blockchain?</span>
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
                CRYPTO20:
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
                  <li>CRYPTO20 only holds cryptocurrency assets</li>
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
                    C20 token value can exceed value of underlying assets but
                    can not fall below due to the liquidation option in the
                    smart contract
                  </li>
                  <li>
                    C20 tokens are designed to be attractive to fiat investors
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
                  What will happen if one of the tokens that CRYPTO20 holds
                  undergoes a fork - such as Ethereum or Bitcoin has?
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
                We will integrate the additional tokens into the CRYPTO20 fund
                as soon as we are able and then follow normal rebalancing
                procedure (and as such this token may or may not then form part
                of our fund composition). It is likely that the value of the
                fund will increase and this will be passed on to C20
                token-holders.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
