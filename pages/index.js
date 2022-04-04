import styles from '../styles.module.css'
import Link from 'next/link'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>Rewrites with Next.js</h1>
      <hr className={styles.hr} />
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/one">
              <a>Click me and I will trigger a full page reload (in next.js >= 12.10)</a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
    </div>
  </div>
)

export default Index
