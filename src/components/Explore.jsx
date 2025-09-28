function Explore(){
    
    const nearMe = [
        {
          id: 1,
          description: "Explore Restaurants Near Me"
        },
        {
          id: 2, 
          description: "Explore Top Rated Restaurants Near Me"
        }
      ];
    return (
        <div className="max-w-[1200px] mx-auto px-2 mb-[50px]">
        <div className="flex justify-between items-center my-5"></div>
        <div className="text-xl font-bold">Best Explore to Eat across nearMe</div>
        <div className="grid grid-cols-4 mt-8 ">
         {nearMe.map((restaurant)=>{
             return (
                 <span 
                     key={restaurant.id} 
                     className="border rounded-xl border-gray-300 mb-4 p-[16px] flex items-center justify-center w-[250px] cursor-pointer hover:shadow-md transition-shadow">
                     <div className={`text-center text-l tracking-tight flex items-center justify-center gap-1 text-gray-800}`}>
                         {restaurant.description}
                     </div>
                 </span>
             )
         })}
        </div>
        </div>
    )
}
export default Explore;