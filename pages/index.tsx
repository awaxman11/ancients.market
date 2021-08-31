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
      <h1 className="text-lg md:text-4xl">The Order of the Ancient Adventurers</h1>
      <div className="text-center max-w-screen-md md:leading-loose">
          <p className="md:text-xl">
    
          0.8% of current Loot items are Ancient, carried through time and space by Ancient Adventurers.<br></br><br></br>

          Since the beginning, a group of Ancient Adventurers have roamed the land, driven to explore, with a Fury for adventure.<br></br><br></br>

          Flanked by a hoard of Giant Titans and Ancient Protectors, the Adventurers travel, bound together by unspoken vows across generations.<br></br><br></br>

          In the distance, a cry rings out.<br></br><br></br>

          The skulk of Foxes freeze and cock their ears towards the misty horizon. Their fur stands on end.<br></br><br></br>

          The Brilliant elders glance to their council of Skilled advisors.<br></br><br></br>

          The Twins raise their eyes to the pale orange sky.<br></br><br></br>

            The time has come.
          </p>
        </div>
        <br></br>
      <h1 className="text-lg md:text-4xl">Join the Ancient Adventurers</h1>
      <div className="text-center max-w-screen-md md:leading-loose">
        <p className="md:text-xl">
          There are {robes.length} Ancient Helm bags for sale, with a floor
          price of {robes[0].price} ETH.
        </p>
        <p className="md:text-lg pt-2">
          Site forked from {' '}
          <a
            target="_blank"
            href="https://twitter.com/worm_emoji"
            className="underline"
          >
            worm_emoji
          </a>
          's{' '}
          <a
            target="_blank"
            href="https://github.com/ylukem/robes.market"
            className="underline"
          >
            work
          </a>.
          {/* Join the{' '}
          <a
            target="_blank"
            className="underline"
            href="https://divineroles.vercel.app"
          >
            Discord
          </a>
          . */}
        </p>
        <p className="text-sm mv-4">Last updated {ts(lastUpdate)}</p>
      </div>
      <div className="grid md:grid-cols-2 pt-5">
        {robes.map((robe) => {
          return <Robe robe={robe} key={robe.id} />
        })}
      </div>
    </div>
  )
}

export default IndexPage
