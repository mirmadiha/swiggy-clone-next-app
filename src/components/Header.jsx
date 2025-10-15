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
    const showSignIn = useCallback(() => setToggleSignIn(true), []);
    const hideSignIn = useCallback(() => {
        setToggleSignIn(false); 
        setPhone("");
        setError("");},  []);
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const showSideMenu = useCallback(() => setToggle(true), []);
    const hideSideMenu = useCallback(() => setToggle(false), []);

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

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only digits, max 10
        if (/^\d{0,10}$/.test(value)) {
          setPhone(value);
        }
        if(error){
            setError("");
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (phone.length !== 10) {
          setError("Phone number must be 10 digits");
          return;
        }
      };


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
                <div className="flex justify-between mb-8">
                <div className="flex flex-col">
                <p className="mb-2 text-2xl font-semibold">Login</p>
                <p className="mb-4 text-md ">or <span className="text-[#ff5200]">create an account</span></p>
                <hr className="w-10 border-t-2 "/>
                </div>
                <img src="/images/Image-login.png" alt="Login illustration" className="h-[100px] w-[105px]"/>
                </div>
                <div className="space-y-3">
                <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full h-[48px] border border-gray-300 px-3 focus:outline-none"
                />
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <button
                    type="submit"
                    className="w-full h-[48px] bg-[#ff5200] text-white rounded hover:shadow-lg"
                >
                    Login
                </button>
                <p className="text-[12px]">By clicking on Login, I accept the <Link className="font-semibold" href={"/privacy"} >Terms & Conditions</Link> & <Link className="font-semibold" href={"/terms"}> Privacy Policy </Link></p>
                </form>
                </div>
            </div>
        </SidePanel>




        <header className="p-[15px] shadow-xl sticky top-0 bg-white z-[9999]">
            <div className='mx-30 flex items-center'>
                <Link href="/" className='w-[60px] block'>
                    <img src="/logo.png" alt="logo" className="w-full cursor-pointer" />
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