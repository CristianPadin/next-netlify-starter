import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Duelist Vanguard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenido a Duelist Vanguard!" />
        <p className="description">
          Estamos preparando la pagina web, estate atento a nuestras redes sociales ya que avisaremos cuando este preparada.
        </p>
      </main>

      <Footer />
    </div>
  )
}
