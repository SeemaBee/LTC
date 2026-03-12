import { Circle, RoundedRect, Text } from '@shopify/react-native-skia';
import { useTheme } from 'common/helperFunctions';
import { memo } from 'react';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { Metrics } from 'theme/metrics';

const Tooltip = memo(
  ({
    x,
    y,
    font,
    label = '20,000',
  }: {
    x: SharedValue<number>;
    y: SharedValue<number>;
    font: any;
    label?: string;
  }) => {
    const theme = useTheme();

    const boxWidth = Metrics._76;
    const boxHeight = Metrics._30;
    const radius = Metrics._8;
    const gap = Metrics._8;

    const boxX = useDerivedValue(() => x.value - radius - gap - boxWidth, []);

    const boxY = useDerivedValue(() => y.value - boxHeight / 2, []);

    const textX = useDerivedValue(() => {
      const textWidth = font.getTextWidth(label);
      return boxX.value + (boxWidth - textWidth) / 2;
    }, []);

    const textY = useDerivedValue(() => {
      const fontSize = font.getSize();
      return boxY.value + (boxHeight + fontSize) / 2;
    }, []);

    return (
      <>
        <RoundedRect
          x={boxX}
          y={boxY}
          width={boxWidth}
          height={boxHeight}
          r={Metrics._4}
          color={theme.primaryLight}
        />

        <Text
          font={font}
          x={textX}
          y={textY}
          text={label}
          color={theme.primary}
        />

        <Circle cx={x} cy={y} r={radius} color={theme.primaryLight} />
      </>
    );
  },
);

export default Tooltip;