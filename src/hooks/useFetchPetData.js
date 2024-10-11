import { useQuery } from 'react-query';
import { fetchPetData } from '../api/petData';

export const useFetchPetData = () => {
  return useQuery('petData', fetchPetData);
};
