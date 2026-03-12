import { View } from 'react-native';
import {
  CartesianChart,
  Line,
  Pie,
  PolarChart,
  useChartPressState,
} from 'victory-native';
import { useFont } from '@shopify/react-native-skia';
import inter from 'assets/fonts/Inter-Medium.ttf';
import { useTheme } from 'common/helperFunctions';
import { Metrics } from 'theme/metrics';
import { memo } from 'react';
import Tooltip from './tooltip';

interface Props {
  data: { month: string; highTmp: number }[];
}

const ChartImpl: React.FC<Props> = ({ data = [] }) => {
  const theme = useTheme();
  const font = useFont(inter, 12);
  const { state, isActive } = useChartPressState({
    x: '',
    y: { highTmp: 0 },
  });

  if (!font) return null;

  function randomNumber() {
    return Math.floor(Math.random() * 26) + 125;
  }
  function generateRandomColor(): string {
    const randomColor = Math.floor(Math.random() * 0xffffff);
    return `#${randomColor.toString(16).padStart(6, '0')}`;
  }
  const DATA = (numberPoints = 5) =>
    Array.from({ length: numberPoints }, (_, index) => ({
      value: randomNumber(),
      color: generateRandomColor(),
      label: `Label ${index + 1}`,
    }));

  return (
    <View style={{ height: Metrics._300 }}>
      {/* <PolarChart
        data={DATA(5)} // 👈 specify your data
        labelKey={'label'} // 👈 specify data key for labels
        valueKey={'value'} // 👈 specify data key for values
        colorKey={'color'} // 👈 specify data key for color
      >
        <Pie.Chart innerRadius={120} startAngle={-6} />
      </PolarChart> */}
      <CartesianChart
        data={data}
        xKey="month"
        yKeys={['highTmp']}
        axisOptions={{ font, tickCount: data.length }}
        chartPressState={state}
        domainPadding={{ right: Metrics._20 }}
      >
        {({ points }) => (
          <>
            <Line
              curveType="natural"
              points={points.highTmp}
              color={theme.primary}
              strokeWidth={Metrics._2}
            />

            {isActive && (
              <Tooltip
                x={state.x.position}
                y={state.y.highTmp.position}
                font={font}
              />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  );
};

export default memo(ChartImpl);
