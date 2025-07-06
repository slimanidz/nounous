import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const StarClass = (props) => {
  const { n } = props;
  return (
    <div className="flex gap-x-1">
      <StarIcon
        className={
          n >= 1
            ? "h-3 md:h-5 w-3 md:w-5  text-indigo-600"
            : "h-3 md:h-5 w-3 md:w-5 text-slate-400"
        }
      />
      <StarIcon
        className={
          n >= 2
            ? "h-3 md:h-5 w-3 md:w-5  text-indigo-600"
            : "h-3 md:h-5 w-3 md:w-5 text-slate-400"
        }
      />
      <StarIcon
        className={
          n >= 3
            ? "h-3 md:h-5 w-3 md:w-5  text-indigo-600"
            : "h-3 md:h-5 w-3 md:w-5 text-slate-400"
        }
      />
      <StarIcon
        className={
          n >= 4
            ? "h-3 md:h-5 w-3 md:w-5  text-indigo-600"
            : "h-3 md:h-5 w-3 md:w-5 text-slate-400"
        }
      />
      <StarIcon
        className={
          n >= 5
            ? "h-3 md:h-5 w-3 md:w-5  text-indigo-600"
            : "h-3 md:h-5 w-3 md:w-5 text-slate-400 "
        }
      />
      <span className="text-[8px] md:text-[10px] text-slate-500">*{n}</span>
    </div>
  );
};

export default StarClass;
