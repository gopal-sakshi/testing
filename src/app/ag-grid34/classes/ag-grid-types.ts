import { Type } from "@angular/core";
import { ICellEditorParams } from "ag-grid-community";

export interface AgGridColumnDef {
    headerName?: string;
    resizable?: boolean;
    field?: string;
    sortable?: boolean;
    filter?: boolean | string;
    filterParams?: any;
    width?: number;

    headerCheckboxSelection?: boolean;
    headerCheckboxSelectionFilteredOnly?: boolean;
    checkboxSelection?: boolean;


    formatter?: string;
    formatterValue?: string;              // Formats value in the cell
    titleFormatterValue?: string;         // Formats value in the title

    valueFormatter?: (val: any) => string;

    cellRendererFramework?: Type<any>;    // Actual key used by ag-grid
    cellRendererFrameworkName?: string;   // API sends the component name
}

export interface AgGridRowClassRules {
    [key: string]: ((params: ICellEditorParams) => boolean) | string;
}

interface IAgGridAngular {
    rowSelection?: 'multiple' | 'single' | '';
    floatingFilter?: boolean;
    rowHeight?: number;
    rowClassRules?: AgGridRowClassRules;

    [key: string]: any;
}

export interface AgGridOptions extends IAgGridAngular {
    results: any[];
    columnDefs: AgGridColumnDef[];
    count?: number;
}