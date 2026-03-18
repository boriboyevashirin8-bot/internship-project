import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registrationStarted,
  registrationCompleted,
} from "../slices/authSlice";
import { logger } from "../../../utils/logger";
import { toUzbekError } from "../../../utils/errorMessages";

interface MemberResult {
  _id: string;
  memberName: string;
  memberPhone: string;
  memberRole: string;
  accessToken: string;
}

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      _id
      memberName
      memberPhone
      memberRole
      accessToken
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      _id
      memberName
      memberPhone
      memberRole
      accessToken
    }
  }
`;

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isRegistering, isLoading, error } =
    useAppSelector((state) => state.auth);

  const [loginMutation] = useMutation<{ login: MemberResult }>(LOGIN_MUTATION);
  const [registerMutation] = useMutation<{ register: MemberResult }>(
    REGISTER_MUTATION,
  );

  const login = async (phone: string, password: string) => {
    dispatch(loginStart());
    logger.info("useAuth/login", "Login urinishi boshlandi", { phone });
    try {
      const { data } = await loginMutation({
        variables: {
          input: { memberPhone: phone, memberPassword: password },
        },
      });
      if (!data?.login) throw new Error("Server javob bermadi");
      const member = data.login;
      logger.info("useAuth/login", "Login muvaffaqiyatli", {
        id: member._id,
        name: member.memberName,
      });
      dispatch(
        loginSuccess({
          id: member._id,
          name: member.memberName,
          phone: member.memberPhone,
          token: member.accessToken,
        }),
      );
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : "Xatolik yuz berdi";
      const message = toUzbekError(raw);
      logger.error("useAuth/login", "Login xatosi", {
        raw,
        translated: message,
      });
      dispatch(loginFailure(message));
    }
  };

  const register = async (name: string, phone: string, password: string) => {
    dispatch(loginStart());
    logger.info("useAuth/register", "Ro'yxatdan o'tish boshlandi", {
      name,
      phone,
    });
    try {
      const { data } = await registerMutation({
        variables: {
          input: {
            memberName: name,
            memberPhone: phone,
            memberPassword: password,
          },
        },
      });
      if (!data?.register) throw new Error("Server javob bermadi");
      const member = data.register;
      logger.info("useAuth/register", "Ro'yxatdan o'tish muvaffaqiyatli", {
        id: member._id,
        name: member.memberName,
      });
      dispatch(
        registrationStarted({
          id: member._id,
          name: member.memberName,
          phone: member.memberPhone,
          token: member.accessToken,
        }),
      );
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : "Xatolik yuz berdi";
      const message = toUzbekError(raw);
      logger.error("useAuth/register", "Ro'yxatdan o'tish xatosi", {
        raw,
        translated: message,
      });
      dispatch(loginFailure(message));
    }
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
