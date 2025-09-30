function Footer(){
    return (
    <footer className="w-full h-full bg-[#f0f0f5]">
    <div className="max-w-[1200px] mx-auto px-2 pb-[50px] bg-[#f0f0f5] py-8">

        <div className="flex col justify-between items-center mb-20">
            <div className="text-xl font-bold mr-50">For better experience,download the Swiggy app now</div>
            <div className="flex col gap-10 items-center">
            <img className="w-[200px] h-[64px]" src="/images/play_store.avif" alt="Google"/>
            <img className="w-[200px] h-[64px]" src="/images/app_store.avif" alt="Apple"/>
            </div>
        </div>

        <div className="flex col justify-between">
            <div className="flex flex-col justify-center">
                <img src="/images/swiggy_logo_2.png" alt="logo" className="w-[160px] h-[49px] mb-4"/>
                <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            </div>


            <div>
            <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            </div>

            <div>
            <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            </div>

            <div>
            <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            <div className="text-sm text-gray-500">© 2025 Swiggy Limited</div>
            </div>
        </div>
    </div>
    </footer>
    )
}

export default Footer;