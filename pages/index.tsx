import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import CardMultiple from '../components/CardMultiple'
import ExplanatoryCard from '../components/ExplanatoryCard'
import Game from '../components/Game'
import styles from '../styles/Home.module.css'

const Home: NextPage<Props> = ({host}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feirinha</title>
        <meta name="description" content="app feira" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,900&display=swap" rel="stylesheet" />
      </Head>

      {/* <CardMultiple
      alternatives={["Sim", "Não","Talvez","Não Sei"]}
      question={"Pensando na vida, você considera que está?"}
      /> */}

      <ExplanatoryCard
      img='http://localhost:3000/demonstracao-teorema-pitagoras-2.gif'
      > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a augue vel neque facilisis ullamcorper a ac est. Donec sagittis lacinia facilisis. Vestibulum fringilla congue fringilla. Aenean mollis pulvinar ante vitae sagittis. Mauris porttitor nulla vulputate, efficitur lacus at, accumsan tortor. Ut sollicitudin mi eget ante blandit finibus. Nulla facilisi. In mattis turpis sodales nulla luctus, in tempor nisi rhoncus. Cras finibus sit amet augue sit amet vestibulum. Cras dignissim egestas urna, finibus volutpat diam porta quis. Morbi scelerisque ut erat vitae commodo. Phasellus vitae risus in augue viverra vestibulum. Integer id pharetra nisi. Phasellus non porttitor ligula, ut posuere libero. Sed non scelerisque justo. Vestibulum elementum, est eget euismod rhoncus, sapien nunc dignissim libero, eget semper velit lacus eu arcu. </ExplanatoryCard>
    </div>
  )
}

type Props = {
  host: string | null
}

export const getServerSideProps: GetServerSideProps<Props> = async context => ({ props: { host: context.req.headers.host || null } })


export default Home
