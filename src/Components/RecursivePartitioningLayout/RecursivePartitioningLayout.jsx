import React, { useState, useCallback } from 'react';
import { X } from 'lucide-react';

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Partition = ({ onSplit, onRemove, color, depth, isRoot }) => {
  const [splitDirection, setSplitDirection] = useState(null);
  const [splitRatio, setSplitRatio] = useState(0.5);
  const [children, setChildren] = useState([]);

  const handleSplit = useCallback((direction) => {
    setSplitDirection(direction);
    setChildren([
      { key: Date.now(), color },
      { key: Date.now() + 1, color: getRandomColor() }
    ]);
    onSplit();
  }, [color, onSplit]);

  const handleResize = useCallback((e) => {
    const container = e.currentTarget.parentElement;
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
  }, [splitDirection]);

  const handleRemoveChild = useCallback((index) => {
    setChildren(prevChildren => prevChildren.filter((_, i) => i !== index));
    if (children.length <= 2) {
      setSplitDirection(null);
    }
  }, [children.length]);

  if (splitDirection) {
    return (
      <div
        className="relative flex w-full h-full"
        style={{
          flexDirection: splitDirection === 'vertical' ? 'row' : 'column',
          overflow: 'hidden',
        }}
      >
        {children.map((child, index) => (
          <div key={child.key} style={{ flex: index === 0 ? splitRatio : 1 - splitRatio, position: 'relative' }}>
            <Partition
              onSplit={onSplit}
              onRemove={() => handleRemoveChild(index)}
              color={child.color}
              depth={depth + 1}
              isRoot={false}
            />
          </div>
        ))}
        <div
          className={`absolute ${splitDirection === 'vertical' ? 'cursor-col-resize' : 'cursor-row-resize'}`}
          style={{
            [splitDirection === 'vertical' ? 'left' : 'top']: `calc(${splitRatio * 100}% - 2px)`,
            [splitDirection === 'vertical' ? 'width' : 'height']: '4px',
            [splitDirection === 'vertical' ? 'height' : 'width']: '100%',
            backgroundColor: 'black',
            zIndex: 10,
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
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full p-4 flex flex-col justify-center items-center"
      style={{ backgroundColor: color, minHeight: '100px', overflow: 'hidden' }}
    >
      {!isRoot && (
        <button
          className="absolute top-1 right-1 p-1 bg-white rounded z-10"
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
    <div className="w-full h-full">
      <Partition
        color={rootColor}
        onSplit={() => {}}
        onRemove={() => {}}
        depth={0}
        isRoot={true}
      />
    </div>
  );
};

export default RecursivePartitioningLayout;