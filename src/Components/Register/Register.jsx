import { useState } from "react";
import auth from "../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters of longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should be at least one upper case character"
      );
      return;
    }else if(!accepted){
      setRegisterError('Please accept our terms and conditions');
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="w-2/3 mx-auto flex justify-center">
      <div className="my-10 w-2/3 bg-gray-200 py-5 px-10 rounded-lg">
        <h2 className="text-2xl mb-2">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            name="email"
            required
            className="mb-3 py-2 px-4 w-full rounded-lg"
            placeholder="Enter your email"
          />
          <br />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="mb-3 py-2 px-4 w-full rounded-lg"
              placeholder="Enter your password"
            />
            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and condition</a></label>
          <br />
          <br />
          <input
            className="btn btn-secondary w-full"
            type="submit"
            name="submit"
          />
        </form>
        {registerError && <p className="text-red-600">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>Already have an acount? Please <Link to={'/login'}>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
