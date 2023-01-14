export const findDayInTimeTable = (arr, theDay) => {
  const foundDay = arr.find((element) => element.day === theDay);
  console.log("foundDay: ", foundDay);
  if (foundDay !== undefined) {
    return (
      <span className="p-1 font-semibold border rounded bg-slate-100">
        <span className="text-red-500">{foundDay.timeFrom}</span>
        <span> ~ </span>
        <span className="text-green-500">{foundDay.timeTo}</span>
      </span>
    );
  }
};
