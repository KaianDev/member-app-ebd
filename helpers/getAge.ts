export const getAge = (age: string) => {
    const currentDate = new Date().getTime();
    const memberDate = new Date(age).getTime();
    const diff = currentDate - memberDate;
    let year = 1000 * 60 * 60 * 24 * 365;
    const ageMember = Math.floor(diff / year);
    return ageMember;
};
