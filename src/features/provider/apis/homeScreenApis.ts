import NetInfo from '@react-native-community/netinfo';
import apiClient from 'api/client';
import { ProviderRoutes } from 'api/routes';

export const toggleAvailability = async (type: string) => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    // const response = await apiClient.post(ProviderRoutes.toggleAvailability, {type});
    // return response.data;
    return new Promise<{
      data: { status: string };
    }>(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            status: 'success',
          },
        });
      }, 1500);
    });
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};

export const getSummaryAndChartData = async () => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    // const response = await apiClient.get(ProviderRoutes.getHomeScreenData)
    // return response.data;
    return new Promise<{
      data: {
        status: string;
        data: {
          jobsToday: number;
          completedJobs: number;
          todayEarnings: number;
          chartData: {month: string, highTmp: number}[];
        };
      };
    }>(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            status: 'success',
            data: {
              jobsToday: 11,
              completedJobs: 10,
              todayEarnings: 12,
              chartData: [
                { month: 'Jan', highTmp: 9000 },
                { month: 'Feb', highTmp: 10000 },
                { month: 'Mar', highTmp: 30000 },
                { month: 'Apr', highTmp: 40000 },
              ],
            },
          },
        });
      }, 1500);
    });
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};
