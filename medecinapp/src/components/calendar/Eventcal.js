import React, { useState, useEffect } from 'react'
import Firebase from '../../Firebase/Firebase'
import 'firebase/firestore'
import Card from 'react-bootstrap/Card'

export default function Eventcal() {
    const [events, setevents] = useState([])
    const [nom, setNom] = useState('');
    const [seance, setSeance] = useState('');

    const handleOnchange = (e) => {
        setNom(e.target.value)
    };

    useEffect(() => {
        const fetchData = async () => {
            const db = Firebase.firestore();
            const data = await db.collection("appoint").get();
           setevents(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        };
       
        fetchData();
    }, [])

    const createEvents = (newEvents) => {
        newEvents.preventDefault();
        
        const db = Firebase.firestore().collection("appoint")
        // const dbRef = Firebase.database().ref("appoint");
        const dbdata = {
            nom,
            seance,
        };
         db.doc(newEvents.id).set(dbdata);
    }
    return (
        
        <div>
             <Card style={{ width: '15rem', padding:"20px", backgroundColor:"#F3FAFF", marginTop:"85px"}}>
            <tr>
                <td><input 
                type="text" 
                onChange={handleOnchange} 
                placeholder="Your name" 
                style={{border:"1px solid black",
                        padding: "5px 12px",
                        borderRadius:"10px",
                        color:"black"}}
                /></td>
            </tr>
            <label style={{marginTop:"10px"}}>séance :</label>

            <tr>
                <td></td>
                <input type="radio" value="séance 1" id="s1" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s1">8h - 9h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value="séance 2" id="s2" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s2">9h - 10h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value="séance 3" id="s3" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s3">10h - 11h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value="séance 4" id="s4" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s4">11h - 12h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value="séance 5" id="s5" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s5">14h - 15h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value="séance 6" id="s6" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s6">15h - 16h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value="séance 7" id="s7" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s7">16h - 17h</label>
            </tr>
            <tr>
                <td></td>
                <input type="radio" value=" séance 8" id="s8" style={{marginLeft:"50px"}} name="seance" onChange={(e) => {setSeance(e.target.value)}}/>
                <label htmlFor="s8">17h - 18h</label>
            </tr>
            
            <tr><button 
            onClick={createEvents}
            style={{border: "none",
                    textDecoration:"none",
                    padding:"5px 25px",
                    borderRadius:"20px",
                    float:"right",
                    backgroundColor:"#0B92F3",
                    color:"white",
                    marginLeft:"20px"}}
            >Confirmer</button>
            </tr>
            </Card>
            {/* {events.map((events) => (
            <div style={{marginLeft:"200px"}}>
            <tr>
                <td>{events.nom}</td>
                <td>===============: </td>
                <td>{events.seance}</td>
            </tr>
            </div>))} */}
        </div>
    )
    
}


