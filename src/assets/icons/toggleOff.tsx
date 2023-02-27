import * as React from 'react';
import Svg, {SvgProps, Rect, Circle} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

const ToggleOff = (props: SvgProps) => {
  const theme = useTheme();

  return (
    <Svg
      width={24}
      height={24}
      fill={theme.colors.white}
      color={theme.colors.black}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
      <Circle cx={8} cy={12} r={3} />
    </Svg>
  );
};

export default ToggleOff;
