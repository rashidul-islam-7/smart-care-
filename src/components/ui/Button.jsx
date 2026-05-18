
import { Link } from 'lucide-react';
import React from 'react';

const Button = (href = "#", className, children) => {
    return (
        <div className='px-5 py-2 rounded-sm bg-linear-to-r from-[#1491fa] to-sky-500 text-white font-semibold shadow-md hover:scale-101 transition-all duration-300'>
            <Link href={href}>
                {children}
            </Link>
        </div>
    );
};

export default Button;