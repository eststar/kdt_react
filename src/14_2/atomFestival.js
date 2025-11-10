import { atom } from "jotai";

export const selDistrictAtom = atom();
export const festivalFetchData = atom(async () => {
    const apiKey = import.meta.env.VITE_PUBLICDATA_API_KEY;
    const baseUrl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr"
        + "?resultType=json";
    const url = `${baseUrl}&serviceKey=${apiKey}`;
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data.getFestivalKr.item;
    } catch (error) {
        console.log(error);
    }
});