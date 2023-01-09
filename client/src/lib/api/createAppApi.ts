import { apiBaseUrl } from '@/constants/env';
import { Configuration, UserApi } from 'openapi-app-client';

export const createAppApi = () => {
  const config = new Configuration({
    basePath: apiBaseUrl,

    middleware: [
      {
        pre: async (context) => {
          console.log(context);
        },
        post: async (context) => {
          console.log(context.response);
        },
      },
    ],
  });

  return {
    user: new UserApi(config),
  };
};
