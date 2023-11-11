import img1 from '../../assets/home_cards.png'
import img2 from '../../assets/home_dex.png'
import img3 from '../../assets/home_security.png'
import img4 from '../../assets/home_dapps.png'
import img5 from '../../assets/home_svg1.png'
import img6 from '../../assets/home_svg2.png'
import img7 from '../../assets/home_svg3.png'
import img2t from '../../assets/tech1.png'
import img3t from '../../assets/tech2.png'
import img4t from '../../assets/tech3.png'
import img5t from '../../assets/tech4.png'

const Home4 = () => {
    return (
        <>
            <section className="text-gray-600 body-font sm:px-28 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={img1} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Buy the Crypto Card
                        </h1>
                        <p className="mb-8 leading-relaxed font-medium">Start your crypto journey with popular cryptocurrencies like Bitcoin, Ethereum, Binance Coin, and more.</p>

                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font sm:px-28 -mt-36 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Instant crypto exchanges
                        </h1>
                        <p className="mb-8 leading-relaxed font-medium">Trade crypto hassle-free anytime, without the need for forms or selfies.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={img2} />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font sm:px-28 -mt-36 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={img3} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Uncompromising privacy and security for your crypto.
                        </h1>
                        <p className="mb-8 leading-relaxed font-medium"> Your wallet, your control. We prioritize your privacy and do not collect personal data.</p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font sm:px-28 -mt-36 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">DApp browser for seamless decentralized exploration.</h1>
                        <p className="mb-8 leading-relaxed font-medium">Discover and enjoy your favorite decentralized apps, as well as explore new ones, all without leaving your wallet.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center " alt="hero" src={img4} />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font sm:px-28 px-4 -mt-42">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-5xl font-extrabold title-font mb-4 text-gray-900">Get started in 3 simple steps</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get started in just minutes, with a quick and hassle-free setup process.</p>
                </div>
                <div className="container  ">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">

                                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center   inline-block  bg-gray-100" src={img5} />
                                <h2 className="text-gray-900 font-extrabold title-font tracking-wider text-lg mb-4">Get Trust Wallet</h2>
                                <p className="leading-relaxed">Download Trust Wallet today and access a world of secure and convenient cryptocurrency management and transactions. Start your digital finance journey now!</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center inline-block    bg-gray-100" src={img6} />
                                <h2 className="text-gray-900 font-extrabold title-font tracking-wider text-lg  mb-4">Make the Account</h2>
                                <p className="leading-relaxed"> Create a new wallet effortlessly with Trust Wallet, securing your digital assets and empowering your financial future. Get started now!</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-40 h-40 mb-8 object-cover object-center   inline-block   bg-gray-100" src={img7} />
                                <h2 className="text-gray-900 font-extrabold title-font tracking-wider text-lg  mb-4">Do some Transactions</h2>
                                <p className="leading-relaxed"> Acquire cryptocurrencies easily and start building your digital asset portfolio with Trust Wallet. Get some crypto today!</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
        </>
    )
}

export default Home4