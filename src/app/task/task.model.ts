export class Task {
  public id: number;
  public parentId: string;
  public taskName: string;
  public startDate: string;
  public endDate: string;
  public priority: number;
  public taskId: number;

  constructor(id: number, parentId: string, taskName: string, startDate: string, endDate: string, priority: number, taskId: number) {
    this.id = id;
    this.parentId = parentId;
    this.taskName = taskName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.priority = priority;
    this.taskId = taskId;
  }
}
