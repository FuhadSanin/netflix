import React from 'react'
import './Home.css'
import Navabar from '../Navbar/Navabar'
import Banner from '../Banner/Banner'
import Card from '../Card/card'
import { Netflix_Orginals,Action,Comedy,romance} from '../../Constants/url'

function Home() {
  return (
    <div className="App">
      <Navabar/>
      <Banner/>
      <Card title="Netflix Orginals" url={Netflix_Orginals} />
      <Card title="Action" url={Action}/>
      <Card title="Comedy" url={Comedy}/>
      <Card title="Horror" url={romance}/>

    </div>
  )
}

export default Home
