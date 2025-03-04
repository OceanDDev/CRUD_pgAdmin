/* eslint-disable react/prop-types */

const Navbar = ({onOpen}) => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    </div>
    <div className="navbar-end">
      <a className="btn btn-primary" onClick={onOpen}>Add </a>
    </div>
  </div>
  )
}

export default Navbar
