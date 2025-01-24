import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Companies, CompanyTable,} from "./companyTypes";

const initialPostsState = {
    companies: {} as Companies
}

export const companySlice = createSlice({
    name: 'company',
    initialState: {
        ...initialPostsState,
    },
    reducers: {

        setCompanies(state, action: PayloadAction<CompanyTable[]>) {
            state.companies = action.payload.reduce((acc, company) => {
                acc[company.id] = company;
                return acc;
            }, {} as Companies);
        },

        toggleCompanyChecked(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload;

            if (state.companies[id]) {
                state.companies[id] = {
                    ...state.companies[id],
                    checked: !state.companies[id].checked
                };
            }
        },
        toggleAllCompanyChecked(state, action: PayloadAction<{ checked: boolean }>) {
            const { checked } = action.payload;

            if (state.companies) {
                Object.values(state.companies).forEach((company) => {
                    company.checked = checked;
                });
            }
        },

        addCompany(state, action: PayloadAction<CompanyTable>) {
            const newCompany = action.payload;


            if (!state.companies[newCompany.id]) {
                state.companies[newCompany.id] = newCompany;
            }
        },

        updateCompany(state, action: PayloadAction<CompanyTable>) {
            const updatedCompany = action.payload;

            if (state.companies[updatedCompany.id]) {
                state.companies[updatedCompany.id] = {
                    ...state.companies[updatedCompany.id],
                    ...updatedCompany,
                };
            }
        },

        deleteCompany(state, action: PayloadAction<{ companyId: string }>) {
            const { companyId } = action.payload;
            delete state.companies[companyId];
        },

        deleteSelectedCompany(state, action: PayloadAction<{companyIds: string[]}>) {
            const { companyIds } = action.payload;
            companyIds.forEach(companyId => {
                delete state.companies[companyId];
            });

        },

    },
});

export const companyActions = companySlice.actions;
export const companyReducer = companySlice.reducer;


