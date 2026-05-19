
import React from 'react';

const GoogleBtn = () => {
    return (
        <div>
            <button
                type="button"
                className="cursor-pointer w-full h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 font-medium transition flex items-center justify-center gap-3"
            >
                {/* Google Icon */}
                <svg width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.21 3.61l6.85-6.85C35.9 2.38 30.46 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.2C12.43 13.09 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.14-3.09-.4-4.55H24v9.02h12.94c-.56 2.99-2.24 5.52-4.77 7.22l7.73 6c4.51-4.18 7.08-10.36 7.08-17.69z" />
                    <path fill="#FBBC05" d="M10.54 28.42a14.5 14.5 0 0 1 0-9.24l-7.98-6.2A23.9 23.9 0 0 0 0 24c0 3.77.9 7.34 2.56 10.22l7.98-5.8z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.73-6c-2.16 1.45-4.92 2.31-8.18 2.31-6.26 0-11.57-3.59-13.46-8.92l-7.98 5.8C6.51 42.62 14.62 48 24 48z" />
                </svg>

                Continue with Google
            </button>

        </div>
    );
};

export default GoogleBtn;