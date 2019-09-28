import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
var BACKEND_URL = environment.apiURL;
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.tasks = [];
        this.tasksUpdated = new Subject();
    }
    TaskService.prototype.getTasks = function () {
        var _this = this;
        this.http.get(BACKEND_URL + 'getTasks')
            .pipe(map(function (taskData) {
            return taskData.tasks.map(function (task) {
                return {
                    id: task.taskId,
                    parentId: task.parentId,
                    taskName: task.task,
                    startDate: task.startDate,
                    endDate: task.endDate,
                    priority: task.priority
                };
            });
        }))
            .subscribe(function (mappedTask) {
            _this.tasks = mappedTask;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.getTask = function (id) {
        return this.http
            .get(BACKEND_URL + 'editTask/' + id);
    };
    TaskService.prototype.addTask = function (task) {
        var _this = this;
        this.http.post(BACKEND_URL + 'postTask', task)
            .subscribe(function (resData) {
            _this.tasks.push(task);
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.updateTask = function (task) {
        var _this = this;
        this.http.put(BACKEND_URL + 'editTask/' + task.id, task)
            .subscribe(function (response) {
            var updatedTasks = _this.tasks.slice();
            var oldTaskIndex = updatedTasks.findIndex(function (t) { return t.id === task.id; });
            updatedTasks[oldTaskIndex] = task;
            _this.tasks = updatedTasks;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.deleteTask = function (taskId) {
        var _this = this;
        this.http.delete(BACKEND_URL + 'deleteTask/' + taskId)
            .subscribe(function () {
            var updatedTasks = _this.tasks.filter(function (task) { return task.id !== taskId; });
            _this.tasks = updatedTasks;
            _this.tasksUpdated.next(_this.tasks.slice());
        });
    };
    TaskService.prototype.getTaskUpdateListener = function () {
        return this.tasksUpdated.asObservable();
    };
    TaskService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], TaskService);
    return TaskService;
}());
export { TaskService };
//# sourceMappingURL=task.service.js.map