const createAuthenticationHeaderFromUser = (user) => {
  const customHeaders = {};

  if (!user) {
    customHeaders.headers = {};
    return customHeaders;
  }

  customHeaders.headers = user.token
    ? { authorization: `Bearer ${user.token}` }
    : { user: user.id };

  return customHeaders;
};

export default createAuthenticationHeaderFromUser;
