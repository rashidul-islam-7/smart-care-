import Link from "next/link";

 function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-linear-to-r from-blue-500/30 via-sky-50 to-green-50">
      
      <div className="text-center">
        
        <h1 className="text-7xl font-bold text-blue-800 animate-pulse">
          404
        </h1>

        <h3 className="text-3xl text-gray-600">
          Page Not Found
        </h3>

        <p className="text-sm text-gray-400">
          The page you are looking for doesn’t exist.
        </p>

        {/* Go Back Button */}
     <Link href={"/"} >
     
        <button
          className=" cursor-pointer mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Go Home
        </button>
     </Link>

      </div>
    </div>
  );
}

export default NotFound ;