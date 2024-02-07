import Link from "next/link";
import React from "react";

export default function MenuItem({ address, title, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        <span className="text-2xl sm:hidden"> {Icon}</span>
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}
