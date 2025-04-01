import Element from "../constructor/Element.js";

const cardData = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
];

const cards = cardData.map(el => new Element('div', 'card', el).get());

const newCardData = [
    'New Card A',
    'New Card B'
];

const newCards = newCardData.map(el => new Element('div', 'small-card', el).get());

// Вызов метода get() для получения элементов
const cardSection = new Element('div', 'card-section', cards).get();
const newCardSection = new Element('div', 'new-card-section', newCards).get();

const content = new Element('div', 'content', [cardSection, newCardSection]).get();

export default content;