class ValidationUtils{

    static validTIN(tin){
        var result = false;
        if (typeof tin === 'number') {
            tin = tin.toString();
        } else if (typeof tin !== 'string') {
            tin = '';
        }
        if (!tin.length) {
            error.code = 1;
            error.message = 'ИНН пуст';
        } else if (/[^0-9]/.test(tin)) {
            error.code = 2;
            error.message = 'ИНН может состоять только из цифр';
        } else if ([10, 12].indexOf(tin.length) === -1) {
            error.code = 3;
            error.message = 'ИНН может состоять только из 10 или 12 цифр';
        } else {
            var checkDigit = function (tin, coefficients) {
                var n = 0;
                for (var i in coefficients) {
                    n += coefficients[i] * tin[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (tin.length) {
                case 10:
                    var n10 = checkDigit(tin, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(tin[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(tin, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(tin, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(tin[10])) && (n12 === parseInt(tin[11]))) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                error.code = 4;
                error.message = 'Неправильное контрольное число';
            }
        }
        return result;
    }

    static validatebic(bic, error) {
        var result = false;
        if (typeof bic === 'number') {
            bic = bic.toString();
        } else if (typeof bic !== 'string') {
            bic = '';
        }
        if (!bic.length) {
            error.code = 1;
            error.message = 'БИК пуст';
        } else if (/[^0-9]/.test(bic)) {
            error.code = 2;
            error.message = 'БИК может состоять только из цифр';
        } else if (bic.length !== 9) {
            error.code = 3;
            error.message = 'БИК может состоять только из 9 цифр';
        } else {
            result = true;
        }
        return result;
    }

    static validCorespondCheck(cc, error){
        var result = false;
	    if (typeof cc === 'number') {
		    cc = cc.toString();
	    } else if (typeof cc !== 'string') {
		    cc = '';
	    }
	    if (!cc.length) {
		    error.code = 1;
		    error.message = 'КПП пуст';
	    } else if (cc.length !== 9) {
		error.code = 2;
		error.message = 'КПП может состоять только из 9 знаков (цифр или заглавных букв латинского алфавита от A до Z)';
	    } else if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(cc)) {
		error.code = 3;
		error.message = 'Неправильный формат КПП';
    	} else {
		    result = true;
	    }
	    return result;
    }

    static validateMSRN(msrn, error) {
        var result = false;
        if (typeof msrn === 'number') {
            msrn = msrn.toString();
        } else if (typeof msrn !== 'string') {
            msrn = '';
        }
        if (!msrn.length) {
            error.code = 1;
            error.message = 'ОГРН пуст';
        } else if (/[^0-9]/.test(msrn)) {
            error.code = 2;
            error.message = 'ОГРН может состоять только из цифр';
        } else if (msrn.length !== 13) {
            error.code = 3;
            error.message = 'ОГРН может состоять только из 13 цифр';
        } else {
            var n13 = parseInt((parseInt(msrn.slice(0, -1)) % 11).toString().slice(-1));
            if (n13 === parseInt(msrn[12])) {
                result = true;
            } else {
                error.code = 4;
                error.message = 'Неправильное контрольное число';
            }
        }
        return result;
    }
}