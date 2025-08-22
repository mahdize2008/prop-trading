const affilateStatData = (referral) => {
  const stats = [
    {
      name: "تعداد افراد معرفی‌شده",
      icon: "icon-user",
      amount: referral?.list?.referral_count,
    },
    {
      name: "کمیسیون زیرمجموعه‌ها",
      icon: "icon-dollar",
      amount: referral?.list?.referral_commission,
    }
  ];

  return {stats};
};
export default affilateStatData;
