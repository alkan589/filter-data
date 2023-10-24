"use client"
import { data } from "../data"
import React, { useState } from 'react'
function page() {
  const [text,setText]=useState("")
  const [names,setNames]=useState(data)
  return (  
    <div >
      <div className="flex justify-center">
      <input onChange={(e)=>{setText(e.target.value)}} value={text}className='p-3 mt-4  border border-1 border-black'/>
      </div>
      
      <div >
        {
          names.filter(person=>
            text.toLowerCase()=== "" ? person:person.first_name.toLowerCase().includes(text)).
            map((name)=>{
            return(
              <table className="border-seperate  border border-spacing-5 m-auto border-slate-400">
                <tr key ={name.id} className="hover:bg-red-400 hover:text-white">
                    <td className="p-4 border border-slate-300">{name.id}</td>
                    <td className="p-4 border border-slate-300">{name.email}</td>
                    <td className="p-4 border border-slate-300">{name.first_name}</td>
                    <td className="p-4 border border-slate-300">{name.last_name}</td>
                  </tr>
              </table>
                  
            )
          })
        }
      </div>
    </div>
        
  )
}

export default page