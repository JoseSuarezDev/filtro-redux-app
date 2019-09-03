import { Component, OnInit } from '@angular/core';

import * as fromFilter from "../../filter/filter.actions";
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { ClearTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFilter.filtersValids [] = ['all','completados','pendientes'] ;
  filterActual: fromFilter.filtersValids;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( state => {

      this.contarPendientes(state.todos);
      this.filterActual = state.filtro;

    });

  }

  changeFilter( newFilter: fromFilter.filtersValids ) {

    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);

  }

  todoClear() {

    const action = new ClearTodoAction();
    this.store.dispatch(action);

  }

  contarPendientes( todos: Todo[] ) {

    this.pendientes = todos.filter( todo => !todo.completado ).length;

  }

}
