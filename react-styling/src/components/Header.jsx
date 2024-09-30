import logo from '../assets/logo.png';
import classes from './Header.module.css'
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* <p style={{
        color: 'red',
        textAlign: 'left'
      }}>A community of artists and art-lovers.</p> Style in React, not in HTML, passed in as object */}
       <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
