import { defineComponent } from 'vue'
import styles from './index.module.css';

const Footer = defineComponent({
  name: 'Footer',
  render() {
    return <div class={styles.footer}>
      <div class={styles.desc}>双击进入编辑模式</div>
      <div class={styles.desc}>Mg 书写</div>
      <div class={styles.desc}>Todo MVC 的一个部分</div>
    </div>
  }
})

export default Footer
