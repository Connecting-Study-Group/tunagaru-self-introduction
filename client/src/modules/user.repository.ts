import api from '@/lib/api';

export type UpdateUser = {
  name: string;
  email: string;
  company?: string;
  job?: string;
  status?: string;
  bio?: string;
  twitterUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
  webUrl?: string;
  qiitaUrl?: string;
  zennUrl?: string;
};

export const userRepository = {
  async updateUser(uid: string, params: UpdateUser) {
    await api.user.updateUser({ uid, updateUserRequest: params });
  },
};
