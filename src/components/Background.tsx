import React from "react";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full dark:bg-black overflow-x-hidden">
      {/* Light Mode Background */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Dark Mode Background */}
      <div className="absolute inset-0 hidden dark:block w-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0 w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Radial Gradient */}
        <div className="absolute left-1/2 top-[-10%] h-[1000px] w-[1000px] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
};

export default Background;
