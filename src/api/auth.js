import axios from 'axios';

const authUrl = 'https://todo-list.alphacamp.io/api/auth';

// 前端這邊會傳入 userName, password 傳入
// 因為要等 data 拿到資料，要用非同步的方式 async await
export const login = async ({ username, password }) => {
  // 因為在這裡使用 axios，所以 response 都會被封裝在 data的物件裡，要使用解構賦值把 data取出來
  try {
    const { data } = await axios.post(`${authUrl}/login`, {
      username,
      password,
    });

    console.log('data', data);

    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
};

export const register = async ({ username, password, email }) => {
  try {
    const { data } = await axios.post(`${authUrl}/register`, {
      username,
      password,
      email,
    });
    const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Register Failed]:', error);
  }
};
