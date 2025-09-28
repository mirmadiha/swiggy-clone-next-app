"use client"
import { GoChevronDown} from "react-icons/go";
import { useState } from "react";

function Places(){
    const [showAll, setShowAll] = useState(false);
    
    const cities = [
        {
          id: 1,
          cityName: "Delhi",
          description: "Best Places to Eat in Delhi"
        },
        {
          id: 2,
          cityName: "Mumbai", 
          description: "Best Places to Eat in Mumbai"
        },
        {
          id: 3,
          cityName: "Bangalore",
          description: "Best Places to Eat in Bangalore"
        },
        {
          id: 4,
          cityName: "Hyderabad",
          description: "Best Places to Eat in Hyderabad"
        },
        {
          id: 5,
          cityName: "Chennai",
          description: "Best Places to Eat in Chennai"
        },
        {
          id: 6,
          cityName: "Kolkata",
          description: "Best Places to Eat in Kolkata"
        },
        {
          id: 7,
          cityName: "Pune",
          description: "Best Places to Eat in Pune"
        },
        {
          id: 8,
          cityName: "Ahmedabad",
          description: "Best Places to Eat in Ahmedabad"
        },
        {
          id: 9,
          cityName: "Jaipur",
          description: "Best Places to Eat in Jaipur"
        },
        {
          id: 10,
          cityName: "Lucknow",
          description: "Best Places to Eat in Lucknow"
        },
        {
          id: 11,
          cityName: "Goa",
          description: "Best Places to Eat in Goa"
        },

        {
          id: 12,
          cityName: "More",
          description: "Show More"
        },
        {
          id: 13,
          cityName: "Kochi",
          description: "Best Places to Eat in Kochi"
        },
        {
          id: 14,
          cityName: "Indore",
          description: "Best Places to Eat in Indore"
        },
        {
          id: 15,
          cityName: "Bhopal",
          description: "Best Places to Eat in Bhopal"
        },
        {
          id: 16,
          cityName: "Visakhapatnam",
          description: "Best Places to Eat in Visakhapatnam"
        },
        {
          id: 17,
          cityName: "Chandigarh",
          description: "Best Places to Eat in Chandigarh"
        },
        {
          id: 18,
          cityName: "Mysore",
          description: "Best Places to Eat in Mysore"
        },
        {
          id: 19,
          cityName: "Nagpur",
          description: "Best Places to Eat in Nagpur"
        },
        {
          id: 20,
          cityName: "Vadodara",
          description: "Best Places to Eat in Vadodara"
        },
        {
          id: 21,
          cityName: "Surat",
          description: "Best Places to Eat in Surat"
        },
        {
          id: 22,
          cityName: "Kanpur",
          description: "Best Places to Eat in Kanpur"
        },
        {
          id: 23,
          cityName: "Thiruvananthapuram",
          description: "Best Places to Eat in Thiruvananthapuram"
        },
        {
          id: 24,
          cityName: "Coimbatore",
          description: "Best Places to Eat in Coimbatore"
        },
        {
          id: 25,
          cityName: "Madurai",
          description: "Best Places to Eat in Madurai"
        },
        {
          id: 26,
          cityName: "Tiruchirappalli",
          description: "Best Places to Eat in Tiruchirappalli"
        },
        {
          id: 27,
          cityName: "Salem",
          description: "Best Places to Eat in Salem"
        },
        {
          id: 28,
          cityName: "Tirunelveli",
          description: "Best Places to Eat in Tirunelveli"
        },
        {
          id: 29,
          cityName: "Erode",
          description: "Best Places to Eat in Erode"
        },
        {
          id: 30,
          cityName: "Vellore",
          description: "Best Places to Eat in Vellore"
        },
        {
          id: 31,
          cityName: "Tiruppur",
          description: "Best Places to Eat in Tiruppur"
        },
        {
          id: 32,
          cityName: "Hosur",
          description: "Best Places to Eat in Hosur"
        },
        {
          id: 33,
          cityName: "Nagercoil",
          description: "Best Places to Eat in Nagercoil"
        }
      ];
      
      const visibleCities = showAll ? cities.filter(city => city.cityName !== "More") : cities.slice(0, 12);
      const hasMoreCities = cities.length > 12;
    return (
        <div className="max-w-[1200px] mx-auto px-2 mb-[50px]">
        <div className="flex justify-between items-center my-5"></div>
        <div className="text-xl font-bold">Best Places to Eat across Cities</div>
        <div className="grid grid-cols-4 mt-8 ">
         {visibleCities.map((city)=>{
             return (
                 <span 
                     key={city.id} 
                     className="border rounded-xl border-gray-300 mb-4 p-[16px] flex items-center justify-center w-[250px] cursor-pointer hover:shadow-md transition-shadow"
                     onClick={() => city.cityName === "More" && setShowAll(!showAll)}
                 >
                     <div className={`text-center text-l tracking-tight flex items-center justify-center gap-1 ${city.cityName === "More" ? "text-[#ef4444]" : "text-gray-800"}`}>
                         {city.description}
                         {city.cityName === "More" && (
                             <GoChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
                         )}
                     </div>
                 </span>
             )
         })}
        </div>
        </div>
    )
}
export default Places;