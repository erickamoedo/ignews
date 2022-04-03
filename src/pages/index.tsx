import styles from '../styles/home.module.scss'
import Head from "next/head";

export default function Home() {
  return (

    <>
        <Head>
        <title>Teste</title>
          <meta
            name="description"
            content="Meta description for the About page"
          />
        </Head>

        <h1 className={styles.title}>
          Hello World
        </h1>
    

      </>
      
  )
}
