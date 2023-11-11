import { MdPayment } from 'react-icons/md'
import { TbArrowsExchange } from 'react-icons/tb'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'
const Home2 = () => {
    return (
        <><section className="text-gray-600 body-font sm:px-28 ">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <MdPayment style={{ fontSize: "30px" }} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Buy Crypto With a Card</h2>
                            <p className="leading-relaxed text-base">Buy crypto instantly with your card, accessing a world of digital assets and financial possibilities.</p>

                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <TbArrowsExchange style={{ fontSize: "30px" }} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Exchange Instantly
                            </h2>
                            <p className="leading-relaxed text-base">Swap cryptocurrencies instantly, ensuring seamless transactions and maximizing your trading opportunities.</p>

                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <RiGitRepositoryPrivateLine style={{ fontSize: "30px" }} />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Private & Secure</h2>
                            <p className="leading-relaxed text-base">Experience private and secure transactions, safeguarding your crypto assets with advanced encryption and cutting-edge security measures.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section></ >
    )
}

export default Home2