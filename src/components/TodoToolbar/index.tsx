import { defineComponent, ref } from "vue";
import styles from "./index.module.css";

const TodoToolBar = defineComponent({
  emits: {
    showAllTodo: () => true,
    showLoadingTodo: () => true,
    showCompletedTodo: () => true,
    clearCompletedTodo: () => true,
  },
  props: {
    remain: Number,
  },
  setup(props) {
    const tab = ref("all");
    return (ctx: any) => {
      return (
        <div class={styles.toolbarContainer}>
          <div
            class={styles.remain}
            onClick={() => {
              ctx.$emit("showAllTodo");
            }}
          >
            <span>{props.remain}</span>剩余
          </div>
          <div class={styles.ops}>
            <div
              class={tab.value === "all" ? styles.active : ""}
              data-type="all"
              onClick={(e: any) => {
                tab.value = e?.target?.dataset?.type;
                ctx.$emit("showAllTodo");
              }}
            >
              全部
            </div>
            <div
              class={tab.value === "loading" ? styles.active : ""}
              data-type="loading"
              onClick={(e: any) => {
                tab.value = e?.target?.dataset.type;
                ctx.$emit("showLoadingTodo");
              }}
            >
              正在
            </div>
            <div
              class={tab.value === "completed" ? styles.active : ""}
              data-type="completed"
              onClick={(e: any) => {
                tab.value = e?.target?.dataset?.type;
                ctx.$emit("showCompletedTodo");
              }}
            >
              完成
            </div>
          </div>
          <div
            class={styles.clear}
            onClick={() => {
              ctx.$emit("clearCompletedTodo");
            }}
          >
            清除完成
          </div>
        </div>
      );
    };
  },
});

export default TodoToolBar;
