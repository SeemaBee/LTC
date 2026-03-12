import NetInfo from '@react-native-community/netinfo';

export const getRequestsData = async () => {
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
          amount: number;
          location: string;
          distance: number;
          slotTime: string;
          slotDate: string;
        }[];
      };
    }>(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            status: 'success',
            data: [
              {
                amount: 1200,
                location: 'Sector 21 Mohali',
                distance: 2.3,
                slotDate: '19 Dec, 2025',
                slotTime: '3:00 PM',
              },
              {
                amount: 1200,
                location: 'Sector 21 Mohali',
                distance: 2.3,
                slotDate: '19 Dec, 2025',
                slotTime: '3:00 PM',
              },
              {
                amount: 1200,
                location: 'Sector 21 Mohali',
                distance: 2.3,
                slotDate: '19 Dec, 2025',
                slotTime: '3:00 PM',
              },
            ],
          },
        });
      }, 1500);
    });
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};

export const getAcceptedRequestsData = async () => {
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
          amount: number;
          location: string;
          distance: number;
          slotTime: string;
          slotDate: string;
        }[];
      };
    }>(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            status: 'success',
            data: [
              {
                amount: 1200,
                location: 'Sector 21 Mohali',
                distance: 2.3,
                slotDate: '19 Dec, 2025',
                slotTime: '3:00 PM',
              },
              {
                amount: 1200,
                location: 'Sector 21 Mohali',
                distance: 2.3,
                slotDate: '19 Dec, 2025',
                slotTime: '3:00 PM',
              },
              {
                amount: 1200,
                location: 'Sector 21 Mohali',
                distance: 2.3,
                slotDate: '19 Dec, 2025',
                slotTime: '3:00 PM',
              },
            ],
          },
        });
      }, 1500);
    });
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};
