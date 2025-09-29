"use client";
import Link from "next/link";
import { GoChevronDown, GoBriefcase,GoSearch,GoX } from "react-icons/go";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline ,IoPersonOutline} from "react-icons/io5";
import { CiShoppingCart , CiGps} from "react-icons/ci";
import {useCallback, useState} from "react";
import Navigation from "./Navigation"
import SidePanel from "./SidePanel";
function Header(){
    const[toggle,setToggle]=useState(false);
    const[toggleSignIn,setToggleSignIn]=useState(false);

    const showSideMenu = useCallback(() => setToggle(true), []);
    const hideSideMenu = useCallback(() => setToggle(false), []);
    const showSignIn = useCallback(() => setToggleSignIn(true), []);
    const hideSignIn = useCallback(() => setToggleSignIn(false), []);

    const links=[
        {
            icon:<GoBriefcase />,
            name:"Swiggy Corporate"
        },

        {
            icon:<GoSearch/>,
            name:"Search"
        },

        {
            icon:<BiSolidOffer />,
            name:"Offers",
            superScript:"NEW"
        },

        {
            icon:<IoHelpBuoyOutline />,
            name:"Help"
        },

        {
            icon:<IoPersonOutline />,
            name:"Sign In"
        },

        {
            icon:<CiShoppingCart />,
            name:"Cart"
        },
    ]

    return (
        <>
        <SidePanel isOpen={toggle} onClose={hideSideMenu}>
            <div className="pt-8 ">
                <div className="mb-[30px]"><GoX onClick={hideSideMenu} className="text-2xl cursor-pointer"/></div>
                <div className="border border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.25)] h-[50px] mb-[20px] flex items-center">
                    <input className="pl-[20px] pr-[72px] w-full focus:outline-none" placeholder="Search for area, street name..." ></input>
                </div>
            </div>

            <button className="border border-gray-300 h-[85px] mt-8 w-full flex items-center justify-center flex-col">
                <div className="pl-[20px] pr-[72px] w-full flex flex-col" >
                <div className="flex items-center w-full gap-2 cursor-pointer">
                <CiGps className="text-xl "/>
                <div className="hover:text-[#ef4444]">Get current location</div>
                </div>
                <div className="flex items-center pl-6 text-gray-400 text-xs">
                    using GPS
                </div>
                </div>

            </button>
        </SidePanel>

        <SidePanel isOpen={toggleSignIn} onClose={hideSignIn} position="right">
            <div className="pt-8 ">
                <div className="mb-[30px]"><GoX onClick={hideSignIn} className="text-2xl cursor-pointer"/></div>
                <div className="mb-6 text-xl font-semibold">Sign in to continue</div>
                <div className="space-y-3">
                    <input type="email" placeholder="Email" className="w-full h-[48px] border border-gray-300 rounded px-3 focus:outline-none" />
                    <input type="password" placeholder="Password" className="w-full h-[48px] border border-gray-300 rounded px-3 focus:outline-none" />
                    <button className="w-full h-[48px] bg-[#ef4444] text-white rounded hover:opacity-90">Sign In</button>
                </div>
            </div>
        </SidePanel>

        


        <div 
            className="black-overlay w-full h-full fixed cursor-pointer px-2" 
            style={{
                opacity:toggle?1:0,
                visibility:toggle?"visible":"hidden",
                zIndex:9999999999999
            }} 
            onClick={hideSideMenu}
        >
            <div className={` h-full w-2/5 bg-white shadow-lg pl-30 pr-[40px] absolute transform transition-transform duration-500 ease-in-out
                ${toggle ? "translate-x-0" : "-translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
                <div className="pt-8 ">
                    <div className="mb-[30px]"><GoX onClick={hideSideMenu} className="text-2xl cursor-pointer"/></div>
                    <div className="border border-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.25)] h-[50px] mb-[20px] flex items-center">
                        <input className="pl-[20px] pr-[72px] w-full focus:outline-none" placeholder="Search for area, street name..." ></input>
                    </div>
                </div>

                <button className="border border-gray-300 h-[85px] mt-8 w-full flex items-center justify-center flex-col">
                    <div className="pl-[20px] pr-[72px] w-full flex flex-col" >
                    <div className="flex items-center w-full gap-2 cursor-pointer">
                    <CiGps className="text-xl "/>
                    <div className="hover:text-[#ef4444]">Get current location</div>
                    </div>
                    <div className="flex items-center pl-6 text-gray-400 text-xs">
                        using GPS
                    </div>
                    </div>

                </button>
            </div>
        </div>




        <header className="p-[15px] shadow-xl sticky top-0 bg-white z-[9999]">
            <div className='mx-30 flex items-center'>
                <Link href="/" className='w-[60px] block'>
                    <img src="/images/logo.png" alt="logo" className="w-full cursor-pointer" />
                </Link>
                <div className="flex items-center ml-10 cursor-pointer" onClick={showSideMenu}>
                    <div className="text-xl font-medium border-b-2 text-black hover:text-[#ef4444] cursor-pointer transition-colors duration-200"> other </div>
                    <span className="ml-2 text-[#ff5200] text-xl"> <GoChevronDown /> </span>
                </div>

                <nav className=" md:ml-60 flex items-center place-content-between w-full">
                    <Navigation onSignInClick={showSignIn}/>
                </nav>
            </div>

        </header>
        </>
    )
}

export default Header;