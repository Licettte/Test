import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {WrapperContent, WrapperFooter, WrapperHeader, WrapperLayout} from "./styles";
import {Main} from "../../main/Main";

export const Layout = () => {
    return (
        <WrapperLayout >

            <WrapperHeader>
                <Header/>
            </WrapperHeader>

            <WrapperContent>
                <Main/>
            </WrapperContent>

            <WrapperFooter>
                <Footer/>
            </WrapperFooter>

        </WrapperLayout>
    )
}
