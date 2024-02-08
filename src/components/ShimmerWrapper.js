import React from 'react'
import { Shimmer } from 'react-shimmer'

const ShimmerWrapper = ({ width, height}) => {
    const shimmerStyle = {
        width: width,
        height: height,
        background: 'linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)',
        backgroundSize: '200% 100%',
        backgroundPosition: 'right', // Set the background position to the right
        animation: 'shimmerAnimation 1.5s infinite linear',
      };
    
      return (
        <div style={shimmerStyle}></div>
      );
}

export default ShimmerWrapper
