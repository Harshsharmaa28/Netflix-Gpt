export const checkValidData = (email, password) => {
    if (email === "") return "Please enter the email!";
    if (password === "") return "Please enter the password!";

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // password contains at least one digit, one lowercase, one uppercase, and is at least 8 characters long
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "The email address is not valid.";
    if (!isPasswordValid) return "The password must be at least 8 characters,must include 1 digit, 1 lowercase,and 1 uppercase letter.";

    return null;
};
