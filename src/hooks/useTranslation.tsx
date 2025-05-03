// src/hooks/useTranslations.ts
import { useQuery } from '@tanstack/react-query';
import pb from '../api/pocketBase';

export const useTranslations = () => {
  return useQuery({
    queryKey: ['translations'],
    queryFn: async () => {
      const result = await pb.collection('translations').getList(1, 30, {
        sort: '-created',
      });
      return result.items;
    },
  });
};
