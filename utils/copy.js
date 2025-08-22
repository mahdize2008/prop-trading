"use client";

import toast from "react-hot-toast";

const useCopy = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("کپی شد");
};

export default useCopy