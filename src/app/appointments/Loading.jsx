const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-full border-4 border-sky-500 border-t-transparent animate-spin"></div>

        <h2 className="text-xl font-semibold text-slate-700">
          <span className="loading loading-spinner loading-md"></span>
          Loading Doctors <span className="loading-dots">...</span>
        </h2>
      </div>
    </div>
  );
};

export default Loading;
