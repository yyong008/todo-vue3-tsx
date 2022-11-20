import { defineComponent, ref, reactive } from "vue";

const Test = defineComponent({
  props: {},
  emits: {},
  watch: {},
  computed: {},
  data: () => {
    return {};
  },
  setup(props) {
    const rf = ref(0)
    const reac = reactive({
      a: 1,
      b: 3
    })
    return () => <div></div>;
  },
  render() {
    return (
      <div>
        <div></div>
      </div>
    )
  }
});
