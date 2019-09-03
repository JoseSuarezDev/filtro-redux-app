import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from "./todo/todo.reducers";
import * as fromFilter from "./filter/filter.reducers";

import * as fromFilterActions from "./filter/filter.actions";

export interface AppState {
    todos: Todo[];
    filtro: fromFilterActions.filtersValids;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFilter.filterReducer
};