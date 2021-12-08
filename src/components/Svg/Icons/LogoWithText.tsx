import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const wrapColor = isDark ? "#5FFF71" : "#3B9863";
  return (
    <Svg viewBox="0 0 512 107" {...props}>
      <g>
        <g>
          <g>
            <polygon fill={wrapColor} points="75.3,62.1 55.51,81.84 35.76,62.12 24.34,73.51 55.53,104.67 66.95,93.27 66.93,93.25 86.71,73.5 
                    "/>
            <polygon fill={wrapColor} points="19.84,57.81 14.23,63.41 19.79,68.96 25.4,63.36 			"/>
            <polygon fill={wrapColor} points="10.09,48.06 4.48,53.66 10.03,59.21 15.64,53.62 			"/>
            <polygon fill={wrapColor} points="25.45,43.83 19.9,38.28 14.29,43.87 19.84,49.42 			"/>
            <polygon fill={wrapColor} points="29.63,59.2 35.24,53.6 29.68,48.05 24.07,53.65 			"/>
            <polygon fill={wrapColor} points="85.52,63.6 91.08,69.15 96.69,63.55 91.13,58 			"/>
            <polygon fill={wrapColor} points="75.76,53.85 81.32,59.4 86.93,53.8 81.37,48.25 			"/>
            <polygon fill={wrapColor} points="91.13,49.61 96.74,44.01 91.18,38.46 85.57,44.06 			"/>
            <polygon fill={wrapColor} points="100.97,48.24 95.36,53.84 100.91,59.39 106.52,53.79 			"/>
            <g>
              <text transform="matrix(1.0018 0 0 1 42.5288 64.6945)" fill={wrapColor} fontFamily="aAtmospheric" fontSize="29.5px">D</text>
            </g>
            <polygon fill={wrapColor} points="75.3,45.18 55.51,25.44 35.76,45.17 24.34,33.77 55.53,2.62 66.95,14.01 66.93,14.04 86.71,33.78 
                    "/>
          </g>
          <g enableBackground="new">
            <path fill={textColor} d="M142.2,46.4l10-2.7v20.6h15.7c3,0,5.3-1.7,6.9-5c1-2.1,1.5-4.6,1.5-7.3c0-4.1-1-7.3-3.1-9.5     c-1.4-1.5-3.2-2.3-5.3-2.3h-25.7l2.7-8.9h24.2c5.7,0,10.2,2.4,13.6,7.2c2.8,4,4.2,8.7,4.2,14.2c0,5.8-1.5,10.6-4.6,14.4     c-3.3,4-7.6,6.1-13.1,6.1h-26.9V46.4z"/>
            <path fill={textColor} d="M201.8,56.7v7.5h30.6l-2.7,8.9h-37.9V31.2h40.6l-2.7,8.9h-27.9v7.6h26v8.9H201.8z"/>
            <path fill={textColor} d="M248.4,56.7v16.5h-10V31.2h40l-2.7,8.9h-27.3v7.6h25.5v8.9H248.4z"/>
            <path fill={textColor} d="M282.7,31.2h10v41.9h-10V31.2z"/>
            <path fill={textColor} d="M314,56.6c-5.6,0-9.8-1.8-12.6-5.4c-1.7-2.1-2.5-4.6-2.5-7.3c0-3.7,1.4-6.7,4.1-9.1s6.4-3.6,10.9-3.6h28.5     l-2.7,8.9h-25.7c-2.1,0-3.6,0.8-4.3,2.4c-0.2,0.5-0.3,1-0.3,1.5c0,1.5,0.7,2.6,2.2,3.3c0.7,0.3,1.5,0.5,2.4,0.5h14.4     c5.4,0,9.5,1.7,12.2,5.2c1.8,2.2,2.6,4.7,2.6,7.5c0,3.7-1.4,6.7-4.1,9.1c-2.7,2.4-6.3,3.6-10.8,3.6H299l2.7-8.9h26.8     c2.2,0,3.6-0.8,4.3-2.3c0.2-0.5,0.3-0.9,0.3-1.4c0-1.5-0.7-2.6-2.1-3.3c-0.7-0.4-1.6-0.5-2.5-0.5H314z"/>
            <path fill={textColor} d="M358.8,74.2l-13.2-43h10.5l8,30.3l11.8-30.3h6.1l11.8,30.3l8-30.3h10.5l-13.6,40.3l-10,2.7l-9.8-26.6     l-10.1,23.9L358.8,74.2z"/>
            <path fill={textColor} d="M424.1,67.6l3.6-8.5h11.7l-8.2-17.4l-14.6,31.5h-10.5L426,32.9l10-2.7l20.6,43h-10.5l-2.6-5.6H424.1z"/>
            <path fill={textColor} d="M459.7,46.3l10-2.7V51h19.5c2,0,3.3-1,4.1-3c0.3-0.8,0.5-1.7,0.5-2.5c0-2.1-0.7-3.7-2.2-4.7     c-0.7-0.5-1.5-0.7-2.4-0.7h-29.5l2.7-8.9h26.4c5.4,0,9.5,1.9,12.5,5.7c2,2.7,3.1,5.7,3.1,9.1c0,4.1-1.5,7.5-4.4,10.1     c-2.8,2.5-6.6,3.8-11.2,3.8h-19.1v13.2h-10V46.3z"/>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
