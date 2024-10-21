import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaGoogle, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import img1 from "../Assets/pexels-marcus-aurelius-4064342.jpg"
import img2 from "../Assets/pexels-moose-photos-170195-1587009.jpg"
import img3 from "../Assets/pexels-rdne-7845221.jpg"
import { SiTrustpilot } from "react-icons/si";
import SmallCard from "../Components/Card/SmallCard";
import cardimg1 from "../Assets/cardImage3.png"
import cardimg2 from "../Assets/pexels-a-darmel-7642000.jpg"
import cardimg3 from "../Assets/pexels-binyaminmellish-186077.jpg"
import cardimg4 from "../Assets/pexels-goumbik-577210.jpg"
import cardimg5 from "../Assets/pexels-goumbik-669621.jpg"
import cardimg6 from "../Assets/pexels-rdne-8293750.jpg"
import cardimg7 from "../Assets/pexels-mart-production-7415122.jpg"
import cardimg8 from "../Assets/pexels-rdne-7947842.jpg"
import cardimg9 from "../Assets/pexels-olly-3890582.jpg"
import cardimg10 from "../Assets/pexels-pixabay-262470.jpg"
import cardimg11 from "../Assets/pexels-pixabay-534229.jpg"
import cardimg12 from "../Assets/pexels-shvets-production-7561703.jpg"
import BigCard from "../Components/Card/BigCard";
import BigCard2 from "../Components/Card/BigCard2";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div className=" overflow-x-hidden">
        <section className="section bg-green-900 h-[100vh]">
        <div className="m-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
            <div className="flex items-center justify-center gap-3 md:gap-4 relative top-[50px] md:top-[35px] mt-28">
            <svg
                className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="18.8102" cy="18" r="17.8577" fill="#FFFDFA"></circle>
                <path
                d="M28.3517 22.6302L20.2944 14.572C20.2049 14.4824 20.0988 14.4114 19.9819 14.363C19.8651 14.3145 19.7398 14.2896 19.6132 14.2896C19.4867 14.2896 19.3614 14.3145 19.2446 14.363C19.1277 14.4114 19.0215 14.4824 18.9321 14.5719L15.5711 17.9339L8.97631 11.3382C8.79567 11.1575 8.55067 11.0561 8.29521 11.0561C8.03975 11.0561 7.79475 11.1575 7.61411 11.3382C7.43348 11.5188 7.332 11.7638 7.332 12.0193C7.332 12.2747 7.43348 12.5197 7.61411 12.7004L14.8899 19.9762C14.9794 20.0657 15.0856 20.1367 15.2024 20.1852C15.3193 20.2336 15.4446 20.2585 15.5711 20.2585C15.6976 20.2585 15.8229 20.2336 15.9398 20.1852C16.0566 20.1367 16.1628 20.0657 16.2522 19.9762L19.6133 16.6142L26.9905 23.9914H22.847C22.5916 23.9914 22.3467 24.0928 22.1662 24.2734C21.9856 24.4539 21.8842 24.6988 21.8842 24.9542C21.8842 25.2095 21.9856 25.4544 22.1662 25.6349C22.3467 25.8155 22.5916 25.9169 22.847 25.9169H29.3144C29.5698 25.9169 29.8146 25.8155 29.9952 25.6349C30.1758 25.4544 30.2772 25.2095 30.2772 24.9542V18.4867C30.2772 18.2314 30.1758 17.9865 29.9952 17.8059C29.8146 17.6254 29.5698 17.524 29.3144 17.524C29.0591 17.524 28.8142 17.6254 28.6336 17.8059C28.4531 17.9865 28.3517 18.2314 28.3517 18.4867V22.6302Z"
                fill="#6E4CF6"
                stroke="#6E4CF6"
                strokeWidth="0.308665"
                ></path>
            </svg>
            <p className="font-normal leading-body m-0 p-0 text-left text-white text-lg md:text-[32px]">
                Rate drop alert
            </p>
            </div>
            <h1 className="font-bold leading-[1.1] m-0 p-0 w-auto tracking-tight md:tracking-tighter z-1 text-center text-textInverseSecondary md:relative pt-12 lg:pt-16 lg:leading-[1.2] text-[50px] md:text-4xl lg:text-[118px] text-white">
    T         he rate drop you’ve been waiting&nbsp;for
            </h1>
            <div className="relative flex flex-col items-center justify-around md:flex-row">
            <div className="w-80 md:w-auto  lg:mt-20">
                <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-graphTertiary text-interactiveForegroundInversePrimary hover:bg-accentPrimary hover:text-interactiveForegroundPrimary h-16 px-12 py-5 mt-lg w-full md:mt-none md:w-fit bg-green-400"
                href="/start"
                >
                Start my approval
                </a>
                <div className="mt-3 flex items-center justify-center gap-1 text-sm text-accentSecondary text-white">
                <CiStopwatch size={20}/>
                <span className="mr-1">3 min</span>
                <span>| No credit impact</span>
                </div>
            </div>
            <div className="mt-5 md:mb-[-36px] md:relative top-[118px] md:top-[118px] text-center md:ml-20 w-[200px] group">
                <img
                className="w-[208px] h-[290px] group-hover:block hidden"
                src="https://via.placeholder.com/200"
                alt="Rate drop"
                />
            </div>
            <div className="flex flex-col items-center gap-2  lg:mt-20">
                <div className="flex justify-end items-end gap-1">
                    <FaGoogle className="text-black mr-1" size={28}/>
                    <FaStar size={25} className="text-yellow-400"/>
                    <FaStar size={25} className="text-yellow-400"/>
                    <FaStar size={25} className="text-yellow-400"/>
                    <FaStar size={25} className="text-yellow-400"/>
                    <FaStarHalfAlt size={25} className="text-yellow-400"/>
                </div>
                <div className="text-sm font-light">
                    <span className="mr-1 text-white">4.6 Stars</span>
                    <span className="text-white">| 3177 Google reviews</span>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="bg-white h-[100vh] flex justify-between items-center">
            <div className="w-[30%] flex flex-col">
                <div className="carousel h-[600px] mt-20 ml-16 rounded-2xl w-[80%]">
                    <div id="item1" className="carousel-item">
                        <img
                            src={img1} 
                        />
                    </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                    src={img2}
                    className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                    src={img3}
                    className="w-full" />
                </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="border border-gray-400 rounded-full px-3 py-2 font-semibold
                hover:border-green-700 hover:border-4 hover:text-green-700 transition-all ease-in-out duration-200">Arian</a>
                <a href="#item2" className="border border-gray-400 rounded-full px-3 py-2 font-semibold 
                hover:border-green-700 hover:border-4 hover:text-green-700 transition-all ease-in-out duration-200">Amanda</a>
                <a href="#item3" className="border border-gray-400 rounded-full px-3 py-2 font-semibold hover:border-green-700 hover:border-4 hover:text-green-700
                transition-all ease-in-out duration-200 ">Paul</a>
                </div>
            </div>
            {/* another side */}
            <div className="mt-20 mr-16">
                <h1 className=" text-8xl font-semibold text-green-950">Find out why <br /> we’re better.</h1>
                <button className="bg-green-900 px-10 py-4 rounded-full hover:bg-green-600 text-white font-semibold text-lg mt-5">See all stories</button>
                <div className="flex justify-start items-center mt-3">
                    <SiTrustpilot className="text-green-600" size={22}/>
                    <div className="flex items-end gap-4">
                        <span className="font-medium">Trustpilot</span>
                        <span className="font-light text-gray-500">Excellent</span>
                        <span className="font-medium text-gray-500">4.4 out of 5</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="h-[140vh] bg-white overflow-x-hidden">
            <div className="pt-28 flex w-screen gap-80 mb-20" >
                <h1 className="w-[60%] text-5xl text-gray-900 leading-snug font-semibold ml-8">Got questions?<br/> We've got answers</h1>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1.1" className="border border-gray-300 h-11 pt-2 pb-3 px-10 rounded-full font-semibold hover:border-green-600 hover:border-2 hover:text-green-600 transition-all ease-in-out duration-200">Our products</a>
                    <a href="#item2.1" className="border border-gray-300 h-11 pt-2 pb-3 px-10 rounded-full font-semibold hover:border-green-600 hover:border-2 hover:text-green-600 transition-all ease-in-out duration-200">Calculator</a>
                    <a href="#item3.1" className="border border-gray-300 h-11 pt-2 pb-3 px-10 rounded-full font-semibold hover:border-green-600 hover:border-2 hover:text-green-600 transition-all ease-in-out duration-200">Guides & FAQs</a>
                </div>
            </div>
            <div className="carousel w-screen ml-8">
                <div id="item1.1" className="carousel-item w-full gap-8 flex flex-col">
                    <div className="flex gap-8">
                        <SmallCard img={cardimg1} heading={"Buying your first with Better"}/>
                        <BigCard img={cardimg2} heading={"One Day Mortgage"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat?"}/>
                    </div>
                    <div className="flex gap-8 mr-32">
                        <BigCard2 img={cardimg3} heading={"Better HELOC"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat?"}/>
                        <SmallCard img={cardimg4} heading={"Insurance"}/>
                    </div>
                </div>
                <div id="item2.1" className="carousel-item w-full flex flex-col gap-8">
                <div className="flex gap-8">
                        <SmallCard img={cardimg5} heading={"Buying your first with Better"}/>
                        <BigCard img={cardimg6} heading={"One Day Mortgage"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat?"}/>
                    </div>
                    <div className="flex gap-8 mr-32">
                        <BigCard2 img={cardimg7} heading={"Better HELOC"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat?"}/>
                        <SmallCard img={cardimg8} heading={"Insurance"}/>
                    </div>
                </div>
                <div id="item3.1" className="carousel-item w-full flex flex-col gap-8">
                <div className="flex gap-8">
                        <SmallCard img={cardimg9} heading={"Buying your first with Better"}/>
                        <BigCard img={cardimg10} heading={"One Day Mortgage"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat?"}/>
                    </div>
                    <div className="flex gap-8 mr-32">
                        <BigCard2 img={cardimg11} heading={"Better HELOC"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quaerat?"}/>
                        <SmallCard img={cardimg12} heading={"Insurance"}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;