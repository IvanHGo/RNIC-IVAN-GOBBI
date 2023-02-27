import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

const TrashcanIcon = (props: SvgProps) => {
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
      <Path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
    </Svg>
  );
};

export default TrashcanIcon;
