import { defineComponent } from 'vue'
import styles from './index.module.css';

const Header = defineComponent({
  name: 'Header',
  render() {
    return <div class={styles.todoLogo}>
      <h1>Todos</h1>
    </div>
  }
})

export default Header
