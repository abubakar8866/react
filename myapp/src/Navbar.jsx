import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-4 flex gap-6 bg-gray-300">
      <Link to="/" className="font-semibold">Home</Link>
      <Link to="/people" className="font-semibold">People</Link>
      <Link to="/car" className="font-semibold">Car</Link>
      <Link to="/state" className="font-semibold">State</Link>
      <Link to="/crud" className="font-semibold">Crud</Link>
      <Link to="/axios" className="font-semibold">Products</Link>
      <Link to="/cart" className="font-semibold">Cart</Link>
    </div>
  );
}

export default Navbar;