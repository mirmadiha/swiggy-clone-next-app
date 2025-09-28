"use client"
import { GoChevronDown} from "react-icons/go";
import { useState } from "react";

function BestCuisines(){
    const [showAll, setShowAll] = useState(false);
    
    const cuisines = [
        {
          id: 1,
          cuisineName: "Chinese",
          description: "Chinese Restaurant Near Me"
        },
        {
          id: 2,
          cuisineName: "South Indian", 
          description: "South Indian Restaurant Near Me"
        },
        {
          id: 3,
          cuisineName: "Indian",
          description: "Indian Restaurant Near Me"
        },
        {
          id: 4,
          cuisineName: "Kerala",
          description: "Kerala Restaurant Near Me"
        },
        {
          id: 5,
          cuisineName: "Korean",
          description: "Korean Restaurant Near Me"
        },
        {
          id: 6,
          cuisineName: "North Indian",
          description: "North Indian Restaurant Near Me"
        },
        {
          id: 7,
          cuisineName: "Sea Food",
          description: "Sea Food Restaurant Near Me"
        },
        {
          id: 8,
          cuisineName: "Bengali",
          description: "Bengali Restaurant Near Me"
        },
        {
          id: 9,
          cuisineName: "Punjabi",
          description: "Punjabi Restaurant Near Me"
        },
        {
          id: 10,
          cuisineName: "Italian",
          description: "Italian Restaurant Near Me"
        },
        {
          id: 11,
          cuisineName: "Andhra",
          description: "Andhra Restaurant Near Me"
        },
        {
          id: 12,
          cuisineName: "More",
          description: "Show More"
        },
        {
          id: 13,
          cuisineName: "Biryani",
          description: "Biryani Restaurant Near Me"
        },
        {
          id: 14,
          cuisineName: "Japanese",
          description: "Japanese Restaurant Near Me"
        },
        {
          id: 15,
          cuisineName: "Arabian",
          description: "Arabian Restaurant Near Me"
        },
        {
          id: 16,
          cuisineName: "Fast Food",
          description: "Fast Food Restaurant Near Me"
        },
        {
          id: 17,
          cuisineName: "Jain",
          description: "Jain Restaurant Near Me"
        },
        {
          id: 18,
          cuisineName: "Gujarati",
          description: "Gujarati Restaurant Near Me"
        },
        {
          id: 19,
          cuisineName: "Thai",
          description: "Thai Restaurant Near Me"
        },
        {
          id: 20,
          cuisineName: "Pizzas",
          description: "Pizza Restaurant Near Me"
        },
        {
          id: 21,
          cuisineName: "Asian",
          description: "Asian Restaurant Near Me"
        },
        {
          id: 22,
          cuisineName: "Cafe",
          description: "Cafe Near Me"
        },
        {
          id: 23,
          cuisineName: "Continental",
          description: "Continental Restaurant Near Me"
        },
        {
          id: 24,
          cuisineName: "Mexican",
          description: "Mexican Restaurant Near Me"
        },
        {
          id: 25,
          cuisineName: "Mughlai",
          description: "Mughlai Restaurant Near Me"
        },
        {
          id: 26,
          cuisineName: "Sindhi",
          description: "Sindhi Restaurant Near Me"
        },
        {
          id: 27,
          cuisineName: "Mangalorian",
          description: "Mangalorian Restaurant Near Me"
        },
        {
          id: 28,
          cuisineName: "Tibetan",
          description: "Tibetan Restaurant Near Me"
        },
        {
          id: 29,
          cuisineName: "Barbecue",
          description: "Barbecue Restaurant Near Me"
        },
        {
          id: 30,
          cuisineName: "Maharashtrian",
          description: "Maharashtrian Restaurant Near Me"
        },
        {
          id: 31,
          cuisineName: "Nepalese",
          description: "Nepalese Restaurant Near Me"
        },
        {
          id: 32,
          cuisineName: "Rajasthani",
          description: "Rajasthani Restaurant Near Me"
        },
        {
          id: 33,
          cuisineName: "Turkish",
          description: "Turkish Restaurant Near Me"
        }
      ];
      
      const visiblecuisines = showAll ? cuisines.filter(cuisine => cuisine.cuisineName !== "More") : cuisines.slice(0, 12);
      const hasMorecuisines = cuisines.length > 12;
    return (
        <div className="max-w-[1200px] mx-auto px-2 mb-[50px]">
        <div className="flex justify-between items-center my-5"></div>
        <div className="text-xl font-bold">Best Cuisines Near Me</div>
        <div className="grid grid-cols-4 mt-8 ">
         {visiblecuisines.map((cuisine)=>{
             return (
                 <span 
                     key={cuisine.id} 
                     className="border rounded-xl border-gray-300 mb-4 p-[16px] flex items-center justify-center w-[250px] cursor-pointer hover:shadow-md transition-shadow"
                     onClick={() => cuisine.cuisineName === "More" && setShowAll(!showAll)}
                 >
                     <div className={`text-center text-l tracking-tight flex items-center justify-center gap-1 ${cuisine.cuisineName === "More" ? "text-[#ef4444]" : "text-gray-800"}`}>
                         {cuisine.description}
                         {cuisine.cuisineName === "More" && (
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
export default BestCuisines;