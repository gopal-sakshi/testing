import { ChangeDetectionStrategy } from "@angular/core";
import 'reflect-metadata';


export const defaultComponentProps12 : any = {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    exportAs: undefined,
    moduleId: undefined,
    providers: undefined,
    viewProviders: undefined,
    changeDetection: ChangeDetectionStrategy.Default,
    queries: undefined,
    templateUrl: undefined,
    template: undefined,
    styleUrls: undefined,
    styles: undefined,
    animations: undefined,
    encapsulation: undefined,
    interpolation: undefined,
    entryComponents: undefined
};

// const Reflect = global['Reflect'];          
                                                // cannot find name 'global'
                                                // thats why I added types: [node] in compilerOptions in tsConfig.json
                                                // but still I get error... so, temporarily, I wont learn 'custom-component-decorator'

export function CustomCompDecorator(_props: any) {
    _props = Object.assign({}, defaultComponentProps12, _props);

    return function (cls: any) {
        Reflect.defineMetadata('annotations', [_props], cls);
    }
}