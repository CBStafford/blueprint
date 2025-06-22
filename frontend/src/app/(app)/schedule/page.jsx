import Header from '@/app/(app)/Header'
import GetTRips from '@/components/schedule/getTrips'



export const metadata = {
    title: 'Bus-App - Bus Schedule',
}

const Schedule = () => {
    return (
        <>
            <Header title="Schedule" />
            <div className="py-12">
                <GetTRips />
            </div>
            
        </>
    )
}

export default Schedule