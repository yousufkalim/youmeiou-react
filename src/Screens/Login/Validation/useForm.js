import {useState} from "react";

const useForm = (ValidateInfo) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        console.log(e.target.name);

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (e.target.name && e.target.name !== "email") {
            const newErrors = errors;
            newErrors[e.target.name] = "";
            setErrors(newErrors);
        }

        if (e.target.name === "email" && regEmail.test(e.target.value)) {
            const newErrors = errors;
            newErrors[e.target.name] = "";
            setErrors(newErrors);
        }
        // setErrors(isInfoAvailable(values));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(ValidateInfo(values));
        return !(errors.email || errors.password);



    };
    return {handleChange, values, handleSubmit, errors};
};

export default useForm;
