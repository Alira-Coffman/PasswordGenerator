
import { Form, Container, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Password from './Password';
export default function PasswordForm ()
{

    const [displayPassword, setDisplay] = useState(false);
    const [characters, setCharacters] = useState(25);
    const [upper, setUpper] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [special, setSpecial] = useState(false);
    return (
        <Container>
          
            <Form.Group as={Row}>
                    <Form.Label>How Many Characters?</Form.Label>
                    <Col xs="9" lg='3'>
                    <Form.Range
                        value={characters}
                        onChange={e => setCharacters(e.target.value)}
                        variant='info'
                        min={5}
                        max={25}
                    />
                    </Col>
                    <Col xs="3" lg='1'>
                    <Form.Control value={characters} disabled/>
                    </Col>
                </Form.Group>

                <Form.Check 
                    type="switch"
                    id="upper"
                    label="Include Uppercase Letters?"
                    defaultChecked={upper}
                    onChange = {e => setUpper(!upper)}
                />
                
                <Form.Check 
                    type="switch"
                    id="numbers"
                    label="Include numbers?"
                    defaultChecked={numbers}
                    onChange= {e =>setNumbers(!numbers)}
                />
                <Form.Check 
                    type="switch"
                    id="special"
                    label="Include special characters e.g., ! @ # ?"
                    defaultChecked={special}
                    onChange= {e =>setSpecial(!special)}
                />
                <button className='btn btn-info mt-3' onClick={e => setDisplay(true)}>Get Password!</button>
            
       

            { displayPassword && 
                <div>
                    <Password characters ={characters} upper={upper} lower={lower} numbers={numbers} special={special}/>

                    
                </div>
            }
        </Container>

    )
}