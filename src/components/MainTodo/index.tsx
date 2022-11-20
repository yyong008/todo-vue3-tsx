import { defineComponent, reactive, computed } from "vue";

import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import TodoToolbar from "../TodoToolbar";

// utils
import {
  getStorageTodos,
  addStorageTodo,
  removeStorageTodoById,
  getStorageTodoId,
  modifyCompletedStatusStorageTodoByIdx,
  modifyContentStorageTodoByIdx,
  clearCompletedTodos
} from "../../utils/storage";

const MainTodo = defineComponent({
  setup() {
    let tds = reactive({
      todos: getStorageTodos(),
    });
    const remain = computed<number>(() => {
      return tds.todos.filter((todo: any) => {
        return todo.completed !== true;
      }).length;
    });
    return () => (
      <section>
        <TodoInput
          onAddTodo={(content: any) => {
            let cTodo = {
              content,
              id: getStorageTodoId(),
              completed: false,
            };
            tds.todos.unshift(cTodo);
            addStorageTodo(cTodo);
          }}
        />
        <TodoList
          todos={tds.todos}
          onRemoveTodo={(id, idx) => {
            removeStorageTodoById(id as any);
            tds.todos.splice(idx, 1);
          }}
          onToggleCompletedStatue={(idx, checked) => {
            tds.todos.forEach((todo: any, i: number) => {
              if (idx === i) {
                todo.completed = checked;
                modifyCompletedStatusStorageTodoByIdx(idx, checked as any);
              }
            });
          }}
          onModifyTodoContent={(idx, content) => {
            tds.todos.forEach((todo: any, i: number) => {
              if (idx === i) {
                todo.content = content;
                modifyContentStorageTodoByIdx(idx, content);
              }
            });
          }}
        />
        <TodoToolbar
          remain={remain.value}
          onShowAllTodo={() => {
            tds.todos.splice(0);
            getStorageTodos().forEach((todo: any) => {
              tds.todos.push(todo);
            });
          }}
          onShowLoadingTodo={() => {
            tds.todos.splice(0);
            getStorageTodos().forEach((td: any) => {
              if (!td.completed) {
                tds.todos.push(td);
              }
            });
          }}
          onShowCompletedTodo={() => {
            tds.todos.splice(0);
            getStorageTodos().forEach((td: any) => {
              if (td.completed) {
                tds.todos.push(td);
              }
            });
          }}
          onClearCompletedTodo={() => {
            tds.todos.splice(0);
            
            getStorageTodos().forEach((td: any) => {
              if (!td.completed) {
                tds.todos.push(td);
              }
            });
            clearCompletedTodos()
          }}
        />
      </section>
    );
  },
});

export default MainTodo
