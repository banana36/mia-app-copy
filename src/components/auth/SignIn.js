import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

// SignIn Class Component
const SignIn = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  // State
  const [credentials, setCredentials] = useState({
    email: "gcica@yopmail.com",
    password: "federica"
  });

  // Functions

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(credentials);
    history.push("/");
  };

  // Render

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

// // Map State
// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth
//   };
// };

// // Map Dispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
