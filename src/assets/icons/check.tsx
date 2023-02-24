import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CheckComponent = (props: SvgProps) => (
  <Svg width={50} height={50} viewBox="0 0 46.124 46.125" {...props}>
    <Path d="M37.727.062H8.397A8.397 8.397 0 0 0 0 8.46v29.204a8.397 8.397 0 0 0 8.397 8.398h29.33a8.398 8.398 0 0 0 8.397-8.398V8.46A8.397 8.397 0 0 0 37.727.062zm.28 19.078L22.142 35.005a3.586 3.586 0 0 1-5.076 0l-7.863-7.863a3.59 3.59 0 0 1 2.538-6.128c.952 0 1.864.378 2.537 1.051l4.686 4.687a.908.908 0 0 0 1.282 0l12.686-12.687a3.592 3.592 0 0 1 2.539-1.052 3.588 3.588 0 0 1 2.536 6.127z" />
  </Svg>
);

export default CheckComponent;
