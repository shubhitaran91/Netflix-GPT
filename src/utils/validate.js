export const validate = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters long and contain at least one letter and one number";
    }

    return null;

}
