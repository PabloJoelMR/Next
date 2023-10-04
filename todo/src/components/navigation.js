import Link from "next/link"


export default function Navigation() {
    return (
        <nav style={ {
            marginTop: "10px",
            display: "flex",
            gap: "1rem",
            backgroundColor: "lightgrey",
            padding: "1rem"
        }}>
          <Link className="Link" href='/'> Home</Link>
          <Link className="Link" href='register'> Register</Link>
          <Link className="Link" href='login'> Login</Link>
          <Link className="Link" href='todo'> Todos</Link>
        </nav>
    )
}