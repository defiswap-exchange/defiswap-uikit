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
          <text transform="matrix(1 0 0 1 138.213 73.1505)" fill={textColor} fontFamily="aAtmospheric" fontSize="54px">DeFiSwap</text>
        </g>
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
