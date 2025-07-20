import Stat from "./stat";

export default function StatWrap({ statList, className }) {
  return statList.map((item, index) => (
    <div className={className} key={index}>
      <Stat
        icon={item.icon}
        name={item.name}
        value={item.value}
        amount={item.amount}
        title={item?.title}
        hasLeftIcon={item?.hasLeftIcon}
        color={item?.color}
      />
    </div>
  ));
}
