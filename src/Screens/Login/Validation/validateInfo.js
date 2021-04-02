function ValidateInfo(values) {
    let errors = {};

    if (!values.email) {
        errors.email = "*L' adresse e-mail est incorrecte";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "*L' adresse e-mail est incorrecte";
    }

    if (!values.password) {
        errors.password = "*Password is required";
    } else if (values.password.length < 5) {
        errors.password = "*Password must be at least 6 character or more";
    }


    return errors;
}

export default ValidateInfo;
