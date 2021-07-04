import Link from 'next/link'

function Navbar(){
    return (
        <nav className="nav">
            <ul className="nav1">
            <li><Link href="/">Home</Link></li>
            </ul>
            <ul className="nav1">
              <li><Link href="/profile/delete/deleteId">Delete Profile</Link></li>
              <li><Link href="/profile/profileId">Edit Profile</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/SignUp">SignUp</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;