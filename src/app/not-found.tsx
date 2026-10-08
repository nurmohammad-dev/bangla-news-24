import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-tight text-red-600 sm:text-9xl">
          404
        </h1>

        {/* Divider */}
        <div className="mx-auto my-6 h-1 w-20 rounded-full bg-red-500" />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;