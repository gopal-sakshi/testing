`You can use formControlName only on directives which implement ControlValueAccessor`

# address12
- this is a component
- this component has sub-form (reusable-form-component)


# how to use this reusable-form-component
- reusable-form-component must <implement> `ControlValueAccessor`
    understand the significance of the word <implement>
- `register a provider`
    we have to tell Angular that this directive is a ControlValueAccessor 
    interface is not gonna cut it since it is stripped from the code when TypeScript is compiled to JavaScript. 
    You do this by registering a provider.
    



