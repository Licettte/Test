import {MainCard} from "./MainCard";
import React, {useState, useEffect} from 'react';
import {ThreeColumn} from "../../styles";
import {MainCardType, URL_GET_ITEM} from "../../utils";
import {ModalAddItem} from "../modal/modalAddItem/ModalAddItem";
import {ModalInfoItem} from "../modal/modalInfoItem/ModalInfoItem";


export const Main = () => {


    const [wiredHeadphones, setWiredHeadphones] = useState<MainCardType[]>([])
    const [wirelessHeadphones, setWirelessHeadphones] = useState<MainCardType[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState({
        isOpened: false,
        card: {
            img: '',
            title: '',
            price: 0,
            discount: 0,
            rating: 0,
            id: 0,
            quantity: 0,
        }
    })

    useEffect(
        () => {
            fetch(URL_GET_ITEM)
                .then(response => response.json())
                .then(data => {
                    return setWiredHeadphones(data.wiredHeadphones),
                        setWirelessHeadphones(data.wirelessHeadphones)
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setIsLoaded(true)
                });

        }, []);


    const getCards = (headphones: MainCardType[]) => {
        return (headphones.map(card => <MainCard key={card.id} {...card} setOpenModal={setOpenModal}/>))
    }
    console.log(wiredHeadphones, "wiredHeadphones")
    return (
        <>
            {!isLoaded ? "Loading" :
                <>
                    <h2>Наушники</h2>
                    <ThreeColumn>
                        {getCards(wiredHeadphones)}
                    </ThreeColumn>

                    <h2>Беспроводные наушники</h2>
                    <ThreeColumn>
                        {getCards(wirelessHeadphones)}
                    </ThreeColumn>
                </>
            }
            {openModal.isOpened ? <ModalInfoItem setOpenModal={setOpenModal} openModal={openModal}/> : null}
            <ModalAddItem/>
        </>
    )
}
