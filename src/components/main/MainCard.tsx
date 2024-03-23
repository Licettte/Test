import React, {useContext, useState} from "react";
import {BasketContext} from "../../context/context";
import {MainCardType} from "../../utils/types/types";
import {Button, ButtonSVG, Discount, Div, Img, InfoSVG, Span, SpanDiscount, StarSVG, Wrapper} from "./MainCardStyle";
import {SVGLink} from "../layouts/header/HeaderStyle";
import {ModalInfoItem} from "../modal/modalInfoItem/ModalInfoItem";

export const MainCard = (card: MainCardType) => {

    const {addItem} = useContext(BasketContext)
    const {img, title, price, discount, rating, setOpenModal} = card

    const openModal = (card: MainCardType) => {
            setOpenModal({isOpened:true, card:card})
    }

    return (
        <Wrapper>
            <Img src={img} alt={img}/>
            <Div>
                <Span $type={"dark2XL"}> {title} </Span>
                <Discount>
                    <Span $type={"brightPrimary"}> {price}₽ </Span>
                    {discount ? <SpanDiscount> {discount}₽</SpanDiscount> : ''}
                </Discount>
            </Div>

            <Div>
                <div>
                    <StarSVG/>
                    <Span $type={"darkM"}> {rating}</Span>
                    <ButtonSVG onClick={() => openModal(card)}>
                        <InfoSVG/>
                    </ButtonSVG>
                </div>

                <Button onClick={() => addItem(card)}> Купить</Button>
            </Div>

        </Wrapper>
    );
}
