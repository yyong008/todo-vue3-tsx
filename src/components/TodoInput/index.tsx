import { defineComponent, ref } from "vue";
import styles from "./index.module.css";

const TodoInput = defineComponent({
  emits: {
    addTodo: (content: any) => true
  },
  setup() {
    let text = ref("");
    return (ctx: any) => {
      return (
        <div class={styles.newTodoContainer}>
          <input
            class={styles.newTodo}
            autofocus="true"
            autocomplete="off"
            placeholder="想做什么呢?"
            v-model={text.value}
            onKeyup={(e: any) => {
              const content = e?.target?.value;
              if (e.keyCode !== 13) return;
              if (content.length === 0) return;
            
              ctx.$emit("addTodo", content);
              text.value = ''
            }}
          />
        </div>
      );
    };
  },
});

export default TodoInput;
