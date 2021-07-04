import Navbar from "./navbar"
import Image from "next/image"

function First()
{
    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div className="fl">
                <div>
                    <p className="fos">OUR WORK FLOW</p>
                    <p className="fol">Get the most Efficient</p>
                    <p className="fol"> UI Design For your</p>
                    <p className="fol">Business now !</p>
                    <p className="fom">Hire me to design a clone and mordern UI for your productive website</p>
                    <button className="btn">Heire me</button>
                    <button className="btnw">post paid</button>
                </div>
                <Image src="/image_02.png" alt="first image" width={300} height={300} />
            </div>
            
        </div>
    )
}

export default First