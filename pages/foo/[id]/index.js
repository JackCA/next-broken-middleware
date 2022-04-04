import { useRouter } from 'next/router'
import Link from 'next/link'

const Code = (p) => <code className={styles.inlineCode} {...p} />

export default function News() {
  const { asPath, route, query } = useRouter()

  return (
    <div>
     hello
    </div>
  )
}

// Use SSR for this page as currently rewrites don't work with dynamic pages without SSR
export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
