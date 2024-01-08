import { CircularProgress } from 'react-cssfx-loading'

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