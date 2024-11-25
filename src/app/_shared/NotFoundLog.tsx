'use client';

import {useEffect} from 'react';

import apiService from '@/services/apiService';

export const NotFoundLog = () => {
  useEffect(() => {
    (async () => {
      try {
        await apiService.post('/api/not-found-logs', {
          data: {
            url: location.href,
            referer: document.referrer,
          },
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return null;
};
