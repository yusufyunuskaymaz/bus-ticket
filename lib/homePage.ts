import { fetchData } from "@/app/home/page";
import { toastWarnNotify } from "@/helpers/Toastify";
import { ISeferler, IValues } from "@/types";

export const getData = async (data:IValues,setSeferler:(seferler: ISeferler[]) => void) => {
    const res = await fetchData(data);
    if (res.seferler[0]?.message) {
      toastWarnNotify(res.seferler[0]?.message);
      setSeferler([]);
      return;
    }
    setSeferler(res.seferler);
  };

  export const handleSubmit = (data:any,setIsDataFetched:any) => {
    if (!data.toWhere || !data.fromWhere || !data.date) {
      toastWarnNotify("Lütfen bütün alanları doldurun...");
      return;
    }
    setIsDataFetched(true);

    window.scroll({
      top: 500,
      behavior: "smooth",
    });
  };