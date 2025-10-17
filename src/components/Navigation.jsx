import Link from "next/link"
import { usePathname } from 'next/navigation';

function Navigation({onSignInClick}){
    const pathName=usePathname();
    const isCorporate=pathName.startsWith('/swiggy-corporate');

    if(isCorporate){
        return(
            <>
            <Link href="/swiggy-corporate" className="mr-4 text-blue-500">About Swiggy</Link>
            <Link href="/swiggy-corporate/solutions" className="mr-4 text-blue-500">Our Businesses</Link>
            <Link href="/swiggy-corporate/pricing" className="mr-4 text-blue-500">Delivering For Everyone</Link>
            <Link href="/swiggy-corporate/contact" className="mr-4 text-blue-500">Newsroom</Link>
            <Link href="/swiggy-corporate/contact" className="mr-4 text-blue-500">Investor Relations</Link>
            <Link href="/swiggy-corporate/contact" className="mr-4 text-blue-500">Sustainability</Link>
            <Link href="/swiggy-corporate/contact" className="mr-4 text-blue-500">Contact Us</Link>
            </>
        )
    }
    return (

        <>
        <Link href="/swiggy-corporate" className="mr-4 text-blue-500">Swiggy Corporate</Link>

        <Link href="/search" className="mr-4 text-blue-500">Search</Link>

        <Link href="/offers" className="mr-4 text-blue-500">Offers</Link>

        <Link href="/help" className="mr-4 text-blue-500">Help</Link>

        <button type="button" onClick={onSignInClick} className="mr-4 text-blue-500 hover:underline">Sign In</button>

        <Link href="/cart" className="mr-4 text-blue-500">Cart</Link>
        </>
    )
}

export default Navigation;