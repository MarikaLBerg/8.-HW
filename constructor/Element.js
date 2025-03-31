class Element {
  constructor(tag, classes, children = '') {
    this.tag = tag;
    this.classes = classes;
    this.children = children;

    this.init();
    this.appendChildren();
  }

  init() {
    const element = document.createElement(this.tag);
    element.classList.add(this.classes);

    this.element = element;
  }

  appendChildren() {
    if (typeof this.children === 'string') {
      this.element.textContent = this.children;
    } else if (Array.isArray(this.children)) {
      // Проверяем, что каждый элемент является DOM-элементом
      this.children.forEach(child => {
        if (child instanceof Node) { // Проверка на DOM-элемент
          this.element.append(child);
        }
      });
    }
  }

  get() {
    return this.element;
  }

  append(element) {
    if (element instanceof Node) { // Проверка на DOM-элемент
      this.element.append(element);
    }
  }

  remove() {
    this.element.remove();
  }
}

export default Element;