const LoadingPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      {/* Spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-100 border-t-red-600"></div>

      {/* Loading Text */}
      <h1 className="mt-5 text-xl font-semibold text-red-600">
        Loading...
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Please wait a moment
      </p>
    </div>
  );
};

export default LoadingPage;