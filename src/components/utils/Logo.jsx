import React from "react";

const Logo = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <defs>
        <linearGradient
          id="a"
          x1={24.3803}
          y1={22.6049}
          x2={5.2853}
          y2={22.6049}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#a0d8f1" />
          <stop offset={1} stopColor="#d2f4ff" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={27.6121}
          y1={20.8399}
          x2={18.952}
          y2={6.7009}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.0013} stopColor="#808285" />
          <stop offset={1} stopColor="#414042" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={4.0054}
          y1={17.1476}
          x2={17.1514}
          y2={1.3237}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.0013} stopColor="#3ab2e6" />
          <stop offset={1} stopColor="#a4e9ff" />
        </linearGradient>
      </defs>
      <path
        d="M24.617 24.834l-3.71-6.426H4.556a4.008 4.008 0 01-3.818-2.89 5.54 5.54 0 00.74 2.89l1.05 1.822 4 6.928a5.068 5.068 0 004.39 2.534h10.103a5.54 5.54 0 003.115-.96c.019-.033 1.357-2.381.481-3.898z"
        fill="url(#a)"
      />
      <path
        d="M30.736 12.864l-4.914-8.511a5.537 5.537 0 00-1.805-1.89c-.11-.032-3.005-.866-4.02.89l-3.891 6.74 4.801 8.315 3.71 6.426c.876 1.517-.463 3.865-.481 3.898a5.538 5.538 0 001.686-1.812l.736-1.275 4.178-7.236a5.544 5.544 0 000-5.545z"
        fill="url(#b)"
      />
      <path
        d="M21.02 1.58h-9.828a5.544 5.544 0 00-4.8 2.773l-4.915 8.511a5.538 5.538 0 00-.739 2.654c.247 2.037 3.11 2.89 3.11 2.89h7.457l4.802-8.316 3.89-6.739c1.015-1.757 3.91-.923 4.02-.89a5.539 5.539 0 00-2.996-.882z"
        fill="url(#c)"
      />
    </svg>
  );
};

export default Logo;
