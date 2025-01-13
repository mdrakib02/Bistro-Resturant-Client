import Cover from "../../Components/Cover/Cover";
import imggg from "../../assets/menu/pizza-bg.jpg";
import { FaGooglePlusG } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../Provider/Authcontext";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import toast from "react-hot-toast";

export default function SignUp() {
  const axiosPublic = UseAxiosPublic();
  const { createUser, handleupdateProfile, signInWithGoogle } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const logUser = result.user;
      console.log(logUser);
      handleupdateProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/user", userInfo).then((result) => {
            if (result.data.insertedId) {
              console.log("user added to the database");
              reset();
              toast.success("user added to the database");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  console.log(watch("name"));

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    signInWithGoogle().then((result) => {
      const userInfo = {
        email: result.user.email,
        name: result.user.displayName,
      };
      axiosPublic.post("/user", userInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Login successfully");
        } else {
          toast.error(res.data.message);
        }
      });
    });
  };
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
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn btn-outline btn-error w-full"
            >
              Login with Google <FaGooglePlusG />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
