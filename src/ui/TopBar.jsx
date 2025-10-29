import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function TopBar() {
  const [title, setTitle] = useState("");
  const location = useLocation();
  const pageTittle = location.pathname.replace("/", "");
  useEffect(() => {
    if (pageTittle.includes("-")) {
      const newTitle = pageTittle.replace("-", " ");
      setTitle(newTitle);
    } else {
      setTitle(pageTittle);
    }
  }, [location, pageTittle]);

  return (
    <div className="flex items-center gap-10 w-full ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>
      </div>
      <div>
        <h1 className="flex text-3xl gap-7 items-center font-semibold">
          Student Help <span>|</span> {title}
        </h1>
      </div>
    </div>
  );
}

export default TopBar;
