import LoginLinks from '@/app/LoginLinks'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const metadata = {
    title: 'Bus-App',
}

const Home = () => {




    return (
        <>
            <Container >
                <LoginLinks />

                <Row >
                    <Col className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <Image
                        src="/images/smileyfinger.gif"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </Col>
                </Row>                   
               
            </Container>
        </>
    )
}

export default Home
