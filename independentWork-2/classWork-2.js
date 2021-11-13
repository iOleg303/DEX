// const workerExample = {
//   name: "Igor",
//   age: 34,
//   address: {
//     street: "Lenin",
//     house: 23,
//     apartments: 16
//   },
//   userBonuses: {
//     2019: 700,
//     2020: 750,
//     2021: 100
//   },
//   wage: 500,
//   hobby: ["chess", "basketball"]
// };

// TODO: Отсортировать пользователей по уровню зп
// Вывод: отсортированные зп через запятую
export const getSortWage = (data) => {};

// TODO: Вывести зп всех пользователей
// Число (сумма всех зп)
export const getWageSum = (data) => {};

// TODO: Вывести пользователя с женским именем, знаем, что имя Ekaterina
export const getWomenName = (data) => {};

// TODO: Вывести самого молодого и самого старшего пользователя
// Вывод: "Самого младшего пользователя зовут {...} и ему ${age}.
// Самого старшего пользователя зовут {...} и ему ${age}."
export const getMinMaxUserAge = (data) => {};

// TODO: Вывести кол-во пользователей, играющих в баскетбол
// Элемент выглядит как "basketball"
// Вывод: "В баскетбол играют {число} пользователей"
export const getBasketPlayers = (data) => {};

//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
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
}
