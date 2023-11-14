const Endpoints = {
  AUTH: {
    SIGNUP: "/auth/signup",
    SIGNIN: "/auth/signin",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    GET_PROFILE: "/user/profile",
  },
  KEYBOARD: {
    all: "/keyboard",
    byId: (id: string) => `/keyboard${id}`,
  },
};

export default Endpoints;
