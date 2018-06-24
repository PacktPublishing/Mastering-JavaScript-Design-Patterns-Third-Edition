class Menu {
    constructor() {
        this.menuItems = [];
        this.length = 0;
    }

    addItem(menuItem) {
        this.menuItems.push(menuItem);
        this.length = this.menuItems.length;
    }

    getMenuItems() {
        return this.menuItems.concat([]);
    }
}

export default Menu;