import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  friends: [],
  experiences: [],
  education: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        friends: [],
        profile: null,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
}
