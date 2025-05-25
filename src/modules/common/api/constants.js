export const LINKS = {
  home: '/',
  login: '/login',
  feed: '/feed'
};

export const ENDPOINTS = {
  baseUrl: '/api',
  login: '/login',
  answers: {
    all: '/answers',
    find: (id) => `/answers?promptId=${id}`
  },
  activePrompt: '/prompts',
};
