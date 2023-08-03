import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/Usercontext";


function Layout() {
  const { setUserInput } = useContext(UserContext);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setUserInput(e.target.value);
    }
  };

  return (
    <>
      <div className="main-nav mt-6">
        <h1 className="text-white font-extrabold text-2xl">Find Your Github Profile</h1>
        <input
          className="text-center m-1.5 rounded-sm h-10 bg-zinc-600 text-blue-500 outline-transparent"
          type="text"
          id="user-input"
          onKeyDown={handleSubmit}
        />

      </div>
      <br />

      <Outlet />
    </>
  );
}

export default Layout;
