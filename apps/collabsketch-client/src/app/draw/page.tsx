"use client"
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { drawShape } from '../utils/drawshape';
import useSocket from '../hooks/useSocket';

const page = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [shape, setShape] = useState<string>("arc");
    const {loading, socket} = useSocket();
   

    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current;
            drawShape(canvas, shape);
        }
    },[canvasRef, shape]);

  return (
    <div>
         {/* <div className='p-4 flex gap-2'>
           <button onClick={()=>setShape("rect")} className='px-2 py-1 bg-gray-500 rounded'>Rect</button>
           <button onClick={()=>setShape("arc")} className='px-2 py-1 bg-gray-500 rounded'>Arc</button>
           <button onClick={()=>setShape("line")} className='px-2 py-1 bg-gray-500 rounded'>Line</button>
         </div> */}
        <canvas
          ref={canvasRef}
          height={580}
          width={1180}
          className='rgba(0, 0, 0)'
        />
    </div>
  )
}

export default page