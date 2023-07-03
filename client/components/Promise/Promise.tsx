import { PledgeFrontEnd } from '../../../models/pledge_models'

interface Props {
  promise: PledgeFrontEnd
  handleResolvePromise: (status: string) => void
}

function Promise(props: Props) {
  const { promiseName, promiseDescription, friendName } = props.promise
  //TODO: replace hardcoded date with acutal date
  const dateCreated = '28/06/3000'
  return (
    <div>
      <div className="promise">
        <h1>{promiseName}</h1>

        <div>{dateCreated}</div>
        <div>{friendName}</div>
        <p>{promiseDescription}</p>

        {/* TODO: replace buttons with actual promise action buttons */}
        <button onClick={() => props.handleResolvePromise('broken')}>
          Promise Broken!
        </button>
        <button onClick={() => props.handleResolvePromise('kept')}>
          Promise Kept!
        </button>
        <div>Twitter</div>
        <div>Facebook</div>
      </div>
    </div>
  )
}

export default Promise
