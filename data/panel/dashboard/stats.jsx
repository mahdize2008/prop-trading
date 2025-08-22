const dashboardStatsData = ({ income = 0, challenge_count = 0,referral }) => {
  const statOne = [
    {
      name: "درامد شما تا کنون",
      icon: "icon-dollar",
      amount: `${income} $`,
      color: "neutral-dark",
    },
    {
      name: "چالش‌های شرکت کرده",
      icon: "icon-thunder",
      amount: `${challenge_count} چالش`,
      color: "neutral-dark",
    },
  ];
  const statTwo = [
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

  return { statOne, statTwo };
};
export default dashboardStatsData;
