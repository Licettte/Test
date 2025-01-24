import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {companyActions} from "./company/companySlice";

const actions = {
     ...companyActions,
};
export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
