import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.tasks = [];
        this.filteredTask = '';
        this.filteredPriorityMin = 0;
        this.filteredPriorityMax = 30;
        this.filteredParentTask = '';
        this.filteredStartDate = '';
        this.filteredEndDate = '';
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks();
        this.tasksSub = this.taskService.getTaskUpdateListener()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskListComponent.prototype.onEndTask = function (id) {
        var _this = this;
        this.taskService.getTask(id).subscribe(function (taskData) {
            _this.taskToEnd = new Task(taskData._id, taskData.parentId, taskData.taskName, taskData.startDate, 'Task Ended', taskData.priority);
            _this.taskService.updateTask(_this.taskToEnd);
        });
    };
    TaskListComponent.prototype.onDeleteTask = function (id) {
        this.taskService.deleteTask(id);
    };
    TaskListComponent.prototype.alertReadOnly = function () {
        alert('Task already ended, unable to edit!');
    };
    TaskListComponent.prototype.ngDestroy = function () {
        this.tasksSub.unsubscribe();
    };
    TaskListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TaskService, Router])
    ], TaskListComponent);
    return TaskListComponent;
}());
export { TaskListComponent };
//# sourceMappingURL=task-list.component.js.map