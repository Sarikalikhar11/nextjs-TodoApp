import { observable } from "mobx";
import { types } from 'mobx-state-tree';

const TodoStores = types.model('TodoStores',{
   id: types.string,
   text:types.string
});

export default TodoStores;