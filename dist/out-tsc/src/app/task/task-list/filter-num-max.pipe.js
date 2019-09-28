import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterNumMaxPipe = /** @class */ (function () {
    function FilterNumMaxPipe() {
    }
    FilterNumMaxPipe.prototype.transform = function (tasks, filterPriority, propName) {
        if (tasks.length === 0) {
            return false;
        }
        var filteredPriorityArray = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            if (task[propName] <= filterPriority) {
                filteredPriorityArray.push(task);
            }
        }
        return filteredPriorityArray;
    };
    FilterNumMaxPipe = tslib_1.__decorate([
        Pipe({
            name: 'filterNumMax'
        })
    ], FilterNumMaxPipe);
    return FilterNumMaxPipe;
}());
export { FilterNumMaxPipe };
//# sourceMappingURL=filter-num-max.pipe.js.map