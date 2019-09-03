import * as fromFilter from "./filter.actions";
import { SET_FILTER } from './filter.actions';

const estadoInicial : fromFilter.filtersValids = 'all';

export function filterReducer(  state = estadoInicial,
                                action: fromFilter.acciones  ): fromFilter.filtersValids {

    switch (action.type) {
        case fromFilter.SET_FILTER:
            return action.filtro
    
        default:
            return state;
    }


}