import { Action } from '@ngrx/store';


export const SET_FILTER = '[Filter] set Filter';

export type filtersValids = 'all' | 'completados' | 'pendientes'; 

export class SetFilterAction implements Action {

    readonly type = SET_FILTER;

    constructor( public filtro: filtersValids ) {}

}

export type acciones = SetFilterAction;