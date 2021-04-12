const getProperties = () => {
    const program1InputPro = document.getElementById("program1InputPro").value;
    const program1InputVal = document.getElementById("program1InputVal").value;
    const splitArray = program1InputVal.split(" ");
    const array1 = program1InputPro.split(" ");
    var object = {};
    for (i = 0; i < array1.length; i++) {
        const currentIndex = array1[i];
        object[currentIndex] = splitArray[i];
    }
    const getKeys = Object.keys(object);
    var objJson = JSON.stringify(object);
    document.getElementById("program1Output").innerHTML = `Properties of Object ${objJson} = ${getKeys}`;
}

const deleteProperty = () => {
    const program2InputPro = document.getElementById("program2InputPro").value;
    const program2InputVal = document.getElementById("program2InputVal").value;
    const delPro = document.getElementById("program2IDelPro").value;
    const delArray = delPro.split(" ");
    const splitArray2 = program2InputVal.split(" ");
    const array2 = program2InputPro.split(" ");
    var object2 = {};
    for (i = 0; i < array2.length; i++) {
        const currentIndex = array2[i];
        object2[currentIndex] = splitArray2[i];
    }
    const realObj = JSON.stringify(object2);
    delete object2[delArray];
    const afterDelPro = JSON.stringify(object2);
    document.getElementById("program2Output").innerHTML = `Before Deleting Propert Object = ${realObj} and After Deleting Selected Property Object = ${afterDelPro}`;
}

const getLenght = () => {
    const program3InputPro = document.getElementById("program3InputPro").value;
    const program3InputVal = document.getElementById("program3InputVal").value;
    const splitArray3 = program3InputVal.split(" ");
    const array3 = program3InputPro.split(" ");
    var object3 = {};
    for (i = 0; i < array3.length; i++) {
        const currentIndex1 = array3[i];
        object3[currentIndex1] = splitArray3[i];
    }
    document.getElementById("program3Output").innerHTML = Object.keys(object3).length;
}

const displayStatus = () => {
    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }];

    for (i = 0; i < library.length; i++) {
        var bookDetails = "'" + library[i].title + "'" + "by" + library[i].author + ".";
        if (library[i].readingStatus) {
            console.log("Already read " + bookDetails);
            document.getElementById("program4Output").innerHTML = "Go to Console For Answer";
        } else {
            console.log("You still need to read " + bookDetails);
        }
    }

}

const calCylinderVolume = () => {
    function cylinder(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    cylinder.prototype.volume = function () {
        var radius = this.radius;
        var height = this.height;
        var formula = Math.PI * radius * radius * height;
        return formula;
    }
    function getElements() {
        const height = parseFloat(document.getElementById("program5InputH").value);
        const radius = parseFloat(document.getElementById("program5InputR").value);
        var myCylinder = new cylinder(height, radius);
        var result = myCylinder.volume();
        return result;
    }
    document.getElementById("program5Output").innerHTML = getElements().toFixed(4);
}

const bubbleSort = () => {
    const program6Input1 = document.getElementById("program6Input").value;
    const program6Input = program6Input1.split(" ");
    for (i = 0; i < program6Input.length; i++) {
        for (j = i + 1; j < program6Input.length; j++) {
            if (parseInt(program6Input[i]) > parseInt(program6Input[j])) {
                var swapper = program6Input[i];
                program6Input[i] = program6Input[j];
                program6Input[j] = swapper;
            }
        }
    }
    document.getElementById("program6Output").innerHTML = program6Input;
}

const findSubset = () => {
    const program7Input = document.getElementById("program7Input").value;
    var subset = [];
    for (var i = 0; i < program7Input.length; i++) {
        for (var j = i + 1; j < program7Input.length + 1; j++) {
            subset.push(program7Input.slice(i, j));
        }
    }
    document.getElementById("program7Output").innerHTML = subset;
}

const createClock = () => {
    function currentTime() {
        this.currentDate = new Date();
        this.hours = this.currentDate.getHours();
        this.mint = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();
    }
    currentTime.prototype.run = function () {
        setInterval(this.update.bind(this), 1000);
    }
    currentTime.prototype.update = function () {
        this.updatTime(1);
        console.log(this.hours + ":" + this.mint + ":" + this.seconds);
    }
    currentTime.prototype.updatTime = function (sec) {
        this.seconds += sec;
        if (this.seconds >= 60) {
            this.mint++;
            this.seconds = 0;
        }
        if (this.mint >= 60) {
            this.hours++;
            this.mint = 0;
        }
        if (this.hours >= 60) {
            this.hours = 0;
        }
    }
    var clock = new currentTime();
    clock.run();
    document.getElementById("program8Output").innerHTML = "Go to Console";
}

const calculateAreaPerimeter = () => {
    class calculate {
        constructor(radius) {
            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius * this.radius;
        }
        perimeter() {
            return 2 * Math.PI * this.radius;
        }
    }
    var radiusInput = Number(document.getElementById("program9Input").value);
    var createNew = new calculate(radiusInput);
    console.log();
    console.log();
    document.getElementById("program9Output").innerHTML = `Area = ${createNew.area().toFixed(2)} Perimeter = ${createNew.perimeter().toFixed(2)}`
}

const sortObjectArray = () => {
    var library = [
        {
            title: 'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }];
    document.getElementById("program10Output").innerHTML = "Go to Console";
    var newobj = library.sort();
    newobj.sort(function (a, b) { return a.libraryID - b.libraryID });
    console.log(newobj);
}

const printMethhods = () => {
    function all_properties(o) {
        return Object.getOwnPropertyNames(o);
    }
    document.getElementById("program11Output").innerHTML = all_properties(Array)
}

const parseURL = () => {
    const program12Input = document.getElementById("program12Input").value;
    const createURL = new URL(program12Input);
    document.getElementById("program12Output").innerHTML = `Protocol = ${createURL.protocol}  </br> Domain = ${createURL.hostname} </br> Path = ${createURL.pathname} </br> Search = ${createURL.search}`;
}

const retrieveNames = () => {
    function allKeys(obj) {
        var keys = [];
        for (i in obj) keys.push(i);
        return keys;
    }

    function Student(name) {
        this.name = name;
    }
    Student.prototype.rollno = true;
    Student.prototype.section = true;
    document.getElementById("program13Output").innerHTML = allKeys(new Student());
}

const retrieveValues = () => {
    function getValues(obj) {
        return Object.values(obj);
    }
    console.log(getValues({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
}

const keyPairs = () => {
    function createKeyPairs(obj) {
        return Object.entries(obj);
    }
    console.log(createKeyPairs({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
}

const getCopy = () => {
    function getCopy(obj) {
        var copyObject = {};
        const getKeys = Object.keys(obj);
        const getVal = Object.values(obj);
        for (i = 0; i < getKeys.length; i++) {
            var currentIndexVal = getVal[i];
            copyObject[currentIndexVal] = getKeys[i];
        }
        return copyObject;
    }
    document.getElementById("program16Output").innerHTML = "Go to Console";
    console.log(getCopy({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
}

const check = () => {
    var object = {
        name: true,
        rollno: true,
        section: true,
        class: true,
    }
    document.getElementById("program17Output").innerHTML = "Go to Console";
    console.log(object.hasOwnProperty('rollno'));
}

const checkDatObj = () => {
    var is_date = function (input) {
        if (Object.prototype.toString.call(input) === "[object Date]")
            return true;
        return false;
    };

    console.log(is_date("October 13, 2014 11:13:00"));
    console.log(is_date(new Date()));
    console.log(is_date(new Date()));
    console.log(is_date([1, 2, 4, 0]));
    document.getElementById("program18Output").innerHTML = "Go to Console";
}

const passSeparator = () => {
    const separator = (sp) => {
        const getCurrentDate = new Date();
        const getdate = getCurrentDate.getDate();
        const getMonth = getCurrentDate.getMonth() + 1;
        const getYear = getCurrentDate.getFullYear();
        return getdate + sp + getMonth + sp + getYear;
    }
    document.getElementById("program19Output").innerHTML = `${separator("-")} <br/> ${separator("/")}`;
}

const getDays = () => {
    const getDaysFunction = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    const getMon = document.getElementById("getMonth").value;
    const getYea = document.getElementById("getYear").value;
    document.getElementById("program20Output").innerHTML = `${getDaysFunction(getYea, getMon)} Days`;
}

const getMont = () => {
    const montInEngLang = (month) => {
        const monthArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthArray[month - 1];
    }
    const mon = document.getElementById("getMonthInNumb").value;
    document.getElementById("program21Output").innerHTML = montInEngLang(mon);
}

const compareDate = () => {
    const compare_dates = (date1, date2) => {
        if (date1 > date2) return ("Date1 > Date2");
        else if (date1 < date2) return ("Date2 > Date1");
        else return ("Date1 = Date2");
    }
    document.getElementById("program22Output").innerHTML = "Go to Console";
    console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
    console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
    console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
}

const addMin = () => {
    var d = new Date();
    d.setTime(1414870200000);
    document.getElementById("program23Output").innerHTML = d;
}

const testweekend = () => {
    const getWeek = (date) => {
        const date1 = new Date(date);
        if (date1.getDay() == 6 || date1.getDay() == 0) {
            return "Weekend";
        }
    }
    document.getElementById("program24Output").innerHTML = "Go to Console";
    console.log(getWeek("2014,11,15"));
    console.log(getWeek('Nov 16, 2014'));
    console.log(getWeek('Nov 17, 2014'));
}

const getDiff = () => {
    const dateDiff = (dat1, dat2) => {
        const dt1 = new Date(dat1);
        const dt2 = new Date(dat2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
    const firstDate = document.getElementById("firstDate").value;
    const secondDate = document.getElementById("secondDate").value;
    document.getElementById("program25Output").innerHTML = dateDiff(firstDate, secondDate);
}

const getlastDay = () => {
    const get = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    const getYear1 = document.getElementById("getYear1").value;
    const getMont1 = document.getElementById("getMont1").value;
    document.getElementById("program27Output").innerHTML = `${get(getYear1, getMont1)} Days`;
}

const calculateYesterday = () => {
    const yesterday = (date1) => {
        const dt = new Date(date1);
        return new Date((dt.setDate(dt.getDate() - 1))).toString();
    }
    document.getElementById("program28Output").innerHTML = "Go to Console";
    console.log(yesterday(new Date()));
}

const getMaxDat = () => {
    function max_date(all_dates) {
        var max_dt = all_dates[0],
            max_dtObj = new Date(all_dates[0]);
        all_dates.forEach(function (dt, index) {
            if (new Date(dt) > max_dtObj) {
                max_dt = dt;
                max_dtObj = new Date(dt);
            }
        });
        return max_dt;
    }
    document.getElementById("program29Output").innerHTML = max_date(['2015/02/01', '2015/02/02', '2015/01/03']);
}

const getMinDat = () => {
    function min_date(all_dates) {
        var min_dt = all_dates[0],
            min_dtObj = new Date(all_dates[0]);
        all_dates.forEach(function (dt, index) {
            if (new Date(dt) < min_dtObj) {
                min_dt = dt;
                min_dtObj = new Date(dt);
            }
        });
        return min_dt;
    }
    document.getElementById("program30Output").innerHTML = min_date(['2015/02/01', '2015/02/02', '2015/01/03']);
}

const returnMintsToHoursAndMints = () => {
    const getMinutes = document.getElementById("getMinutes").value;
    let newVar = getMinutes;
    if (newVar >= 60) {
        var divide = parseInt(newVar / 60);
        newVar = newVar - (divide * 60);
        document.getElementById("program31Output").innerHTML = `${divide} Hours and ${newVar} Minutes`;
    }
    if (getMinutes < 60) {
        document.getElementById("program31Output").innerHTML = `${getMinutes} Minutes`;
    }
}

const returDaysOfYear = () => {
    const getYearForDays = document.getElementById("getYearForDays").value;
    if (getYearForDays % 4 == 0) {
        document.getElementById("program31Output").innerHTML = `${getYearForDays} Have 366 Days`;
    }
    else {
        document.getElementById("program31Output").innerHTML = `${getYearForDays} Have 365 Days`;
    }
}


const returNumberOfDays = () => {
    const daysFunction = (dt) => {
        const current = new Date(dt);
        const previous = new Date(dt.getFullYear(), 0, 1);
        return Math.ceil((current - previous + 1) / 86400000);
    }
    document.getElementById("program32Output").innerHTML = "Go to console";
    console.log(daysFunction(new Date(2015, 0, 15)));
    console.log(daysFunction(new Date(2015, 11, 14)));
}

const getQuarter = () => {
    const getDate = new Date(document.getElementById("getDate").value);
    const getMnth = getDate.getMonth() + 1;
    const getQuartFormula = Math.ceil(getMnth / 3);
    document.getElementById("program33Output").innerHTML = `${getQuartFormula}`
}


const convert = () => {
    const daysFunction = (dt) => {
        const current = new Date(dt);
        const previous = new Date(dt.getFullYear(), 0, 1);
        return Math.ceil((current - previous + 1) / 86400000);
    }
    document.getElementById("program34Output").innerHTML = "Go to console";
    console.log(daysFunction(new Date(2015, 0, 15)));
    console.log(daysFunction(new Date(2015, 11, 14)));
}

const calculateAge = () => {
    const getDateOfBirth = new Date(document.getElementById("getDateOfBirth").value);
    const currentDat = new Date();
    const calAgeFormula = currentDat.getFullYear() - getDateOfBirth.getFullYear();
    document.getElementById("program35Output").innerHTML = `You are ${calAgeFormula} Years Old`;
}

const getDay = () => {
    const newDate = new Date();
    const getcurrentDate = newDate.getDate();
    if (getcurrentDate < 10) {
        document.getElementById("program36Output").innerHTML = `0${getcurrentDate}`;
    }
    else {
        document.getElementById("program36Output").innerHTML = `${getcurrentDate}`;
    }
}

const getDayInText = () => {
    const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const getdayInNumber = new Date(2015, 10, 1);
    const getDay1 = getdayInNumber.getDay() + 6;
    document.getElementById("program37Output").innerHTML = daysArray[getDay1];
}

const getDayInFullText = () => {
    const daysArrayFullName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuarday'];
    const getdayInNumber = new Date(2015, 10, 1).getDay();
    document.getElementById("program38Output").innerHTML = daysArrayFullName[getdayInNumber];
}

const getDayInNumeric = () => {
    const getdaysInNumber = new Date().getDay() + 1;
    document.getElementById("program39Output").innerHTML = getdaysInNumber;
}

const getDayInEnglish = () => {
    function english_ordinal_suffix(dt) {
        return dt.getDate() + (dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th')));
    }
    dt = new Date();
    document.getElementById("program40Output").innerHTML = english_ordinal_suffix(dt);
}

const getWeekNumber = () => {
    const daysFunction = (dt) => {
        const current = new Date(dt);
        const previous = new Date(dt.getFullYear(), 0, 1);
        return Math.ceil(((current - previous + 1) / 86400000) / 7);
    }
    document.getElementById("program41Output").innerHTML = daysFunction(new Date());
}

const getMonthName = () => {
    Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    function full_month(dt) {
        return Date.longMonths[dt.getMonth()];
    }

    dt = new Date();
    document.getElementById("program42Output").innerHTML = (full_month(dt));
}

const getMonthInNumeric = () => {
    const newDate = new Date();
    const getcurrentMnth = newDate.getMonth() + 1;
    if (getcurrentMnth < 10) {
        document.getElementById("program43Output").innerHTML = `0${getcurrentMnth}`;
    }
    else {
        document.getElementById("program43Output").innerHTML = `${getcurrentMnth}`;
    }
}


const getMonthInShortWord = () => {
    Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function short_months(dt) {
        return Date.shortMonths[dt.getMonth()];
    }

    dt = new Date();
    document.getElementById("program44Output").innerHTML = (short_months(dt));
}

const getYear = () => {
    function full_year(dt) {
        return dt.getFullYear();
    }
    dt = new Date();
    document.getElementById("program45Output").innerHTML = full_year(dt);
}

const getShortFormYear = () => {
    function sort_year(dt) {
        return ('' + dt.getFullYear()).substr(2);
    }

    dt = new Date();
    document.getElementById("program46Output").innerHTML = sort_year(dt);
}

const getAnteMeridiem = () => {
    function lower_am_pm(dt) {
        return dt.getHours() < 12 ? 'am' : 'pm';
    }

    dt = new Date();
    document.getElementById("program47Output").innerHTML = lower_am_pm(dt);
}

const swatchInternetTime = () => {
    function internet_time(dt) {
        return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
    }

    dt = new Date();
    document.getElementById("program48Output").innerHTML = internet_time(dt);
}

const formatHour = () => {
    function hours_with_zeroes(dt) {
        return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
    }

    dt = new Date();
    document.getElementById("program49Output").innerHTML = hours_with_zeroes(dt);
}

const format24Hour = () => {
    function hours_without_zeroes(dt) {
        return dt.getHours();
    }

    dt = new Date();
    document.getElementById("program50Output").innerHTML = hours_without_zeroes(dt);
}

const getMinutes = () => {
    function minutes_with_leading_zeros(dt) {
        return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
    }

    dt = new Date();
    document.getElementById("program51Output").innerHTML = minutes_with_leading_zeros(dt);
}

const getUppercaseAnteMeridiem = () => {
    function upper_am_pm(dt) {
        return dt.getHours() < 12 ? 'AM' : 'PM';
    }

    dt = new Date();
    document.getElementById("program52Output").innerHTML = upper_am_pm(dt);
}

const getSeconds = () => {
    function seconds_with_leading_zeros(dt) {
        return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
    }

    dt = new Date();
    document.getElementById("program53Output").innerHTML = seconds_with_leading_zeros(dt);
}

const getTimeZone = () => {
    function seconds_with_leading_zeros(dt) {
        return '(' + ((new Date().toString()).split('('))[1];
    }

    dt = new Date();
    document.getElementById("program54Output").innerHTML = (seconds_with_leading_zeros(dt));
}

const find = () => {
    function daylights_savings(dt) {
        if (new Date() >= new Date(dt.getFullYear(), 2, 14) && new Date() <= new Date(dt.getFullYear(), 10, 7)) {
            return 'Date is in daylights savings time.'
        }
        else {
            return 'Date is Not in daylights savings time.'
        }
    }
    document.getElementById("program55Output").innerHTML = daylights_savings(new Date());
}

const getGreenwichTime = () => {
    const getTimezone = new Date().getTimezoneOffset() / 60;
    const getDiffInHours = '+' + '0' + (-getTimezone) + '00';
    document.getElementById("program56Output").innerHTML = getDiffInHours;
}

const getGreenwichTimeInSeconds = () => {
    const getTimezone = new Date().getTimezoneOffset() * 60;
    const getDiffInSeconds = (-getTimezone);
    document.getElementById("program57Output").innerHTML = getDiffInSeconds;
}

const addYears = () => {
    function add_years(dt, n) {
        return new Date(dt.setFullYear(dt.getFullYear() + n));
    }
    dt = new Date();
    document.getElementById("program58Output").innerHTML = add_years(dt, 10).toString();
}

const addWeeks = () => {
    function add_weeks(dt, n) {
        return new Date(dt.setDate(dt.getDate() + (n * 7)));
    }
    const getNumberOfWeeks = document.getElementById("getNumberOfWeeks").value;
    dt = new Date();
    document.getElementById("program59Output").innerHTML = add_weeks(dt, getNumberOfWeeks).toString();
}

const addMonths = () => {
    function add_months(dt, n) {
        return new Date(dt.setMonth(dt.getMonth() + n));
    }
    const getNumberOfMonths = parseInt(document.getElementById("getNumberOfMonths").value);
    dt = new Date();
    document.getElementById("program60Output").innerHTML = add_months(dt, getNumberOfMonths).toString();
}


const getDiffInMint = () => {
    function diff_minutes(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));

    }
    dt1 = new Date("October 13, 2014 11:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
    document.getElementById("program61Output").innerHTML = diff_minutes(dt1, dt2)
}

const getDiffInHours = () => {
    function diff_hours(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));
    }
    document.getElementById("program62Output").innerHTML = 'Go to Console';
    dt1 = new Date(2014, 10, 2);
    dt2 = new Date(2014, 10, 3);
    console.log(diff_hours(dt1, dt2));

    dt1 = new Date("October 13, 2014 08:11:00");
    dt2 = new Date("October 13, 2014 11:13:00");
    console.log(diff_hours(dt1, dt2));
}

const getDiffInDays = () => {
    const date_diff_indays = function (date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
    document.getElementById("program63Output").innerHTML = 'Go to Console';
    console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    console.log(date_diff_indays('12/02/2014', '11/04/2014'));
}

const getDiffInWeeks = () => {
    function diff_weeks(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        return Math.abs(Math.round(diff));
    }
    document.getElementById("program64Output").innerHTML = 'Go to Console';
    dt1 = new Date(2014, 10, 2);
    dt2 = new Date(2014, 10, 11);
    console.log(diff_weeks(dt1, dt2));

    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
    console.log(diff_weeks(dt1, dt2));
}


const getDiffInMonths = () => {
    function diff_months(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7 * 4);
        return Math.abs(Math.round(diff));
    }
    document.getElementById("program65Output").innerHTML = 'Go to Console';
    dt1 = new Date(2014, 10, 2);
    dt2 = new Date(2014, 10, 11);
    console.log(diff_months(dt1, dt2));

    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2014 11:13:00");
    console.log(diff_months(dt1, dt2));
}

const getDiffInYears = () => {
    function diff_years(dt2, dt1) {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365));

    }
    document.getElementById("program66Output").innerHTML = 'Go to Console';
    dt1 = new Date(2014, 10, 2);
    dt2 = new Date(2014, 10, 11);
    console.log(diff_years(dt1, dt2));

    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("October 19, 2017 11:13:00");
    console.log(diff_years(dt1, dt2));
}

const getWeekStartDate = () => {
    function startOfWeek(date) {
        var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }
    dt = new Date();
    document.getElementById("program67Output").innerHTML = startOfWeek(dt).toString();
}

const getWeekEndDate = () => {
    function endOfWeek(date) {
        var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -1 : 1);
        diff += 6;
        return new Date(date.setDate(diff));
    }
    dt = new Date(2021, 3, 14);
    document.getElementById("program68Output").innerHTML = endOfWeek(dt).toString();
}

const getMonthStartDate = () => {
    function startOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    dt = new Date()
    document.getElementById("program69Output").innerHTML = startOfMonth(dt).toString();
}

const getMonthEndDate = () => {
    function endOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth()+1, 0);
    }

    dt = new Date()
    document.getElementById("program70Output").innerHTML = endOfMonth(dt).toString();
}
