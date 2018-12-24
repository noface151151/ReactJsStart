import * as ValidationFunction from './validationFunction';

 const validationTypes = {
    Required: {
        fucntionValidate: ValidationFunction.IsRequiredValidate
    },
    MaxLength:{
        fucntionValidate: ValidationFunction.MaxLenghtValidate
    },
    MinLenght:{
        fucntionValidate: ValidationFunction.MinLenghtValidate
    },
    GreaterThanValue:{
        fucntionValidate: ValidationFunction.GreaterThanValueValidate
    },
    LessThanValue:{
        fucntionValidate: ValidationFunction.LessThanValueValidate
    },
    PhoneNumber:{
        fucntionValidate: ValidationFunction.PhoneNumberValidate
    },
    Email:{
        fucntionValidate: ValidationFunction.EmailValidate
    },
    Document:{
        fucntionValidate: ValidationFunction.DocumentValidate
    },
    DayNotLessThanNow:{
        fucntionValidate: ValidationFunction.DayNotLessThanNowValidate
    },
    CompareDate:{
        fucntionValidate: ValidationFunction.CompareDateValidate
    },
}
export default validationTypes;
