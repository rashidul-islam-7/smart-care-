import { getDoctors } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const TopDoctors = async () => {
  let doctorList = [];

  try {
    const doctor = await getDoctors();

    doctorList = Array.isArray(doctor) ? doctor : [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    doctorList = [];
  }

  const topThreeDoctors = doctorList
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  if (topThreeDoctors.length === 0) {
    return (
      <section className="py-16 text-center bg-gray-50 shadow w-fit px-10 rounded-2xl m-auto mt-10">
        <p className="text-lg font-medium text-slate-600">
          Top doctors not found
        </p>
        <p className="text-sm text-slate-400 mt-2">
          Please reload the page and try again.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-linear-to-bl from-green-500/30 via-sky-100 to-blue-300/40 py-16 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Clean Header */}
        <div className="mb-12 border-b border-slate-100 pb-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-700 sm:text-3xl">
            Top Rated Specialists
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base max-w-xl">
            Consult with our highly qualified and verified medical
            professionals.
          </p>
        </div>

        {/* card */}
        <div className="flex flex-wrap gap-10 justify-evenly items-center">
          {topThreeDoctors.map((doc, index) => (
            <div key={doc._id || index} className="group">
              <div className="text-center w-fit">
                <div className="relative aspect-square md:h-44 h-32 md:w-44 w-32 rounded-full overflow-hidden bg-slate-50 mb-4">
                  <Image
                    src={doc.image || "/doctor-avatar.png"}
                    alt={doc.name || "Doctor"}
                    fill
                    sizes="(max-width: 768px) 128px, 176px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <p className="font-semibold text-lg -mt-1">{doc.name}</p>
                  <p className="text-xs text-gray-400 mb-3">{doc.specialist}</p>

                  <Link
                    href={`/appointments/${doc._id}`}
                    className="flex cursor-pointer justify-center px-5 items-center gap-1 bg-blue-600 hover:bg-blue-700 w-full py-1 rounded-full text-white text-sm transition-all duration-300"
                  >
                    View Details{" "}
                    <span className="group-hover:translate-x-2 transition-all duration-300">
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
