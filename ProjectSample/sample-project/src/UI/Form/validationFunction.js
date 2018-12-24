const IsRequiredValidate = (param) => {
 //   debugger;
    if (param.data.length < 1) {
        return resultInvalid('Vui lòng nhập thông tin')
    }
    return resultValid();
}

const MaxLenghtValidate = (param) => {
    if (param.length > param.lengthCompare) {
        return resultInvalid('Thông tin không được quá ' + param.lengthCompare + ' ký tự')

    }
    return resultValid();
}

const MinLenghtValidate = (param) => {
    if (param.data.length < param.lengthCompare) {
        return resultInvalid('Thông tin phải lớn hơn ' + param.lengthCompare + ' ký tự')
    }
    return resultValid();
}

const GreaterThanValueValidate = (param) => {
    if (isNaN(param.data)) {
        return resultInvalid('Thông tin phải là số')
    }
    if (Number(param.data) < param.valueCompare) {
        return resultInvalid('Giá trị phải lớn hơn ' + param.valueCompare)
    }
    return resultValid();
}

const LessThanValueValidate = (param) => {
    if (isNaN(param.data)) {
        return resultInvalid('Thông tin phải là số')
    }
    if (Number(param.data) > param.valueCompare) {
        return resultInvalid('Giá trị phải nhỏ hơn ' + param.valueCompare)
    }
    return resultValid();
}

const PhoneNumberValidate = (param) => {
    // const checkData = IsRequiredValidate(data);
    // if (checkData.isValid == false) {
    //     return checkData;
    // }
    var arrayPrefixMobileNumber =  ["08", "083", "086", "0868", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "034", "032", "033", "034", "035", "036", "037", "038", "039", "070", "079", "077", "076", "078", "083", "084", "085", "081", "082", "056", "058", "059"];
    var arrayPrefixNumber = ["0200", "0201", "0202", "0203", "0204", "0205", "0206", "0207", "0208", "0209", "0210", "0211", "0212", "0213", "0214", "0215", "0216", "0217", "0218", "0219", "0220", "0221", "0222", "0223", "0224", "0225", "0226", "0227", "0228", "0229", "0230", "0231", "0232", "0233", "0234", "0235", "0236", "0237", "0238", "0239", "0240", "0241", "0242", "0243", "0244", "0245", "0246", "0247", "0248", "0249", "0250", "0251", "0252", "0253", "0254", "0255", "0256", "0257", "0258", "0259", "0260", "0261", "0262", "0263", "0264", "0265", "0266", "0267", "0268", "0269", "0270", "0271", "0272", "0273", "0274", "0275", "0276", "0277", "0278", "0279", "0280", "0281", "0282", "0283", "0284", "0285", "0286", "0287", "0288", "0289", "0290", "0291", "0292", "0293", "0294", "0295", "0296", "0297", "0298", "0299"];
    var strNumber = param.data;
    //strNumber = strNumber.replace(/-/g, '');
    var regEx = new RegExp(/^[0-9]+$/);

    if (regEx.test(strNumber.trim())) {
        if (strNumber !== "") {
            if ((strNumber.trim().length === 10 || strNumber.trim().length === 11) && regEx.test(strNumber.trim())) {
                var strPrefixNumber = strNumber.replace('-', '');
                var flagPrefix = false;
                var flagNumber = false;
                for (let j = 0; j < arrayPrefixNumber.length; j++) {
                    if (strPrefixNumber.startsWith(arrayPrefixNumber[j])) {
                        flagPrefix = true;
                    }
                    if (strPrefixNumber.startsWith(arrayPrefixNumber[j]) && strNumber.trim().length === 11) {
                        flagNumber = true;
                    }
                }
                for (let j = 0; j < arrayPrefixMobileNumber.length; j++) {
                    if (strPrefixNumber.startsWith(arrayPrefixMobileNumber[j])) {
                        flagPrefix = true;
                    }
                    if ((strPrefixNumber.startsWith(arrayPrefixMobileNumber[j]) && strNumber.trim().length === 10 && arrayPrefixMobileNumber[j].length === 3) || (strPrefixNumber.startsWith(arrayPrefixMobileNumber[j]) && strNumber.trim().length === 11 && arrayPrefixMobileNumber[j].length === 4)) {
                        flagNumber = true;
                    }
                }
                if (!flagPrefix) {
                    return resultInvalid("Đầu số điện thoại không đúng.")
                } else if (!flagNumber) {
                    return resultInvalid("Điện thoại không đúng định dạng.")
                }
                return resultValid();
            } else {
                return resultInvalid("Điện thoại không đúng định dạng (10 hoặc 11 số).")
            }
        }
    } else {
        return resultInvalid("Điện thoại không được nhập chữ cái và kí tự đặc biệt")
    }
    return resultValid();
}

const EmailValidate = (param) => {
    // const checkData = IsRequiredValidate(data);
    // if (checkData.isValid == false) {
    //     return checkData;
    // }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(param.data.toLowerCase())) {
        return resultValid();
    }
    return resultInvalid('Email không đúng định dạng');
}

const DocumentValidate = (param) => {
    // const checkData = IsRequiredValidate(data);
    // if (checkData.isValid == false) {
    //     return checkData;
    // }
    //CMND
    var length = param.data.length;
    var regEx = new RegExp(/^[0-9]*$/);
    if (param.type === 1) {
        if (regEx.test(param.data)) {
            if (length === 9 || length === 12) {
                return resultValid();
            } else {
                return resultInvalid("Số CMND phải là 9 hoặc 12 số");
            }
        } else {
            return resultInvalid("Số CMND không được nhập chữ cái và kí tự đặc biệt");
        }
    }
    //Căn cước
    else {
        if (regEx.test(param.data)) {
            if (length === 12) {
                return resultValid();
            } else {
                return resultInvalid("Thẻ căn cước phải là 12 số");
            }
        } else {
            return resultInvalid("Thẻ căn cước không được nhập chữ cái và kí tự đặc biệt");
        }
    }
}

const DayNotLessThanNowValidate = (param) => {
    var ToDate = new Date();
    var date = new Date(param.data);
    if (typeof date === 'undefined') {
        return resultValid();
    }
    ToDate.setHours(0,0,0,0);
    date.setHours(0,0,0,0);
    if (date > ToDate) {
        return resultInvalid("Ngày không được lớn hơn ngày hiện tại");
    }
    return resultValid();
}

const CompareDateValidate = (param) => {
    var checkTodate = new Date(param.todate);
    if (typeof checkTodate === 'undefined') {
        return resultValid();
    }
    var checkFromdate = new Date(param.fromdate);
    if (typeof checkFromdate === 'undefined') {
        return resultInvalid('Ngày bắt đầu không hợp lệ');
    }
    checkFromdate.setHours(0,0,0,0);
    checkTodate.setHours(0,0,0,0);
    if(checkFromdate>checkTodate){
        return resultInvalid('Ngày bắt đầu phải nhỏ hơn hoặc bằng ngày kết thúc');
    }
    return resultValid();
}
const resultInvalid = (message) => ({
    isValid: false,
    message: message
})

const resultValid= () => ({
    isValid: true,
    message: ''
})

export {
    IsRequiredValidate,
    MaxLenghtValidate,
    MinLenghtValidate,
    GreaterThanValueValidate,
    LessThanValueValidate,
    PhoneNumberValidate,
    EmailValidate,
    DocumentValidate,
    DayNotLessThanNowValidate,
    CompareDateValidate
}