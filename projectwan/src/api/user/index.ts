import { POST } from '@/untils/request';
import type { loginFrom } from './type';
export const login = (data: loginFrom) =>
  POST({
    url: '/login',
    params: {
      data: data
    }
  });
