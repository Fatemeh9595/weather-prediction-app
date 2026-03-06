import cloudImage from "../assets/cloud.webp";



export default function Clouds(){
    return(
        <div className="clouds">
            <img src={cloudImage} className="cloud cloud-1" alt="Cloud" />
            <img src={cloudImage} className="cloud cloud-2" alt="Cloud" />
            <img src={cloudImage} className="cloud cloud-3" alt="Cloud" />
        </div>
    )
}