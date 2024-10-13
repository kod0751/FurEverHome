import { useQuery } from 'react-query';
import { fetchAllData } from '../api/petData';

export const useFetchPetData = () => {
  return useQuery('petData', fetchAllData);
};
