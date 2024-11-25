export const getCurrentUser = (): any | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? JSON.parse(currentUser) : null;
};

export const isLoggedIn = (): any => {
  if (typeof window === 'undefined') {
    return null;
  }
  return Boolean(localStorage.getItem('jwtAdminApi'));
};
