import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useFormLoginMutation } from "../redux/api/auth API Management/authApi";
import { verifyToken } from "../../utiles/verifyToken";
import { setUser, TUser } from "../redux/api/auth API Management/authSlice";
import Loader from "../components/Loader";
import InfoBanner from "./Landing Page/InfoBanner";


interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [formLogin, { isLoading, isError }] = useFormLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle traditional form login
  const onSubmit = async (data: LoginFormInputs) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await formLogin(userInfo).unwrap();
      const user: TUser = verifyToken(res.token) as TUser;

      // Set the user in Redux state with their token
      dispatch(setUser({ user, token: res.token }));

      // Navigate to the user's dashboard
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.error(error);
      // Handle login error here (e.g., show error notification)
    }
  };

  // Handle Google OAuth login
  const handleGoogleLogin = () => {
    window.open(
      `https://bike-rental-service-backend-two.vercel.app/api/auth/google`,
      "_self"
    );
  };

  // Check for token after Google OAuth login
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      "access_token"
    );

    if (token) {
      const user: TUser = verifyToken(token) as TUser;

      // Set the user in Redux state with their token
      dispatch(setUser({ user, token }));

      // Navigate to the user's dashboard
       navigate(`/${user.role}/dashboard`);
    }
  }, [dispatch, navigate]);

if (isLoading) {
  return <Loader/>;
  }
  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-7 sm:px-6 lg:px-8">
        <InfoBanner></InfoBanner>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-slate-200 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
                </button>
              </div>
            </form>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-slate-200 px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#eaeaea] px-3 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]">
                <svg
                  viewBox="0 0 262.00 262.00"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"></path>
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
              </button>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.478 0 0 4.484 0 10.017a10.02 10.02 0 006.838 9.525c.5.09.683-.218.683-.484 0-.237-.009-.868-.013-1.703-2.782.607-3.369-1.349-3.369-1.349-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.07-.608.07-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
              </a>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to="/Registration"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
