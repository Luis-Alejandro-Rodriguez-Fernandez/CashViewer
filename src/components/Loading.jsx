import { CircularProgress } from 'react-cssfx-loading'
import '../css/loading.css'

export default function Loading({ state = false}) {

    return (
        <>
            {
                state
                    ? <div className='loading'>
                        <CircularProgress color="#69a018" height="150px" width="150px" />
                    </div>
                    : null

            }
        </>
    )
}