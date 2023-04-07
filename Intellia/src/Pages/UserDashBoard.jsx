import React from 'react'
import "../styles/UserDashboard.css"
import "../script"

function UserDashBoard() {
  return (
    <>
     <div id="app">
      <div id="private_header">
        <ul>
          <li><a href="https://rdapps.swinfra.net/quixy/#/search">Quixy</a></li>
          <li><a href="http://ppmsearch.swinfra.net/sites/ph/qc/results.aspx?k=GRAPH_RESULT_LIFESPAN&s=Everything%20-%20QC">PPM</a></li>
          <li><a href="https://microfocus.lightning.force.com/">Sales force</a></li>
          <li><a href="https://tekexperts.sharepoint.com/Tek_%20Analytics/MF_Reporting/Lists/Follow%20the%20Sun/AllItems.aspx?xsdata=MDV8MDF8fDY5ZTZlNzc1MTIzODRmODVhZjgwMDhkYjE0MjA5N2I1fGZmY2VhNThjNzY2YjRlZWE5Njg0OTJjYzdjYjNjNWU5fDB8MHw2MzgxMjU5MDI0MTk4MzI3MDR8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVFkzTmprNU16UTBNVEkwTmpzeE5qYzJPVGt6TkRReE1qUTJPekU1T2pJeFpERm1NMlF3TFRCalptTXRORGd4TXkxaFpqTm1MVGxpTVdRM05HWmhaREpqTlY4NU5XSm1NMkZoTlMxbFptSmpMVFExTURZdE9UWmhZaTAwTWpZek1tTmxPRGt3TnpGQWRXNXhMbWRpYkM1emNHRmpaWE09fGE3M2VmNzUxZjBlZjRjNDBhZjgwMDhkYjE0MjA5N2I1fGRhNzhlNTZlNWM2NjQ3YWNiZDBhZDA2ZGYwMDZkNTdk&sdata=NnlvR2Y2TWRwYWJxUFVnQkFub25QMkQ4WkF2MzlYa1AvM2N2UVZ6WlpsQT0%3D&ovuser=ffcea58c-766b-4eea-9684-92cc7cb3c5e9%2Crobert.ishimwe%40tek-experts.com&OR=Teams-HL&CT=1677072445661&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzAxMDEwMDkxMyIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D">Case transfer</a></li>
        </ul>
      </div>
      <div id="chat_container"></div>

      <form>
        <textarea name="prompt" rows="1" cols="1" placeholder="Ask intellia..."></textarea>
        <button type="submit"><img src="assets/send.svg" alt="send" /></button>
      </form>
    </div>
    </>
  )
}

export default UserDashBoard