import Svg, { Path } from "react-native-svg";

export default function ArcBottom({ color = "#0099ff", width = 400, height = 100 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 1440 200">
      <Path
        fill={color}
        d="M0,0 L0,100 Q720,350 1440,100 L1440,0 Z"
      />
    </Svg>
  );
}