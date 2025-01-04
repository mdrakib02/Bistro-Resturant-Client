import React from "react";
import Cover from "../../Components/Cover/Cover";
import imggg from "../../assets/menu/pizza-bg.jpg";
import { FaGooglePlusG } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("name"));

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const photo = form.photo.value;
  //   const password = form.password.value;
  //   console.log({ name, email, photo, password });
  // };
  return (
    <section>
      <Cover img={imggg}></Cover>
      <div className=" bg-slate-200 container mx-auto my-6 md:my-8  lg:my-12  p-4 px-4 md:p-6 lg:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered"
              name="name"
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered"
              name="email"
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="Enter your photo URL"
              className="input input-bordered"
              name="photo"
            />
            {errors.photo && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                validate: {
                  minLength: (value) =>
                    value.length >= 8 ||
                    "Password must be at least 8 characters",
                  maxLength: (value) =>
                    value.length <= 9 ||
                    "Password must not exceed 9 characters",
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must include at least one uppercase letter",
                  hasLowercase: (value) =>
                    /[a-z]/.test(value) ||
                    "Password must include at least one lowercase letter",
                },
              })}
              placeholder="Enter your password"
              className="input input-bordered"
              name="password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be at least 8 characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600">
                Password must not exceed 9 characters
              </span>
            )}
            {errors.password?.type === "hasUppercase" && (
              <span className="text-red-600">
                Password must include at least one uppercase letter
              </span>
            )}
            {errors.password?.type === "hasLowercase" && (
              <span className="text-red-600">
                Password must include at least one lowercase letter
              </span>
            )}
          </div>{" "}
          <div className="form-control mb-4">
            <button className="btn btn-primary w-full">Register</button>
          </div>
          <div className="form-control">
            <button type="button" className="btn btn-outline btn-error w-full">
              Login with Google <FaGooglePlusG />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
