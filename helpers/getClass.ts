import { getAge } from "./getAge";

export const getClass = (age: string, married: boolean) => {
    const memberAge = getAge(age);
    if (memberAge > 0 && memberAge <= 4) {
        return "Cordeirinhos";
    } else if (memberAge > 4 && memberAge <= 7) {
        return "Herança do Pai";
    } else if (memberAge > 7 && memberAge <= 11) {
        return "Alegria";
    } else if (memberAge > 11 && memberAge <= 16) {
        return "Heróis da Fé";
    } else if (memberAge > 16 && !married) {
        return "Discípulos do Pai";
    } else {
        return "Koinonia";
    }
};
