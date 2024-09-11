import React, { useState } from 'react';
import { X } from 'lucide-react';

const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const Partition = ({ onSplit, onRemove, color, depth }) => {
  const [splitDirection, setSplitDirection] = useState(null);
  const [splitRatio, setSplitRatio] = useState(0.5);

  const handleSplit = (direction) => {
    setSplitDirection(direction);
    onSplit(direction);
  };

  const handleResize = (e) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();
    const { clientX, clientY } = e;
    
    let newRatio;
    if (splitDirection === 'vertical') {
      newRatio = (clientX - left) / width;
    } else {
      newRatio = (clientY - top) / height;
    }

    // Snap to quarters
    newRatio = Math.round(newRatio * 4) / 4;
    setSplitRatio(newRatio);
  };

  if (splitDirection) {
    return (
      <div 
        className="relative flex" 
        style={{ flexDirection: splitDirection === 'vertical' ? 'row' : 'column' }}
      >
        <div style={{ flex: splitRatio }}>
          <Partition onSplit={onSplit} onRemove={onRemove} color={color} depth={depth + 1} />
        </div>
        <div 
          className="absolute cursor-col-resize" 
          style={{
            [splitDirection === 'vertical' ? 'left' : 'top']: `${splitRatio * 100}%`,
            [splitDirection === 'vertical' ? 'width' : 'height']: '4px',
            [splitDirection === 'vertical' ? 'height' : 'width']: '100%',
            backgroundColor: 'black',
          }}
          onMouseDown={() => {
            const handleMouseMove = (e) => handleResize(e);
            const handleMouseUp = () => {
              document.removeEventListener('mousemove', handleMouseMove);
              document.removeEventListener('mouseup', handleMouseUp);
            };
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }}
        />
        <div style={{ flex: 1 - splitRatio }}>
          <Partition onSplit={onSplit} onRemove={onRemove} color={getRandomColor()} depth={depth + 1} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-4" style={{ backgroundColor: color, minHeight: '100px' }}>
      {depth > 0 && (
        <button 
          className="absolute top-1 right-1 p-1 bg-white rounded"
          onClick={onRemove}
        >
          <X size={16} />
        </button>
      )}
      <div className="flex justify-center space-x-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => handleSplit('vertical')}>V</button>
        <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleSplit('horizontal')}>H</button>
      </div>
    </div>
  );
};

const RecursivePartitioningLayout = () => {
  const [rootColor] = useState(getRandomColor());

  return (
    <div className="w-full h-screen">
      <Partition color={rootColor} onSplit={() => {}} onRemove={() => {}} depth={0} />
    </div>
  );
};

export default RecursivePartitioningLayout;