import { RobeInfo, fetchRobes } from './api/robes'
import { format as ts } from 'timeago.js'

export async function getStaticProps() {
  const data = await fetchRobes()
  return {
    props: {
      robes: data.robes,
      lastUpdate: data.lastUpdate,
    },
    revalidate: 300,
  }
}

interface Props {
  robes: RobeInfo[]
  lastUpdate: string
}

const Robe = ({ robe }: { robe: RobeInfo }) => {
  return (
    <a href={robe.url} target="_blank">
      <div className="m-auto pb-4 mb-8 flex flex-col justify-center items-center gap-2 p-4 md:m-4 border border-white transform hover:scale-105 transition-all bg-black w-full md:w-96">
        <img src={robe.svg} />
        <div className="text-center">
          <p className="text-lg">#{robe.id}</p>
          <p>{robe.price} ETH</p>
        </div>
      </div>
    </a>
  )
}

const IndexPage = ({ robes, lastUpdate }: Props) => {
  return (
    <div className="py-3 md:pb-0 font-mono flex flex-col justify-center items-center gap-4 pt-10 md:w-screen">
      <img className="w-20 md:w-28" src="helmet.png" alt="Ancient Helmet"></img>
      <h1 className="text-lg md:text-3xl font-bold">The Ancients</h1>
      <div className="text-center max-w-screen-md md:leading-loose">
        <p className="md:text-lg">
          There are {robes.length} Ancient Helm bags for sale, with a floor
          price of {robes[0].price} ETH.
        </p>
        <p className="md:text-lg pt-2">
          Site by {' '}
          <a
            target="_blank"
            href="https://twitter.com/ajwaxman"
            className="underline"
          >
            @ajwaxman
          </a>
          . Forked from{' '}
          <a
            target="_blank"
            href="https://twitter.com/worm_emoji"
            className="underline"
          >
            @worm_emoji
          </a>
          . Join the{' '}
          <a
            target="_blank"
            className="underline"
            href="https://ancients.app/"
          >
            Discord
          </a>
          .
        </p>
        <p className="text-sm mv-4 mt-4">Last updated {ts(lastUpdate)}</p>
      </div>
      <div className="grid md:grid-cols-2 pt-5 text-white">
        {robes.map((robe) => {
          return <Robe robe={robe} key={robe.id} />
        })}
      </div>
    </div>
  )
}

export default IndexPage
