const BASE_URL = process.env.REACT_APP_SERVER_URL;
const HTTP = "http://";
const URL = "160.153.249.64:5059";
const API = "/api";
const VERSION = "/v1";
const BASE_URL_V1 = HTTP + URL + API + VERSION;

const endPoints = {
    BASE_URL,
    BASE_URL_V1,

    LOGIN: BASE_URL_V1 + "/Login",
    SIGNUP: BASE_URL_V1 + "/resgiter",
    GET_DIAGNOSTICS: BASE_URL_V1 + "/diagnostic/getall",
    GET_FILTER_DIAGNOSTICS : BASE_URL_V1 + "/diagnostic/get",
    GET_ALL_DIAGNOSTICS : BASE_URL_V1 + "/diagnostic/get/userDiagnosticsStatus",
    GET_QUESTIONS : BASE_URL_V1 + "/risk/get",
    CREATE_DIAGNOSTIC: BASE_URL_V1 + "/diagnostic/create",
    SUBMIT_ANSWER: BASE_URL_V1 + "/risk/create",
    GET_SCORE : BASE_URL_V1 + "/diagnostic/create/CalculateScore",
    UPDATE_TREATMENT : BASE_URL_V1 + "/diagnostic/update/treatmentOfRisk",
    GET_FAMILY : BASE_URL_V1 + "/family/getall",
    GET_ACTIONS: BASE_URL_V1 + "/actionPlan​/get​",
    GET_PROFILE: BASE_URL_V1 + "/get/userprofile",
    EMAIL_VERIFY: BASE_URL_V1 + "/emailVerification",
    GET_COMPANY: BASE_URL_V1 + "/company/get",
    UPDATE_COMPANY: BASE_URL_V1 + "/company/create"

}

export default endPoints;