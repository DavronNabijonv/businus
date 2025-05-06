// src/hooks/useTranslations.ts
import { useQuery } from '@tanstack/react-query';
import pb from '../api/pocketBase';

export const useTranslations = () => {
  return useQuery({
    queryKey: ['translations','hero'],
    queryFn: async () => {
      const result = await pb.collection('translations').getList(1, 30, {
        filter: `key~'hero'`,
      });
      return result.items;
    },
  });
};
