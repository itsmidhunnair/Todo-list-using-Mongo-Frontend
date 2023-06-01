const authApi = {
  loginApi: '/user/login',
  signupApi: '/user/signup',
  verifyApi: '/user/verify',
  getDataApi: '/user/getuser',
  logoutApi: '/user/logout',
};

const taskPath = {
  addTask: '/task/add',
  getTask: '/task/get',
  setStatus: '/task/status',
  deleteTask: '/task/delete',
}

const localPath = {
  login: '/login',
  signup: '/signup',
};

export const path = { root: '/', ...authApi, ...taskPath, ...localPath };
