class Wrapper {
  constructor(rootId, children = []) {
    this.rootId = rootId;
    this.children = children;

    this.init();
  }

  init() {
    const root = document.querySelector(this.rootId);

    if (!root) {
      throw new Error('Root element does not exist');
    }

    this.root = root;

    // Добавляем элементы в корневой элемент
    this.children.forEach(el => {
      this.root.append(el.get());
    });
  }
}

export default Wrapper;