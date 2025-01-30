import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {companyActions} from "./company/companySlice";
import {useMemo} from "react";

const actions = {
     ...companyActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), []);
};
