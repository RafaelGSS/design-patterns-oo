/*
 * Builder
 *
 * Lets you construct complex object step by step.
 * This pattern allows you to produce different types and representations of an object
 * using same construction code
 *
 */
class FormBuilder {
  private form: string[];

  constructor() {
    this.form = [];
  }

  buildButton({ name, value }): FormBuilder {
    this.form.push(`<button value=${value}>${name}</button>`);
    return this;
  }

  buildInput({ name, value }): FormBuilder {
    this.form.push(`<input value="${value}" name="${name}"/>`);
    return this;
  }

  getForm(): string[] {
    return this.form;
  }
}

const formBuilder = new FormBuilder();
formBuilder
  .buildInput({ name: 'input1', value: 'value1' })
  .buildInput({ name: 'input2', value: 'value2' })
  .buildButton({ name: 'button1', value: 'value1' });

console.log('Form result:', formBuilder.getForm());
