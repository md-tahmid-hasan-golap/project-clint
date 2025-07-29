import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signIsWithGoggle } = useContext(AuthContext);
  const haldleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
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
    <div className="card bg-base-100  max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <form onSubmit={haldleLogin} className="fieldset">
          {/* gmail */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-neutral mt-4 w-full flex items-center justify-center gap-2"
          type="button"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>

      <p className="text-center pb-5">
        Dont’t Have An Account ?{" "}
        <Link to="/register" className="text-red-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
