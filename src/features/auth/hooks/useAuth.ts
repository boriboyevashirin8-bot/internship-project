import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
  STATIC_USERS,
} from "../slices/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth,
  );

  const login = (phone: string, password: string) => {
    dispatch(loginStart());

    setTimeout(() => {
      const found = STATIC_USERS.find(
        (u) => u.phone === phone && u.password === password,
      );

      if (found) {
        dispatch(
          loginSuccess({
            id: found.id,
            name: found.name,
            phone: found.phone,
            token: found.token,
          }),
        );
      } else {
        dispatch(loginFailure("Telefon yoki parol noto'g'ri"));
      }
    }, 1000);
  };

  const register = (name: string, phone: string, password: string) => {
    dispatch(loginStart());

    setTimeout(() => {
      const newUser = {
        id: Date.now().toString(),
        name,
        phone,
        token: "new-user-token-" + Date.now(),
      };
      dispatch(registerSuccess(newUser));
    }, 1000);
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logoutUser,
  };
};
