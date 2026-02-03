import PropTypes from "prop-types";
import React from "react";

function BlubBlur({position,size}) {
    const {top,left} = position;
    const{height,width} = size; 
  return (
    <>
      <div
        className="absolute "
        style={{
          top: top,
          left: left,
          width: width,
          height: height,
          transform: `translate(-50%,-50%)`,
        }}
      >
       <div className="w-full h-full bg-[#00ffff] rounded-full opacity-5 blur-3xl animated-blob">

       </div>


      </div>
    </>
  );
}
BlubBlur.prototype ={
    position : PropTypes.shape({
        top : PropTypes.string,
        left : PropTypes.string,
    }),
    size : PropTypes.shape({
        height : PropTypes.string,
        width : PropTypes.size
    })
}

export default BlubBlur;
