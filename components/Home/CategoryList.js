import React, { useState } from "react";
import Data from "./../../shared/Data";
import Image from "next/image";
import { Dropdown } from 'flowbite-react';

function CategoryList({ onCategoryChange }) {
    let data='RestaurantData'
    const [DataList, setDataList] = useState(Data.AllData.ServiciosEducativos);
    const [selectedCategory, setSelectedCategory] = useState();

  const Search=(buscar)=>{
    if(buscar=='Restaurant'){
        setDataList(Data.AllData.RestaurantDatas)
    }
    if(buscar=='ServicionEducativos'){
        setDataList(Data.AllData.ServiciosEducativos)
    }
 
  }
 
  return (
    <div className="text-center">
        <Dropdown label="Buscar..." className="z-10" placement="right-start">
          
            <Dropdown.Item onClick={() => Search('Restaurant')}>Restaurantes</Dropdown.Item>
            <Dropdown.Item onClick={() => Search('ServicionEducativos')}>Servicios Educativos</Dropdown.Item>
            <Dropdown.Item onClick={() => alert('Earnings!')}>Intituciones Publicas</Dropdown.Item>
        </Dropdown>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 justify-center content-center items-center" >
        {DataList.map((item, index) => (
          <div key={index} className={`flex flex-col  justify-center items-center  bg-gray-100 hover:bg-bluexd hover:text-white p-2 m-2 rounded-lg grayscale  hover:grayscale-0 cursor-pointer text-[13px]  border-bluexd ${selectedCategory == index ? "grayscale-0 border-[2px] bg-bluexd  hover:bg-[#0e7490]  text-white text-base " : null}`} onClick={() => { setSelectedCategory(index); onCategoryChange(item.value); }} >
           
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
            
          </div>
        ))}
      </div>
    
        
    </div>

  );
}

export default CategoryList;
