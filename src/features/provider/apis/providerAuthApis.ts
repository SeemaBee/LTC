import NetInfo from '@react-native-community/netinfo';
import apiClient from 'api/client';
import { ProviderRoutes } from 'api/routes';

export const getServiceList = async () => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    const response = await apiClient.get(ProviderRoutes.getServices);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};

export const saveProfessionalDetails = async (data: object) => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    const response = await apiClient.post(
      ProviderRoutes.professionalDetails,
      data,
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};

export const saveProviderDocuments = async (data: FormData) => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    const response = await apiClient.post(
      ProviderRoutes.providerDocuments,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};

export const getIdProofList = async () => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    const response = await apiClient.get(ProviderRoutes.getIdProofList);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};

export const saveBankDetails = async (data: object) => {
  const netState = await NetInfo.fetch();

  if (!netState.isConnected) {
    throw new Error('No internet connection');
  }

  try {
    const response = await apiClient.post(
      ProviderRoutes.bankDetails,
      data,
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Something went wrong');
  }
};
