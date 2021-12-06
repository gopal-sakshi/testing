import Swal, { SweetAlertOptions } from 'sweetalert2';


export function old_Confirmable(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    
    const originalMethod = descriptor.value;
    
    const config: SweetAlertOptions = {
        title: 'Are you sure?',
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
    
        const originalMethod = descriptor.value;
    
        const config: any = {
            title: 'Are you sure?',
            html: 'Do you want to perform this action?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            icon: 'question'
        };

    
        if (options) {
            Object.keys(options).forEach(x => config[x] = options[x]);
        }

        
        descriptor.value = async function (...args: any) {
        
            const res = await Swal.fire(config);
            if (res.isConfirmed) {
                const result = originalMethod.apply(this, args);
                return result;
            }
        };
        return descriptor;

    };

}