import React from 'react'
import { Shimmer } from 'react-shimmer'
const ShimmerWrapper = ({ width, height, children }) => {
    return (
        <div>
            <div style={{ position: 'relative', width, height }}>
                <Shimmer
                    width={width}
                    height={height}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
                <div style={{ visibility: 'hidden', width, height }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ShimmerWrapper
