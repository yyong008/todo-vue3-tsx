// import type { SetupContext } from 'vue'

import { defineComponent } from "vue";
import styles from "./index.module.css";

const TodoList = defineComponent({
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: {
    removeTodo: (id: string | number, idx: string | number) => true,
    toggleCompletedStatue: (idx: string | number, status: string) => true,
    modifyTodoContent: (idx: string | number, content: string) => true,
  },
  setup(props) {
    const { todos } = props;
    return (ctx: any) => {
      return (
        <ul class={styles.todolist}>
          {todos.map((todo: any, idx) => {
            return (
              <li key={todo.id} class={styles.todo}>
                <div class={styles.inputContent}>
                  <input
                    type="checkbox"
                    onInput={(e: any) => {
                      ctx.$emit("toggleCompletedStatue", idx, e?.target?.checked);
                    }}
                    checked={todo.completed}
                  />
                  <label
                    class={styles.label}
                    contenteditable={true}
                    onInput={(e: any) => {
                      ctx.$emit("modifyTodoContent",idx, e?.target?.textContent);
                    }}
                    onBlur={() => {}}
                  >
                    {todo.content}
                  </label>
                </div>
                <button class={styles.closeBtn} onClick={() => ctx.$emit("removeTodo", todo.id, idx)}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      );
    };
  },
});

export default TodoList;
