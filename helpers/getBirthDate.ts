export const getBirthDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    });
};
