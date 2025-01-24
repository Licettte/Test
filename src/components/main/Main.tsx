import {CompanyPage} from "../tables/CompanyPage";
import {useEffect} from "react";
import {companyUrl} from "../../utils";
import {Company} from "../../store/company/companyTypes";
import {useActions} from "../../store/actions";

export const Main = () => {

    const {setCompanies} = useActions()

    useEffect(() => {
        fetch(companyUrl)
            .then((response) => response.json())
            .then((data: Company[]) => {
                const dataWithChecked = data.map((item) => ({
                    ...item,
                    id: String(item.id),
                    checked: false,
                    edit: false,
                    delete: false
                }));
                setCompanies(dataWithChecked);
            })
            .catch();
    }, []);

    return <CompanyPage/>
}
