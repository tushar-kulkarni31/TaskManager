import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterNumPipe = /** @class */ (function () {
    function FilterNumPipe() {
    }
    FilterNumPipe.prototype.transform = function (tasks, filterPriority, propName) {
        if (tasks.length === 0) {
            return false;
        }
        var filteredPriorityArray = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task[propName] >= filterPriority) {
                filteredPriorityArray.push(task);
            }
        }
        return filteredPriorityArray;
    };
    FilterNumPipe = tslib_1.__decorate([
        Pipe({
            name: 'filterNum'
        })
    ], FilterNumPipe);
    return FilterNumPipe;
}());
export { FilterNumPipe };
//# sourceMappingURL=filter-num.pipe.js.map