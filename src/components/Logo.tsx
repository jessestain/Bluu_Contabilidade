import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 150 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bluu Contabilidade Logo"
    >
      <g clipPath="url(#clip0_10_1)">
        <path
          d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0Z"
          className="text-blue-600 fill-current"
        />
        <path
          d="M26.5 20C26.5 23.59 23.59 26.5 20 26.5C16.41 26.5 13.5 23.59 13.5 20C13.5 16.41 16.41 13.5 20 13.5C23.59 13.5 26.5 16.41 26.5 20Z"
          className="text-white fill-current"
        />
        <text
          x="48"
          y="28"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="28"
          fontWeight="bold"
          className="text-slate-800 fill-current"
        >
          Bluu
        </text>
        <text
          x="115"
          y="15"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="9"
          fontWeight="500"
          className="text-slate-500 fill-current tracking-widest"
        >
          CONTABILIDADE
        </text>
      </g>
      <defs>
        <clipPath id="clip0_10_1">
          <rect width="150" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
