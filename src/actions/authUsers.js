export const SET_AUTH_USER = "SET_AUTH_USER";

//this is my action creator to get the authUsers 
export function receivedAuth(id) {
  return {
    type: SET_AUTH_USER,
    id
  };
}
