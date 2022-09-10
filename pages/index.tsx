import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import CardMultiple from '../components/CardMultiple'
import ExplanatoryCard from '../components/ExplanatoryCard'
import Game from '../components/Game'
import Wrong from '../components/Worng'
import styles from '../styles/Home.module.css'

const Home: NextPage<Props> = ({host}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feirinha</title>
        <meta name="description" content="app feira" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      {/* <CardMultiple
      alternatives={["Sim", "Não","Talvez","Não Sei"]}
      question={"Pensando na vida, você considera que está?"}
      /> */}
      
    

      <Wrong></Wrong>
    </div>
  )
}

type Props = {
  host: string | null
}

export const getServerSideProps: GetServerSideProps<Props> = async context => ({ props: { host: context.req.headers.host || null } })


export default Home
