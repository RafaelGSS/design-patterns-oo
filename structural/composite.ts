/*
 * Composite Pattern
 *
 * Composite is a structural design pattern that lets you compose objects into tree structures
 * and then work with these structures as if they ere individual objects.
 */
abstract class Item {
  protected parent: Item;

  public setParent(parent: Item) {
    this.parent = parent;
  }

  public getParent(): Item {
    return this.parent;
  }

  public abstract getValue(): string;
}

class Box extends Item {
  private items: Item[];

  constructor() {
    super();
    this.items = [];
  }

  addItem(item: Item) {
    item.setParent(this);
    this.items.push(item);
  }

  getValue(): string {
    const results = [];
    for (const item of this.items) {
      results.push(item.getValue());
    }

    return `Box(${results.join('+')})`;
  }
}

class Product extends Item {
  protected name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  getValue(): string {
    return this.name;
  }
}

const tree = new Box();
const boxOne = new Box();
boxOne.addItem(new Product('Product of boxOne'))
tree.addItem(boxOne);
tree.addItem(new Product('Product of tree'));

console.log(`RESULT: ${tree.getValue()}`);
