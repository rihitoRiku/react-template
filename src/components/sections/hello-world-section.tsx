"use client"
import React from "react";

export default function HelloWorldSection() {
  return (
    <div>
      {/* Full width global container */}
      <div className="min-h-screen w-full bg-white dark:bg-neutral-800">
        {/* Top component content */}
        <div className="flex h-[24rem] flex-col justify-center text-center font-sans text-2xl text-neutral-900 dark:text-white">
          <p>Hello world!</p>
          <p className="text-lg">React template by Riku</p>
        </div>
      </div>
      {/* Responsive component container */}
      <div className="mx-auto max-w-screen-xl px-4 xl:px-0">
        {/* Your components */}
      </div>
    </div>
  );
}
