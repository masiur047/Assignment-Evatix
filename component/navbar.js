import Link from 'next/link'
import Image from 'next/image'

function Navbar(){
    return (
        <nav className="nav">
            <Image src="/logo_white@2x.png" alt="logo" width={100} height={50} />
            <ul>
                <li>Home</li>
                <li>Profile</li>
            </ul>
            <ul>
                <li>Menu</li>
            </ul>
        </nav>
    )
}

export default Navbar;