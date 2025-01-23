"use client";
import React from "react";

export default function Home() {
  const token = process.env.NEXT_PUBLIC_SOMETHING_TOKEN;
  console.log("TOKEN:", token);
  return (
    <>
      {/* Full width global container */}
      <div className="min-h-screen w-full bg-white dark:bg-zinc-950">
        {/* Full width component */}
        <div
          className={`bg-mesh-background-light dark:bg-mesh-background-dark h-screen w-full bg-cover bg-center`}
        >
          {/* Top component content */}
          <div className="flex h-[24rem] flex-col justify-center text-center font-sans text-2xl text-neutral-900 dark:text-white">
            <p>Hello world!</p>
            <p className="text-lg">React template by Riku</p>
          </div>
        </div>
        {/* Responsive width component */}
        <div className="mx-auto max-w-screen-xl px-4 xl:px-0">
          {/* Components */}
        </div>
      </div>
    </>
  );
}
