import Link from "next/link";
import React from "react";

const DashSider = () => {
  return (
    <div className="p-[20px] bg-gray-300 w-[220px] h-[100vh] transition-all duration-[350ms]">
      <Link href="/dashboard" className="text-[22px] font-semibold">
        <div>Home</div>
      </Link>
      <div className="pt-[90px] flex justify-center items-start flex-col gap-4">
        <Link href="/dashboard/feed" className="text-[22px] font-semibold">
          <div>Feed</div>
        </Link>
        <Link href="/dashboard/post" className="text-[22px] font-semibold">
          <div>Posts</div>
        </Link>
        <Link href="/dashboard/results" className="text-[22px] font-semibold">
          <div>Results</div>
        </Link>
      </div>
    </div>
  );
};

export default DashSider;
