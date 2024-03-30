import auth from "../../Firebase/Firebase.config";

import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault(); // Prevent default form submission behavior
        const email = e.target.email.value; 
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword( auth, email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

  return (
    <div className="w-2/3 mx-auto flex justify-center">
      <div className="my-10 w-2/3 bg-gray-200 py-5 px-10 rounded-lg">
        <h2 className="text-2xl mb-2">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input type="email" name="email" className="mb-3 py-2 px-4 w-full rounded-lg" placeholder="Enter your email" />
          <br />
          <input type="password" name="password" className="mb-3 py-2 px-4 w-full rounded-lg" placeholder="Enter your password" />
          <br />
          <input className="btn btn-secondary w-full" type="submit" name="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;
