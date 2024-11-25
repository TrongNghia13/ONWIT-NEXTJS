import qs from 'qs';
import apiService from '@/services/apiService';

export const getStrapiData = async (path = '', params = {}, options = {}) => {
  const queries = qs.stringify(params, { encodeValuesOnly: true });

  const res = await apiService.get(`${process.env.NEXT_PUBLIC_API_URL}/api${path}?${queries}`, options);
  return res.data;
};
