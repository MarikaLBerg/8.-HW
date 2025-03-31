import Element from "../constructor/Element.js";

const sidebarItems = [
  'Home',
  'About',
  'Services',
  'Contact'
];

const sidebarLinks = sidebarItems.map(item => new Element('a', 'sidebar-link', item).get());

const sidebar = new Element('div', 'sidebar', sidebarLinks);

export default sidebar;