class PeselValidator {
    constructor (pesel) {
        this.pesel = pesel;
    }

    static validatePesel(pesel) {
        if (pesel.length <= 5) {
            return {
                isValid: false,
                errorMessage: ""
            };
        }
        if (pesel.length > 5 && pesel.length < 11) {
            return {
                isValid: false,
                errorMessage: "Zbyt krótki numer"
            };
        }

        if (pesel.length > 11) {
            return {
                isValid: false,
                errorMessage: "Zbyt długi numer"
            }
        }

        let aInt = [];
        for (let i = 0; i < 11; i++)
        {
            aInt[i] = parseInt(pesel.substring(i, i + 1));
            if (isNaN(aInt[i])) {
                return {
                    isValid: false,
                    errorMessage: "Dozwolone znaki: 0-9"
                };
            }
        }

        let wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
        let sum = 0;
        for (let i = 0; i < 11; i++)
            sum += wagi[i] * aInt[i];
        if ((sum % 10) !== 0) {
            return {
                isValid: false,
                errorMessage: "Numer nieprawidłowy"
            };
        }

        var year = 1900+aInt[0]*10+aInt[1];
        if (aInt[2]>=2 && aInt[2]<8)
            year+=Math.floor(aInt[2]/2)*100;
        if (aInt[2]>=8)
            year-=100;

        var month = (aInt[2]%2)*10+aInt[3];
        var day = aInt[4]*10+aInt[5];

        function checkDate(d,m,y) {
            var dt = new Date(y, m-1, d);
            return dt.getDate() === d && dt.getMonth() === m-1 && dt.getFullYear() === y;
        }

        if (!checkDate(day, month, year)) {
            return {
                isValid: false,
                errorMessage: "Wygenerowana data jest nieprawidłowa"
            };
        }

        let gender = (aInt[9] % 2 === 1) ? "M" : "F";

        month = month < 10 ? "0" + month : month;

        return {
            isValid: true,
            errorMessage: "",
            date: {
                day: day,
                month: month,
                year: year
            },
            gender: gender
        };
    }
}

export default PeselValidator;