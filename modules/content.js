import Element from "../constructor/Element.js";

// Данные для карточек
const cardData = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
];

// Создание карточек
const cards = cardData.map(item => new Element('div', 'card', item).get());

// Данные для новых карточек
const newCardData = [
    'New Card A',
    'New Card B',
    'New Card C'
];

// Создание новых карточек
const newCards = newCardData.map(item => new Element('div', 'small-card', item).get());

// Создание секции с карточками
const cardSection = new Element('div', 'card-section', cards).get();
const newCardSection = new Element('div', 'new-card-section', newCards).get();

// Создание основного контента
const content = new Element('div', 'content', [cardSection, newCardSection]);

// Экспорт основного контента
export default content;