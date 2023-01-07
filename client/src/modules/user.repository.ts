export type UpdateUser = {
  name: string;
  company: string;
  job: string;
  status: string;
  bio: string;
};

export const userRepository = {
  async createUser() {},

  async updateUser(params: UpdateUser) {},
};
