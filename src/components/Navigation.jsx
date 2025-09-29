import Link from "next/link"
function Navigation({onSignInClick}){
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