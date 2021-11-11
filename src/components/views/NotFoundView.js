import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <h1>
      404 Sorry, the page is not found. Go <Link to="/">home</Link>
    </h1>
  );
}
