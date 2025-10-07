"use client";
import restaurantData from '../data/restaurantChains.json';
import Card from './Card';
import{useState,useEffect, useRef} from 'react';
function OnlineDelivery(){

    const[data,setData]=useState([]);

    const boxRef = useRef(null);
    const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;

      const rect = boxRef.current.getBoundingClientRect();

      // check if top of the element reaches top of screen (0px)
      setIsTop(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const fetchTopRestaurant=()=>{
        setData(restaurantData);
    }

    useEffect(()=>{
        fetchTopRestaurant();
    },[])

    return (
        <div ref={boxRef} className="max-w-[1200px] mx-auto px-2">
        <div className="flex flex-col justify-between my-5">
           <div className="text-xl font-bold">  
           Restaurants with online food delivery in Jammu
           </div>

            <div className={`${isTop ?"fixed top-0 z-[99999] bg-white w-full left-0 pl-30 ": "" }`}>
            <div className="max-w-[1200px] mx-auto flex gap-3 mt-6 mb-8">
                <div className="p-3 rounded-md shadow">Filter</div>
                <div className="p-3 rounded-md shadow">Sort by</div>
                <div className="p-3 rounded-md shadow">Fast Delivery</div>
                <div className="p-3 rounded-md shadow">New on Swiggy</div>
                <div className="p-3 rounded-md shadow">Rating 4.0+</div>
                <div className="p-3 rounded-md shadow">Pure Veg</div>
                <div className="p-3 rounded-md shadow">Offers</div>
                <div className="p-3 rounded-md shadow">Rs.300-Rs.600</div>
                <div className="p-3 rounded-md shadow">Less than Rs.300</div>
            </div>
            </div>


           <div className="md:grid grid-cols-4 gap-3">
           {data.map((restaurant, index) => (
                    <div key={index}>
                        <Card {...restaurant} />
                    </div>
                ))}
           </div>
           </div>
           <hr className="my-6 border-[1px] border-[#e2e2e7]"/>
           </div>
    )
}
export default OnlineDelivery;