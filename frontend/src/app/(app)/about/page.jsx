import LoginLinks from '@/app/LoginLinks'
import Image from 'next/image'

export const metadata = {
    title: 'Bus-App',
}

const About = () => {
    return (
        <>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <LoginLinks />
                <h1> About </h1>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <Image
                        src="/images/smileyfinger.gif"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default About