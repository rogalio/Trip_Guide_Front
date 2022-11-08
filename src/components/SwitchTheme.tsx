import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Switch from "@mui/material/Switch";

const SwitchTheme = () => {
  // toogle theme
  const [isDarkmode, setIsDarkMode] = useState(
    () => localStorage.theme === "dark"
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkmode);
  };
  useEffect(() => {
    const html = window.document.documentElement;
    const prevTheme = isDarkmode ? "light" : "dark";
    html.classList.remove(prevTheme);
    const nextTheme = isDarkmode ? "dark" : "light";
    html.classList.add(nextTheme);
  }, [isDarkmode]);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="flex ">
      <div className="hidden px-2  md:flex bg-c7 rounded-2xl dark:bg-c3 drop-shadow">
        {isDarkmode ? (
          <SunIcon className="w-4 text-c5 " />
        ) : (
          <MoonIcon className="w-4 text-c4 " />
        )}
        <Switch
          {...label}
          onChange={toggleDarkMode}
          color="default"
          size="small"
        />
      </div>
    </div>
  );
};

export default SwitchTheme;
