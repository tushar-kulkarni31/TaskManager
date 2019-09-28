import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (tasks, filterString, propName) {
        if (tasks.length === 0) {
            return tasks;
        }
        var filteredArray = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task[propName] === filterString ||
                task[propName].toString().startsWith(filterString)) {
                filteredArray.push(task);
            }
        }
        return filteredArray;
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map