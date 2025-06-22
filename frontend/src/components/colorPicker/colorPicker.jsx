// import React, { useState } from 'react';

function ColorPicker({color, setColor}){

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className='color-picker-container'>
            {/* <lable>Select a Color</lable> */}
            <input type="color"value={color} onChange={handleColorChange} />
            
        </div>
    )
}
export default ColorPicker