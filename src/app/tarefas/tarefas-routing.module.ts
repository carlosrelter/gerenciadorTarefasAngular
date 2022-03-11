import { Routes } from "@angular/router";

import { CadastrarTarefaComponent } from "./cadastrar/cadastrar-tarefa.component";
import { EditarTarefaComponent } from "./editar/editar-tarefa.component";
import { ListarTarefaComponent } from "./listar/listar-tarefa.component";

export const TarefasRoutes: Routes = [
	{
		path: 'tarefas',
		redirectTo: 'tarefas/listar'
	},
	{
		path: 'tarefas/listar',
		component: ListarTarefaComponent
	},
	{
		path: 'tarefas/cadastrar',
		component: CadastrarTarefaComponent
	},
	{
		path: 'tarefas/editar/:id',
		component: EditarTarefaComponent
	}
];
