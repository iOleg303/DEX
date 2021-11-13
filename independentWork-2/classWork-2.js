/TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
export const getUsersAddress = (data) => {
    const arr = data.filter((e) => isFinite(e.address.street.slice(0,1)));
    let address = '';
    let names = '';
    arr.forEach(element => {
        address += element.address.street + ", ";
        names += element.name + ", ";
    });
    address = address.slice(0,-2) + ' ';
    names = names.slice(0,-2) + '.';
    return "По адресу " + address + "живут пользователи " + names;
};

//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (data) => {
    const arr = data.map((el) => [el.name,Object.values(el.userBonuses).reduce((sum,curr) => sum += curr)*2]);
    let names = '';
    let bonuses = '';
    arr.forEach((el) => {
        names += el[0] + ', ';
        bonuses += el[1] + ', ';
    });
    names = names.slice(0,-2) + ' ';
    bonuses = bonuses.slice(0,-2);
    return `Пользователи ${names} получат соответственно ${bonuses} бонусов.`;
};
