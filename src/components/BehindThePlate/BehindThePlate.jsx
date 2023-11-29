import { useSelector } from 'react-redux'

function CurrentCatcher() {
    const currentCatcher = useSelector((store) => store.setCurrentCatcher)

    return <h2>Behind the plate: {currentCatcher}</h2>
}

export default CurrentCatcher