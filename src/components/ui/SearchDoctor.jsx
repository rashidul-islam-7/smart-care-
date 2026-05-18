import React from "react";
import { Search } from "lucide-react";

const SearchDoctor = () => {
    return (
        <div className="w-full max-w-xl">
            <div className="flex items-center gap-2 rounded-xl border
             border-green-500/50 bg-white/80 backdrop-blur-xl shadow-xl px-2">

                {/* Search Icon */}
                <div className="pl-3 text-gray-400">
                    <Search size={22} />
                </div>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search doctor, specialist or hospital..."
                    className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 py-3"
                />

            </div>
        </div>
    );
};

export default SearchDoctor;