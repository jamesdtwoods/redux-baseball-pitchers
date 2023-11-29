import { useSelector } from 'react-redux'

function TotalCatchers() {
    const currentPitcher = useSelector((store) => store.setCurrentPitcher)

    return <h2>On the Mound: {currentPitcher}</h2>
}

export default TotalCatchers