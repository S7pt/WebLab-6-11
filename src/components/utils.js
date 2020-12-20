import facebook from "../assets/facebook_icon.svg";
import twitter from "../assets/twitter.svg";
import linkedIn from "../assets/linkedin.svg";
import google from "../assets/google_icon.svg";
import "../styles/spinner.css";


const icons = [{ name: 'facebook', src: facebook, link: '#' }, { name: 'twitter', src: twitter, link: '#' }, { name: 'google', src: google, link: '#' },
{ name: 'linkedIn', src: linkedIn, link: '#' }]

export function Logo({link,size}) {
    return (<img src={link} height={size} width={size} alt="logo"></img>
    )
}
export function Links(){
    return (icons.map(icon =>(
        <a key={icon.name} href={icon.link}>
            <img src={icon.src} alt={icon.name} height='30px' width='30px' />
        </a>
    )))
}
export function Image(props) {
    return (
        <img src={props.img} alt="image" height={props.height} width={props.width} />
    );
}
export function Spinner(){
    return(<div className="loader">Loading</div>)
}