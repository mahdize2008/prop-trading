import Cookies from "js-cookie";
import {authFetch} from "../fetch";

export async function loginUser(data) {
  const res = await authFetch.post("accounts/login/", data)
  .then(res=>res)
  .catch(err=>{console.log(err)}
  );
  if (res?.status === 200) {
      Cookies.set("token", res.data.access, { expires: 7 });
  }
  return {res:res.data , status:res.status};
}

