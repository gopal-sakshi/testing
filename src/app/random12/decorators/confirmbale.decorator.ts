import Swal, { SweetAlertOptions } from 'sweetalert2';

/*

    3 arguments of decorators
    - target = the method being decorated.
    - propertyKey = the name of the method being decorated.
    - descriptor = a property descriptor of the given property if it exists on the object, undefined otherwise. The property descriptor is obtained by invoking the Object.getOwnPropertyDescriptor() function.

*/

export function old_Confirmable(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    
    const originalMethod = descriptor.value;
    
    const config: SweetAlertOptions = {
        title: 'Are you sureeeeeeeeeeeeeeeeeee?',
        html: 'Do you want to perform this action?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        icon: 'question'
    };
    
    descriptor.value = async function (...args: any) {
        const res = await Swal.fire(config);
    
        if (res.isConfirmed) {             
            const result = originalMethod.apply(this, args);            
            return result;
        }
    };
    return descriptor;
};



/*  
    old_Confirmable() = just runs the method()
    Confirmable() = is a factory function... which returns the decorator function

    QUESTION: Why cant options & config must be 'any' type... It threw error, when I used SweetAlertOptions data type on them
*/
export function Confirmable(options?: any) {

    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    
        const originalMethod = descriptor.value;            // descriptor.value holds the actual function
                                                                // on which this Confirmable decorator is applied
                                                                // in our case this is deleteItem() (or) deleteItem2() function
                                                                // we store this function temporarily in originalMethod.
                                                            // later when we fire the sweetAlert... Swal.fire()
                                                                // based on user action we will proceed...
    
        const config: any = {
            title: 'Are you sure?',
            html: 'Do you want to perform this action?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            icon: 'question',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/13/2010-kabini-tusker-bark.jpg',
            imageWidth: '300px',
            imageHeight: '300px',
            input: 'select',                    // see SweetAlertInput (select, radio, email, text, etc)
            inputValue: 'initial Value',
            inputOptions: ['elephant', 'tiger', 'lion'],
            inputPlaceholder: 'whats the animal',
        };
    
        if (options) {
            Object.keys(options).forEach(x => config[x] = options[x]);
        }
        
        descriptor.value = async function (...args: any) {
        
            const res = await Swal.fire(config);
            /*
                res = {
                    isConfirmed: true,
                    isDenied: false,
                    isDismissed: false,
                    value: "0"                      // if user chooses first option... elephant
                                                            // value: "1"       if user chooses tiger
                }                                       

            */
            console.log(res);
            if (res.isConfirmed) {
                const result = originalMethod.apply(this, args);
                return result;
            }
        };
        return descriptor;

    };

}