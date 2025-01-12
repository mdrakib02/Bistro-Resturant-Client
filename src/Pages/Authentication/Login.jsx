import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../Provider/Authcontext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleValidationCaptcha = (e) => {
    e.preventDefault();
    const userCaptchaValue = captchaRef.current.value;
    console.log(userCaptchaValue);
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
      captchaRef.current.value(" ");
      return;
    } else {
      return setDisabled(true);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>
        <form onSubmit={handleLoginSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              ref={captchaRef}
              id="captcha"
              name="captcha"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write captcha text avobe"
              required
            />
            <button
              onClick={handleValidationCaptcha}
              className="btn mt-2 btn-xs btn-outline"
            >
              Validate
            </button>
          </div>

          {/* Submit Button */}
          <button
            disabled={disabled}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-200 
             disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
