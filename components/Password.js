
import { useEffect , useState} from 'react';
import { Form } from 'react-bootstrap'
export default function Password ({characters, upper, lower, numbers, special})
{

    const [password, setPassword] = useState('')
    useEffect(() =>
    {
        let result = ''
        let options = 'abcdefghijklmnopqrstuv';
        if(numbers)
                    options+='1234567890'
        if(special)
            options+='?#@!'
        if(upper)
            options+=options.toUpperCase();
        
        
        

            console.log(options)
        for(let i = 0; i < characters; i++)
        {
            result+=options.charAt(Math.floor(Math.random() * 
            characters));
        }
        setPassword(result);
    }, [upper, characters, numbers, special])
   
    return (
        <Form.Group className="mb-3">
        <Form.Label>Password Value</Form.Label>
        <Form.Control  disabled  placeholder={password}/>
      </Form.Group>

    )
}