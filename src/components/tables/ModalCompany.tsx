import {Button} from "../ui/Button";
import {Input} from "../ui/Input";
import {Modal} from "../ui/Modal";
import {Flex} from "../../styles";
import {CompanyTable} from "../../store/company/companyTypes";
import {FC, useState} from "react";
import {useActions} from "../../store/actions";
import {useAppSelector} from "../../store/useAppSelector";
import {generateUniqId} from "../util/generateUniqId";

const MAX_LENGTH = 20

interface ModalCompanyProps {
    isEdit?: boolean,
    companyId?: string
}

export const ModalCompany: FC<ModalCompanyProps> = ({isEdit, companyId}) => {

    const {addCompany, updateCompany} = useActions();
    const companies = useAppSelector((state) => state.companyReducer.companies);
    const company = !!companyId ? companies[companyId] : {} as CompanyTable;


    const [isModalOpen, setModalOpen] = useState(false);
    const [companyValue, setCompanyValue] = useState<Partial<CompanyTable>>(
        {
            title: isEdit ? company?.title : '',
            address: isEdit ? company?.address : ''
        });
    const setValue = (field: keyof CompanyTable, value: string) => {
        setCompanyValue(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const clearModal = () => setCompanyValue({});
    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        !isEdit && clearModal();
    };

    const sendSave = () => {

        const id = !!companyId && isEdit ? companyId : generateUniqId()
            const data = {
                id: id,
                title: companyValue.title ?? '',
                address: companyValue.address ?? '',
                checked: isEdit ? (companyValue?.checked ?? false) : false,
                edit: false,
                delete: false
            };


        isEdit ? updateCompany(data) : addCompany(data);

        closeModal();
        !isEdit && clearModal();
    };

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                title={isEdit ? "Редактировать компанию" : "Добавить компанию"}
                okText={isEdit ? 'Сохранить' : "Добавить"}
                closeText="Отменить"
                onOk={sendSave}
                onClose={closeModal}
            >
                <Flex dir="column" gap={5}>
                    <Input
                        maxLength={MAX_LENGTH}
                        placeholder={'Введите название'}
                        value={companyValue.title ?? ''}
                        setValue={(value) => setValue('title', value)}
                    />

                    <Input
                        maxLength={MAX_LENGTH}
                        placeholder={'Введите адрес'}
                        value={companyValue.address ?? ''}
                        setValue={(value) => setValue('address', value)}
                    />
                </Flex>
            </Modal>
            <Button onClick={openModal} height={isEdit ? '20px' : '60px'}
                    width={isEdit ? '85px' : '150px'}>{isEdit ? "изменить" : "Добавить компанию"}</Button>
        </>
    );
};
