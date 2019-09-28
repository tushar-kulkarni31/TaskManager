import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task/task-list/task-list.component';
var routes = [
    { path: '', component: HomeComponent },
    { path: 'add_task', component: AddtaskComponent },
    { path: 'view_task', component: TaskListComponent },
    { path: 'edit_task/:taskId', component: AddtaskComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map