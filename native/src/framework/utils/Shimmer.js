import React, { useState, useEffect } from 'react';

import { View } from 'framework/surface';

const MainShimmer = ({ className }) => {
  const [color, setColor] = useState(true);
  const toggleColor = () => setColor(!color);

  useEffect(() => {
    const timeoutId = setTimeout(toggleColor, 1500);

    return () => {
      clearInterval(timeoutId);
    };
  }, [color]);

  return (
    <View className={`rounded h-6 m-1 ${className} flex-row`}>
      <View
        springConfig={{ config: { friction: 0, clamp: true } }}
        animated={['width', 'backgroundColor']}
        className={`rounded ${color ? 'bg-gray-100' : 'bg-gray-200'}`}
        style={{ width: color ? '0%' : '100%' }} />
      <View
        springConfig={{ config: { friction: 0, clamp: true } }}
        animated={['width', 'backgroundColor']}
        className={`rounded ${color ? 'bg-gray-200' : 'bg-gray-100'}`}
        style={{ width: color ? '100%' : '0%' }} />
    </View>
  );
};

export const Shimmer = ({ active = true, className = '', children }) => active ?
  <MainShimmer className={className} /> : children;
