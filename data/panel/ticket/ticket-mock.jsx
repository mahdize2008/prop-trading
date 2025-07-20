const ticketMockData = () => {
  const ticketMock = {
    id:1,
    chats:[
        {
            author:"amir hoseini",
            name:"امیر حسینی",
            data:"۱۴۰۲/۰۷/۰۵  ",
            massage:"تیکت شما با موفقیت ثبت شد. لطفاً منتظر پاسخ تیم پشتیبانی ما باشید.",
            time:"۱۴:۳۰"
        },
        {
            author:"admin",
            name:"ادمین",
            data:"۱۴۰۲/۰۷/۰۵  ",
            massage:"تیکت شما در حال بررسی است. ما به زودی به شما پاسخ خواهیم داد.",
            time:"۱۴:۳۰"
        },
        {
            author:"amir hoseini",
            name:"امیر حسینی",
            data:"۱۴۰۲/۰۷/۰۵  ",
            massage:"تیکت شما با موفقیت ثبت شد. لطفاً منتظر پاسخ تیم پشتیبانی ما باشید.",
            time:"۱۴:۳۰"
        },
        {
            author:"admin",
            name:"ادمین",
            data:"۱۴۰۲/۰۷/۰۵  ",
            massage:"تیکت شما در حال بررسی است. ما به زودی به شما پاسخ خواهیم داد.",
            time:"۱۴:۳۰"
        }
    ],
    number: "#۲۳۴۵",
    text: "مشکلات در تراکنش‌های مالی",
    date: "۳ روز پیش",
    status: "success",
    status_text: "بسته",
  };

  return { ticketMock };
};

export default ticketMockData