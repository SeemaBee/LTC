import { useTheme } from 'common/helperFunctions';
import { lazy, startTransition, Suspense, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Metrics } from 'theme/metrics';

const ChartImpl = lazy(() => import('./chartImplementation'));

interface Props {
  data: { month: string; highTmp: number }[];
}

const ChartLoader = () => {
  const theme = useTheme();
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
};

const MyChart = (props: Props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={<ChartLoader />}>
      <ChartImpl {...props} />
    </Suspense>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Metrics._300,
  },
});

export default MyChart;