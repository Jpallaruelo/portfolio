import React, { useState } from 'react';

const Block = ({ x, y, width, height, isBroken }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: width,
                height: height,
                backgroundColor: isBroken ? 'transparent' : '#0095DD',
                border: '1px solid #fff',
            }}
        />
    );
};

const BlocksContainer = ({ blocks }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {blocks.map((block, index) => (
                <Block key={index} {...block} />
            ))}
        </div>
    );
};

export default BlocksContainer;
