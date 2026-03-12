import NetInfo from '@react-native-community/netinfo';
import apiClient from 'api/client';
import { SeekerRoutes } from 'api/routes';

export const formatErrorMessages = (
  errorObj: Record<string, string | string[]>,
): string => {
  if (!errorObj || typeof errorObj !== 'object') return '';

  const fields = Object.keys(errorObj);
  if (fields.length === 0) return '';

  // If there's only one error, return it as-is
  if (fields.length === 1) {
    const singleError = errorObj[fields[0]];
    return Array.isArray(singleError) ? singleError[0] : singleError;
  }

  const firstMsg = Array.isArray(errorObj[fields[0]])
    ? (errorObj[fields[0]] as string[])[0]
    : (errorObj[fields[0]] as string);

  // Remove leading "The email has / This email has"
  const baseMessage = firstMsg.replace(
    /^(This|The)\s+[\w_]+\s+(has|have)\s+/i,
    '',
  );

  // Format field names: email, partner 2 email
  const formattedFields = fields
    .map(field => field.replace(/_/g, ' '))
    .join(' and ');

  return `The ${formattedFields} have ${baseMessage}`;
};
