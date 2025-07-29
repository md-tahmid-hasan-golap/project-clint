import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { creatUser, signIsWithGoggle } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, phone, address, photo, email, password });
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signIsWithGoggle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Enter your full name"
            required
          />

          {/* Phone */}
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="input input-bordered w-full"
            placeholder="01XXXXXXXXX"
            pattern="[0-9]{11}"
            required
          />

          {/* Address */}
          <label className="label" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="input input-bordered w-full"
            placeholder="Your address"
          />

          {/* Photo URL */}
          <label className="label" htmlFor="photo">
            Photo URL
          </label>
          <input
            id="photo"
            type="url"
            name="photo"
            className="input input-bordered w-full"
            placeholder="https://example.com/photo.jpg"
          />

          {/* Email */}
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="example@mail.com"
            required
          />

          {/* Password */}
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Enter your password"
            required
            minLength={6}
          />

          <button type="submit" className="btn btn-neutral w-full mt-4">
            Register
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-neutral mt-4 w-full flex items-center justify-center gap-2"
          type="button"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>

      <p className="text-center pb-5 mt-4">
        Already Have An Account?{" "}
        <Link to="/login" className="text-red-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
