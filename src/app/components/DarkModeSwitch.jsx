"use client";

import { CiLight, CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currentTheme === "light" ? (
          <CiDark
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:bg-amber-500"
          />
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:bg-amber-500"
          />
        ))}
    </div>
  );
}
