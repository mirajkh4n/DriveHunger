export const initialData = {
  userAuthentication: null,
  requestdata: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {userAuthentication: action.payload};
    case 'PROFILE_DATA':
      return {userAuthentication: action.payload};

    default:
      throw new Error();
  }
}
