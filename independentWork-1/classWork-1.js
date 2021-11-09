const birthData = [
    ["Andrey Rumiantsev", "1995-10-07T08:13:51.376Z", "500"],
    ["Ivan Alexandrov", "1994-11-09T08:13:51.376Z", "8589"],
    ["Oleg Kravchenko", "1996-11-08T08:13:51.376Z", "850"],
    ["Evgenii Ponasenkov", "1982-03-13T08:13:51.376Z", "850"]
];

//премия для сотрудника в день рождения
const getHolidayPrizes = (fullName, birthday, salary) => {
    let nowDate = new Date();
    birthday = new Date(birthday);
    let birthdayDate = birthday.getDate();
    let birthdayMonth=birthday.getMonth();
    let daysEquals = nowDate.getDate()===birthdayDate;
    let monthEquals = nowDate.getMonth()===birthdayMonth;
    if(daysEquals && monthEquals){
        let sum = 0.1*salary+birthdayDate*birthdayMonth;
        let res = Math.round(sum/10)*10;
        console.log(sum);
        console.log(res);
        return res;
    }
};

for(let i = 0;i<birthData.length;i++){
    let fullName=birthData[i][0];
    let birthday=birthData[i][1];
    let salary=birthData[i][2];
    getHolidayPrizes(fullName,birthday,salary);
}