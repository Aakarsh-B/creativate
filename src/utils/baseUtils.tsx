export const StaticPath = (url: string) => {
	const staticPath = process.env.STATIC_URL;
    let staticUrl = staticPath + url;
    
	return staticUrl;
};

export class FormUtils {
    handleCommonErrors(errorType: any, type = '') {
        if (errorType == 'this_field_is_required') {
            return this.bringErrorMessage(
                "Fill or spill! This field's a must."
            );
        } else if (errorType == 'this_field_cant_be_empty') {
            return this.bringErrorMessage(
                'This field cannot be empty'
            );
        } else if (errorType == 'please_enter_your_email') {
            return this.bringErrorMessage(
                'Double-check that email, please!'
            );
        } else if (errorType == 'invalid_email_format') {
            return this.bringErrorMessage(
                'Double-check that email, please!'
            );
        } else if (errorType == 'phone_number_is_not_valid') {
            return this.bringErrorMessage(
                'Phone number is not valid.'
            );
        } else if (errorType == 'please_enter_valid_phone_number') {
            return this.bringErrorMessage(
                'Please enter valid phone number'
            );
        } else if (errorType == 'invalid_email_address') {
            return this.bringErrorMessage(
                'Double-check that email, please!'
            );
        } else if (errorType == 'cannot_start_or_end_with_hyphen') {
            return this.bringErrorMessage(
                'Cannot start or end with hyphen'
            );
        } else if (errorType == 'invalid_name') {
            return this.bringErrorMessage(
                'Invalid name'
            );
        } else if (errorType == 'invalid_special_characters') {
            return this.bringErrorMessage(
                `Name should not contain ${type}`
            );
        }
    }

    bringErrorMessage(
        en = ''
    ) {

        let errorMessage = en;
        return errorMessage;
    }

    handleCommonFormValidation(
        passUserData: any,
        passFormField: any
    ) {

        let val: any = '';

        let countError = 0;
        let errorValue: any = '';
        let retrnData: any = {
            errorCount: -1,
            errorData: {},
        };

        for (val in passFormField) {
            let formFieldValue =
                typeof passUserData[val] == 'boolean'
                    ? passUserData[val]
                    : typeof passUserData[val] == 'object' ? passUserData[val] : passUserData[val]?.trim();
            // Name validation
            if (
                val == 'name' ||
                val == 'summary_project' 
            ) {
                if (!formFieldValue) {
                    errorValue = this.handleCommonErrors(
                        'this_field_is_required'
                    );
                    countError += 1;
                    retrnData.errorData[passFormField[val]] = errorValue;
                    retrnData.errorData['deleteKey'] = passFormField[val];
                } else if (val == 'summary_project') {
                    const words = formFieldValue.split(/\s+/);
                    const count = words.filter((word: any) => word !== '').length;
                    if(count <= 50 ) {
                        errorValue = "50 words, please! Let's not skimp on the details.";
                        countError += 1;
                        retrnData.errorData[passFormField[val]] = errorValue;
                        retrnData.errorData['deleteKey'] = passFormField[val];
                    } else if (count >= 150) {
                        errorValue = 'Words Exceeded';
                        countError += 1;
                        retrnData.errorData[passFormField[val]] = errorValue;
                        retrnData.errorData['deleteKey'] = passFormField[val];
                    }
                }
            }

            // Number validation
            if (val == 'phone_number') {
                let trimPhoneNnumber: any = formFieldValue?.trim();
                let userNumberSplit: any = '';
                if (trimPhoneNnumber?.length > 0) {
                    userNumberSplit = trimPhoneNnumber.replace(/\D/g, '');
                }
                if (!formFieldValue) {
                    errorValue = this.handleCommonErrors(
                        'this_field_is_required'
                    );
                    countError += 1;
                    retrnData.errorData[passFormField[val]] = errorValue;
                    retrnData.errorData['deleteKey'] = passFormField[val];
                } else if (
                    !(
                        userNumberSplit.length >= 8 &&
                        userNumberSplit.length <= 25
                    ) ||
                    !formFieldValue.match(/^[0-9\-\(\)\s\+]+$/)
                ) {
                    errorValue = this.handleCommonErrors(
                        'please_enter_valid_phone_number'
                    );
                    countError += 1;
                    retrnData.errorData[passFormField[val]] = errorValue;
                    retrnData.errorData['deleteKey'] = passFormField[val];
                }
            }

            // Email validation
            if (val == 'email') {
                if (!formFieldValue) {
                    errorValue = this.handleCommonErrors(
                        'please_enter_your_email'
                    );
                    countError += 1;
                    retrnData.errorData[passFormField[val]] = errorValue;
                    retrnData.errorData['deleteKey'] = passFormField[val];
                } else if (
                    !formFieldValue.match(
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,10}$/
                    )
                ) {
                    errorValue = this.handleCommonErrors(
                        'invalid_email_format'
                    );
                    countError += 1;
                    retrnData.errorData[passFormField[val]] = errorValue;
                    retrnData.errorData['deleteKey'] = passFormField[val];
                }
            }

        }

        retrnData.errorCount = countError;
        return retrnData;
    }
}