import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registrationStarted,
  registrationCompleted,
  STATIC_USERS,
} from "../slices/authSlice";
import { findLocalUser, saveLocalUser } from "../utils/localUsers";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isRegistering, isLoading, error } =
    useAppSelector((state) => state.auth);

  const login = (phone: string, password: string) => {
    dispatch(loginStart());

    setTimeout(() => {
      const staticUser = STATIC_USERS.find(
        (u) => u.phone === phone && u.password === password,
      );

      if (staticUser) {
        dispatch(
          loginSuccess({
            id: staticUser.id,
            name: staticUser.name,
            phone: staticUser.phone,
            token: staticUser.token,
          }),
        );
        return;
      }

      const localUser = findLocalUser(phone, password);

      if (localUser) {
        dispatch(
          loginSuccess({
            id: localUser.id,
            name: localUser.name,
            phone: localUser.phone,
            token: localUser.token,
          }),
        );
        return;
      }

      dispatch(loginFailure("Telefon yoki parol noto'g'ri"));
    }, 1000);
  };

  const register = (name: string, phone: string, password: string) => {
    dispatch(loginStart());

    setTimeout(() => {
      const newUser = {
        id: Date.now().toString(),
        name,
        phone,
        token: "local-token-" + Date.now(),
        password,
      };

      saveLocalUser(newUser);

      dispatch(
        registrationStarted({
          id: newUser.id,
          name: newUser.name,
          phone: newUser.phone,
          token: newUser.token,
        }),
      );
    }, 1000);
  };

  const completeRegistration = () => {
    dispatch(registrationCompleted());
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    isRegistering,
    isLoading,
    error,
    login,
    register,
    completeRegistration,
    logoutUser,
  };
};
