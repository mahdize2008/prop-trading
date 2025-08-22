"use client"

const setStatus = (status="closed") => {
  const statusList = {
    answered: {
      status: "success",
      status_text: "پاسخ داده شده",
    },
    closed: {
      status: "danger",
      status_text: "بسته شده",
    },
    open: {
      status: "info",
      status_text: "باز",
    },
    pending: {
      status: "warning",
      status_text: "درحال پردازش",
    },
  };

  return statusList[status]
};
export default setStatus