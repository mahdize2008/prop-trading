import moment from "moment-jalaali";

export function convertToJalali(date) {
  if (!date) {
    return "-";
  }
  return moment(date).locale("fa").format("jYYYY/jMM/jDD");
}
