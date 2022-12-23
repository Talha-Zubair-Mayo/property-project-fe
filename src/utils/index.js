const CryptoJS = require("crypto-js");
import * as Yup from 'yup';

export const DataEncryption = (Data) => {
    // Encrypt
    const EncryptedText = CryptoJS.AES.encrypt(JSON.stringify(Data), process.env.REACT_APP_ENCRYPTION_KEY).toString();
    return EncryptedText;
}


export const registerValidationSchema = Yup.object().shape({

    email: Yup.string().email('Enter valid email').required('Email is Required'),
    password: Yup.string()
        .min(8, 'Password minimum length should be 8')
        .required('Password is Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password not matched')
        .required('Confrim Your Password'),
    phone: Yup.string().required('Phone is Required'),

});

export const profileValidationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Minimum Length Should Be 3').required('First Name is Required'),
    lastName: Yup.string().min(3, 'Minimum Length Should Be 3').required('Last Name is Required'),
    phone: Yup.string().min(3, 'Minimum Length Should Be 3').required('Phonee is Required'),
    company: Yup.string().min(3, 'Minimum Length Should Be 3').required('Company Name is Required'),
    address: Yup.string().min(3, 'Minimum Length Should Be 3').required('Address is Required'),
    about: Yup.string().min(3, 'Minimum Length Should Be 3').required('about  is Required')

});

export const resetPasswordValidationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Enter your current password '),
    password: Yup.string()
        .min(8, 'Password minimum length should be 8')
        .required('Password is Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords does not matched!")
        .required('This Field is Required')
});


export const loginValidationSchema = Yup.object().shape({
    userEmailPhone: Yup.string().required('This Field  is Required'),
    password: Yup.string()
        .min(8, 'Password minimum length should be 8')
        .required('Password is Required'),
    rememberMe: Yup.boolean().oneOf([true, false], 'Required').required('Select User Type'),
});



export const SocietiesValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    ownerName: Yup.string().required('Owner Name is Required'),
    address: Yup.string().required('address is Required'),
    managerName: Yup.string().required('Manager Name is Required'),
    // photo: Yup.array().min(1, "select at least 1 file"),
});


export const PhasesValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    ownerName: Yup.string().required('Owner Name is Required'),
    status: Yup.string().oneOf(['Active', 'InActive']).required('Status is Required'),
    society: Yup.string().required('Society is Required'),
});


export const verifyAccountSchema = Yup.object().shape({
    phoneOtp: Yup.number().required('Email otp is Required'),
    emailOtp: Yup.number().required('Phone Otp is Required'),

});

export const forgetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Password is Required'),
    confirmPassword: Yup.string().required('Confirm Password Otp is Required'),

});




export const BlocksValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    ownerName: Yup.string().required('Owner Name is Required'),
    status: Yup.string().oneOf(['Active', 'InActive']).required('Status is Required'),
    society: Yup.string().required('Society is Required'),
    phase: Yup.string().required('Phase is Required'),

});

export const PropertySchema = Yup.object().shape({
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is Required'),
    status: Yup.string().required('Status is Required'),
    type: Yup.string().required('Type is Required'),
    rooms: Yup.number().required('Select Number Of Rooms'),
    price: Yup.number().required('Price is Required'),
    area: Yup.string().required('Area is Required'),
    address: Yup.string().required('Address is Required'),
    city: Yup.string().required('City is Required'),
    state: Yup.string().required('State is Required'),
    country: Yup.string().required('Country is Required'),
    latitude: Yup.string().required('Latitude is Required'),
    longitude: Yup.string().required('Longitude is Required'),
    age: Yup.string().required('Age is Required'),
    bathrooms: Yup.number().required('Select Number of Bathrooms'),
    condition: Yup.string().required('Select Room Condition'),
    ctInfoName: Yup.string().required('Name is Required'),
    ctInfoUsername: Yup.string().required('Username is Required'),
    ctInfoEmail: Yup.string().required('Email is Required'),
    ctInfoPhone: Yup.string().required('Phone is Required'),
    society: Yup.string().required('Society is Required'),
    phase: Yup.string().required('Phase is Required'),
    block: Yup.string().required('Block is Required'),
    photo: Yup.array().required('Images Are Required'),
});


export const agentContactFormValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is Required'),
    email: Yup.string().email('Enter valid email').required('Email is Required'),
    phone: Yup.string().required('Phone is Required'),
    meetingTime: Yup.date()
        .required('Please enter a date of birth')
        .min(new Date(), "Please Select Correct Date and time"),
    message: Yup.string().required('Message is Required'),

});


export const FormDataFunc = (Data) => {
    const formData = new FormData();
    var objMap = new Map(Object.entries(Data));
    objMap.forEach((item, key) => {
        formData.append(key, item)
    });
    return formData;
}


export const FormDataMultipleFiles = (Data) => {
    const formData = new FormData();
    var objMap = new Map(Object.entries(Data));
    objMap.forEach((item, key) => {
        if (key === 'photo' && Data?.photo.length > 0) {
            Data?.photo?.map((itemm) => (
                formData.append(key, itemm)
            ))
        }
        if (key === 'features' && Data?.features.length > 0) {
            Data?.features?.map((itemm) => (
                formData.append(key, itemm)
            ))
        }
        if (key !== 'photo' && key !== 'features') {
            formData.append(key, item)
        }
    });
    return formData;
}
