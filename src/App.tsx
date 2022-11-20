import { defineComponent, onBeforeMount, onMounted } from 'vue'

// components
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import MainTodo from './components/MainTodo';

// style
import styles from "./app.module.css";

const App = defineComponent({
  name: 'app',
  setup() {
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    onMounted(() => {
      console.log('app mounted')
    })
  },
  render() {
    return (
      <div class={styles.page}>
        <Header />
        <MainTodo />
        <Footer />
      </div>
    )
  }
})

export default App;
