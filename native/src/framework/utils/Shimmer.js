import React, { useState, useEffect } from 'react';

import { View } from 'framework/surface';
import { Text } from 'framework/text';

const MainShimmer = ({ className }) => {
  const [color, setColor] = useState(true);
  const toggleColor = () => setColor(!color);

  useEffect(() => {
    const timeoutId = setTimeout(toggleColor, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [color]);

  return (
    <View
      springConfig={{ duration: 500 }}
      animated={['backgroundColor']}
      className={`h-6 rounded m-1 ${className} ${color ? 'bg-gray-200' : 'bg-gray-100'}`}
    >
      <Text />
    </View>
  );
};

export const Shimmer = ({ active = true, className = '', children }) => active ?
  <MainShimmer className={className} /> : children;
