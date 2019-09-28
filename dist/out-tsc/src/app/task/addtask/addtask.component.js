import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';
var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.taskAdded = false;
        this.mode = 'add';
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('taskId')) {
                _this.mode = 'edit';
                _this.taskId = paramMap.get('taskId');
                _this.taskService.getTask(_this.taskId).subscribe(function (taskData) {
                    _this.taskToEdit =
                        new Task(taskData._id, taskData.parentId, taskData.taskName, taskData.startDate, taskData.endDate, taskData.priority);
                });
            }
            else {
                _this.mode = 'add';
                _this.taskId = null;
            }
        });
    };
    AddtaskComponent.prototype.onSaveTask = function () {
        if (this.addNewTaskForm.invalid) {
            return;
        }
        if (this.mode === 'add') {
            var taskpriority = (this.addNewTaskForm.value.task_priority === null) ? 15 : this.addNewTaskForm.value.task_priority;
            this.newTask = new Task(null, this.addNewTaskForm.value.parent_task_name, this.addNewTaskForm.value.task_name, this.addNewTaskForm.value.start_date, this.addNewTaskForm.value.end_date, taskpriority);
            this.taskService.addTask(this.newTask);
        }
        else {
            this.taskToEdit.taskName = this.addNewTaskForm.value.task_name;
            this.taskToEdit.parentId = this.addNewTaskForm.value.parent_task_name;
            this.taskToEdit.startDate = this.addNewTaskForm.value.start_date;
            this.taskToEdit.endDate = this.addNewTaskForm.value.end_date;
            this.taskToEdit.priority = this.addNewTaskForm.value.task_priority;
            this.taskService.updateTask(this.taskToEdit);
        }
        this.addNewTaskForm.reset();
        this.taskAdded = true;
        this.router.navigate(['/view_task']);
    };
    AddtaskComponent.prototype.onReset = function () {
        this.addNewTaskForm.reset();
    };
    tslib_1.__decorate([
        ViewChild('addForm'),
        tslib_1.__metadata("design:type", NgForm)
    ], AddtaskComponent.prototype, "addNewTaskForm", void 0);
    AddtaskComponent = tslib_1.__decorate([
        Component({
            selector: 'app-addtask',
            templateUrl: './addtask.component.html',
            styleUrls: ['./addtask.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [TaskService, Router, ActivatedRoute])
    ], AddtaskComponent);
    return AddtaskComponent;
}());
export { AddtaskComponent };
//# sourceMappingURL=addtask.component.js.map