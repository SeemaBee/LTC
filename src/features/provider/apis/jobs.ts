import NetInfo from '@react-native-community/netinfo';

export const getUpcomingJobs = async () => {
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

export const getInProgressJobsData = async () => {
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

export const getCompletedJobsData = async () => {
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

export const acceptJob = async (id: number) => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    // const response = await apiClient.post(ProviderRoutes.acceptJob, { id });
    // return response.data;
    return new Promise<{
      data: {
        status: string;
        message: string;
        data: {
          id: number;
          jobStatus: string;
        };
      };
    }>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            status: 'success',
            message: 'Job accepted successfully.',
            data: {
              id,
              jobStatus: 'in_progress',
            },
          },
        });
      }, 1500);
    });
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ??
        error?.message ??
        'Something went wrong',
    );
  }
};

export const rejectJob = async (id: number) => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    // const response = await apiClient.post(ProviderRoutes.acceptJob, { id });
    // return response.data;
    return new Promise<{
      data: {
        status: string;
        message: string;
        data: {
          id: number;
          jobStatus: string;
        };
      };
    }>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            status: 'success',
            message: 'Job rejected successfully.',
            data: {
              id,
              jobStatus: 'in_progress',
            },
          },
        });
      }, 1500);
    });
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ??
        error?.message ??
        'Something went wrong',
    );
  }
};
