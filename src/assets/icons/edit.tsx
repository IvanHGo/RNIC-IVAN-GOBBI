import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const EditIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="white"
    color="black"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <Path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Svg>
);

export default EditIcon;
