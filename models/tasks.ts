
export interface ITask {
  id: string;
  text: string;
}
// const TasksStore = types
// .model('TasksStore')
// .props({
//   text:types.string(TodoStores),
//   filter: types.optional(filterType, SHOW_ALL),
// });
// .actions(self => ({
//       addTask(task: Task) {
//         self.tasks.unshift(task);
//       },
//       removeTask(task) {
//         destroy(task);
//       },
//       resetTasks() {
//         applySnapshot(self, {});
//       },
//       setFilter(filter) {
//         self.filter = filter;
//       },
//     }));  