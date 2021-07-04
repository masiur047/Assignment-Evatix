import { useRouter } from "next/dist/client/router";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { result } from "lodash";
import Delete from "../../../components/delete"
import { getDomainLocale } from "next/dist/next-server/lib/router/router";

const users=[{
    id:1,
    name:'Masiur',
    phoneNumber:'01202',
    profession:'student',
    email:'mas@gmail.com'
}
]

function Deleted()
{
    
    const[user,setUser]=useState([])
    const router = useRouter();
    const profileId= router.query.profileId;
    useEffect(()=>{
        setUser(users);
         // axios.get(`https/domain/update/${props.id`}).
        //       then(res=>{
        //           user=res.data;
        //       }).
        //       catch(error=>{
        //           console.log({error});
        //       })
    },[]);
    return (
        <Fragment>
            <h1>Profile Details</h1>
           
            {user.map(use=>(
                <Delete 
                name={use.name}
                email={use.email}
                phoneNumber={use.phoneNumber}
                profession={use.profession}
                id={profileId}
                key={use.id}
                />
            ))}
            
        </Fragment>
    );
}

export default Deleted