import React from 'react';
import './CardsList.css';
import { Card } from '../Card/Card';
export const CardsList = (props) => {
    return (React.createElement("div", null,
        React.createElement("div", { className: "card-list" },
            React.createElement("ul", { className: "card-list__container" }, props.cards?.map((card) => {
                return (React.createElement("li", { key: card.id },
                    React.createElement(Card, { ...card })));
            })))));
};
