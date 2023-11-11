import img1 from '../../assets/home_hero.png'
import img2 from '../../assets/tech1.png'
import img3 from '../../assets/tech2.png'
import img4 from '../../assets/tech3.png'
import img5 from '../../assets/tech4.png'

const Home1 = () => {
    return (
        <>
            <section className="text-gray-600 body-font bg-[#0b65c6]  px-16 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white home-sec-1 font-extrabold  "><b>Secure your crypto with the most trusted wallet.</b>

                        </h1>
                        <p className="mb-2  leading-relaxed text-white">Trust Wallet: Buy, store, collect NFTs, exchange & earn crypto. Join 60M+ users now!</p>
                        <div className="flex justify-center">
                            <div className=" sm:w-40 sm:p-0  w-40 ">
                                <img className="object-cover object-center rounded" alt="hero" src={img2} />
                            </div>
                            <div className=" sm:w-40 sm:p-0  w-40 ">
                                <img className="object-cover object-center rounded" alt="hero" src={img3} />
                            </div>
                        </div>

                        <div className="flex justify-center -mt-16">
                            <div className=" sm:w-40 sm:p-0  w-40 ">
                                <img className="object-cover object-center rounded -mt-24" alt="hero" src={img4} />
                            </div>
                            <div className=" sm:w-40 sm:p-0  w-40 ">
                                <img className="object-cover object-center rounded -mt-24" alt="hero" src={img5} />
                            </div>
                        </div>

                      
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2  w-80">
                        <img className="object-cover object-center rounded" alt="hero" src={img1} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home1