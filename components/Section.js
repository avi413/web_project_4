export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._items = data,
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(element) {
        this._container.append(element);
      }
    
      renderer() {
        this._items.forEach(item => {
          this._renderer(item);
        });
      }

}