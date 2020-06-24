import { reducer as formReducer } from "redux-form";
import home from "./Home/Home.reducer";
import contact from "./Contact/Contact.reducer";

export default {
    form: formReducer,
    home,
    contact,
};
