import Image from "next/image"; 
export default function Banner(){
    return (
        <div className="max-w-[1200px] mx-auto px-2 mb-[50px]">
            <div className="w-full h-screen">

                <img src="/banner.png" alt="banner image"/>
            <Image
            src="/banner.png"    
            alt="banner image"
            width={500}
            height={1000}
            priority
            />
            </div>
        </div>
    )
}