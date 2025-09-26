"use client";
import React, { useState, useEffect } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import categoryData from '../data/category.json';

function Category(){
    const[slide,setSlide]=useState(0);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setCategory(categoryData);
    }, []);

    const nextSlide=()=>{
        if(slide >= category.length - 8){
            return false;
        }
        setSlide(slide+3);
    }

    const prevSlide=()=>{
        if(slide <=0){
            return false;
        }
        setSlide(slide-3);
    }

    return(
        <div className="max-w-[1200px] mx-auto mt-6 px-2">
        <div className="flex justify-between items-center">
           <div className="text-xl font-bold">  
            What's on your mind?
           </div>

           <div className="flex items-center flex items-center ">
            <div onClick={prevSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowLeft /></div>
            <div onClick={nextSlide} className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"><GoArrowRight /></div>
           </div>
           </div>


           <div className="flex overflow-hidden">
           {category.map((cat, index) => {
                return (
                    <div style={{
                        transform:`translateX(-${slide*100}%)`
                    }} key={index} className="w-[158px] shrink-0"> 
                        <img src={`/images/${cat.image}`}  
                        alt={cat.path}
                        />
                    </div>
                )
           })}
           </div>
           <hr className="my-6 border-[1px] border-[#e2e2e7]"/>
        </div>
    )
};

export default Category;