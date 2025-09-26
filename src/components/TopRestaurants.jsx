
"use client";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import restaurantData from '../data/restaurantChains.json';
import Card from './Card';
import{useState,useEffect} from 'react';
function TopRestaurants(){
    const[data,setData]=useState([]);
    const[slide,setSlide]=useState(0);

    const fetchTopRestaurant=()=>{
        setData(restaurantData);
    }

    useEffect(()=>{
        fetchTopRestaurant();
    },[])

    const nextSlide=()=>{
        const cardWidth = 305; // 273px + 32px gap
        const containerWidth = 1200;
        const totalCardsWidth = data.length * cardWidth;
        
        // Calculate how much we can still slide
        const currentPosition = slide * cardWidth;
        const remainingSpace = totalCardsWidth - currentPosition - containerWidth;
        
        // If there's still space to slide
        if(remainingSpace > 0){
            // If remaining space is less than a full card, move by a bit more than the remaining amount
            if(remainingSpace < cardWidth){
                setSlide(slide + (remainingSpace / cardWidth) + 0.4);
            } else {
                // Otherwise move by one full card
                setSlide(slide + 1);
            }
        }
    }

    const prevSlide=()=>{
        if(slide <=0){
            return false;
        }
        
        const cardWidth = 305; // 273px + 32px gap
        const containerWidth = 1200;
        const totalCardsWidth = data.length * cardWidth;
        
        // Calculate how much we can still slide back
        const currentPosition = slide * cardWidth;
        const remainingSpaceBack = currentPosition;
        
        // If we're near the beginning and there's not much space back, move by less
        if(remainingSpaceBack < cardWidth){
            setSlide(Math.max(0, slide - (remainingSpaceBack / cardWidth)));
        } else {
            // Otherwise move by one full card
            setSlide(slide-1);
        }
    }

    return(
        <div className="max-w-[1200px] mx-auto px-2">
        <div className="flex justify-between items-center my-5">
           <div className="text-xl font-bold">  
            Top restaurant chains in Jammu
           </div>

           <div className="flex items-center flex items-center ">
            <div onClick={prevSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowLeft /></div>
            <div onClick={nextSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowRight /></div>
           </div>
           </div>

           <div className="flex gap-8 overflow-hidden">
                {data.map((restaurant, index) => (
                    <div
                        key={index}
                        style={{
                            transform:`translateX(-${slide * (273 + 32)}px)`
                        }}
                        className="w-[273px] shrink-0"
                    >
                        <Card className="w-full md:w-[273px]" {...restaurant} />
                    </div>
                ))}
           </div>
           <hr className="my-6 border-[1px] border-[#e2e2e7]"/>
           </div>
)}

export default TopRestaurants;