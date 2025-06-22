"use client"
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DisplayStats from './displaStandings';
import ExitLeagueModal from '../modals/ExitLeagueModal';

function AllCollapseExample({teams, standings}) {
    const pTeams = teams || [];
    const pStandings = standings || [];

    // console.log(pTeams)
 
  return (

        <div>                 
            {pTeams?.map((team, index)=>(
                <Accordion key={index}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{team.leagueName} <sup>{team.owner}</sup>  </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                            <DisplayStats standings={pStandings[index]} /> 
                            </Row>
                            <Row>
                               <Col style={{width:"2rem", display:"flex", justifyContent:"end"}}> <ExitLeagueModal teamID = {team.leagueId} /></Col>
                            </Row>
                        </Accordion.Body>                   
                    </Accordion.Item>
                </Accordion>
            ))} 
        </div>
  );
}

export default AllCollapseExample; 