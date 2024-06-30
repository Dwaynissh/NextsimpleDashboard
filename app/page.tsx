import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Link href="/login">
        <button className="py-4 px-4 bg-red-500 rounded-lg font-semibold text-white">
          hello
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
