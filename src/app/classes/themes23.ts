export interface Theme {
    name:string;
    properties?:any;
}

export const light23:Theme = {
    name:"light23",
    properties: {
        "--gopal-success":"#F4FAFF",        // light green
        "--gopal-info": "#f7f4a1",              // light yellow
        "--gopal-warn":"#fab6b6",                   // light red
        "--gopal-font-weight": "200",       // lighter weight
        "--gopal-font-size":"10px"            // small font size
    }
}

export const dark23:Theme = {
    name:"dark23",
    properties: {
        "--gopal-success": "#404a33",
        "--gopal-info": "#545219",
        "--gopal-warn":"#ff0000",                   // dark red
        "--gopal-font-weight": "900",        
        "--gopal-font-size":"50px"
    }
}

export const red23:Theme = {
    name:"red23",
    properties: {
        "--gopal-success": "#5ea564",
        "--gopal-info": "#ffff03",
        "--gopal-warn":"#571d1d",                   
        "--gopal-font-weight": "500",        
        "--gopal-font-size":"30px"
    }
}