import Link from "next/link"


export default function Navigation() {
    return (
        <nav style={ {
            marginTop: "10px",
            display: "flex",
            gap: "25px",
            borderRadius:"5px",
            backgroundColor: "lightgrey",
            padding: "15px",
            paddingLeft: "25px",
            paddingRight: "25px"
            
            
        }}>
          <Link className="Link" href='/'> Home</Link>
          <Link className="Link" href='/wetter'> Wetter</Link>
        </nav>
    )
}