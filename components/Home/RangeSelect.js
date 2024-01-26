import React, { useState } from 'react'

function RangeSelect({onRadiusChange}) {
    const [radius,setRadius]=useState(2500);
    
  return (
    <div className='mt-5 px-2 flex flex-col gap-2 justify-center items-center'>
        <h2
        className='font-bold '
        >Seleccionar radio de distancia (En metros)</h2>
        <input type='range'
        className='w-2/4 h-2 bg-gray-200
        rounded-lg appearance-auto
        cursor-pointer '
        min="500"
        max="3000"
        step="500"
        onChange={(e)=>{setRadius(e.target.value);onRadiusChange(e.target.value)}}
        defaultValue={radius}
        />
        <label className='text-gray-500
        text-[15px]'>{radius} Metros</label>
    </div>
  )
}

export default RangeSelect