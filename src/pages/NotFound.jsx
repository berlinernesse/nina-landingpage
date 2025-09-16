import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center text-center p-6">
      <div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">Page not found.</p>
        <Link to="/" className="mt-4 inline-block rounded-xl bg-gray-900 px-4 py-2 text-white hover:opacity-90">
          Go Home
        </Link>
      </div>
    </div>
  );
}
