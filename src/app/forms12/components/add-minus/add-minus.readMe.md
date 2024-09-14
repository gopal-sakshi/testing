DESCRIPTION

A ControlValueAccessor allows us to use our custom component as a form input.
- here, add-minus component ======> custom component
- this add-minus component must behave like <input> tag 
  we can put 'formControlName' on <input> and look for valueChanges
  similarly, we will put formControlName on <add-minus> and look for valueChanges


a) FormControls register user interaction, like when a user touched a control or changed its value. 
- here control = <input> (it can be textbox, radio button, text-area (or) stuff)
b) Using the ControlValueAccessor interface 
    allows u 
    to tell our component 
    what to do when something interacts with our custom input.
  
```ts
interface ControlValueAccessor {   
    
    // ORIGINAL     already implemented methods by Angular may be...
    writeValue(obj: any): void
    registerOnChange(fn: any): void
    registerOnTouched(fn: any): void
    setDisabledState(isDisabled: boolean): void

    // modified the ORIGINAL methods BY GOPAAAALLLL
    writeValue(value: number): void { this.value = value; }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

    // custom methods... developer may have to implement
    onChange: any = () => {};
    onTouched: any = () => {};
    disabled = false;

}
```