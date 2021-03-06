import React from 'react'
import SignComponent from '../components/SignComponentSignIn'
import Background from '../images/obrazek_strona_glowna'
import sygnet from '../images/sygnet.svg' 

const SignIn = () => 
<div className="sign-in" style={{backgroundImage: `url(${Background})`}}>
<div className="information-wrapper">
<img className="sygnet" src={sygnet}></img>
<span className="information">Pierwsza platforma dla biednych ludzi</span>
</div>
<div className="comp"><SignComponent /></div>
<style jsx>{`
.information-wrapper {
    height: 100%;
    display:grid;
    grid-auto-flow: column;
    place-content: center;
}
.sygnet {
    margin: auto 40px;
    width: 140px;
    height:140px;
}
.information {
    color: white;
    font-size: 60px;
    width: 550px;
    font-family: Lato;
    font-weight:bold;
    letter-spacing: 1px;
}
.sign-in {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    grid-template-columns: 60% 40%;
    place-content: center;
}
.comp {
    width: 600px;
    height: 480px;
    margin: 20% 0% 0% 10%;
}
`}</style>
</div>

export default SignIn
