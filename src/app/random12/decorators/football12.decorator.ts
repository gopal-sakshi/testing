/*
    1) descriptor.value holds the actual function on which this Confirmable decorator is applied
    2) we store this function temporarily in "originalMethod23"
    3) we will do what we want... then trigger/invoke/call "originalMethod23"            
*/
export function Football12(options?: any) {
    
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod23 = descriptor.value;
            
        descriptor.value = async function (...args: any) {

            // **** neeku nachina pichi panulu anni chesukooo *************
            console.log("football decorator execute chessaa ", new Date().toISOString());
            const resp = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => { 
                return response.json() 
            });

            // pichi panulu ayyaaka, trigger/invoke/call ===> actual function 
            const result = originalMethod23.apply(this, args);
            return result;
        };
        return descriptor;
    };

}