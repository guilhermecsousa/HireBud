import React, { Component } from 'react';
import Cookies from "universal-cookie";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        email: "",
        password: "",
      };
      this.register = this.register.bind(this);
      this.pass = this.pass.bind(this);
      this.email = this.email.bind(this);
      this.isEmpty = this.isEmpty.bind(this);
    }
    
    componentDidMount() {
      
    }
    
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    register(event){
        fetch('http://localhost:3001/login?email='+this.state.email+'&pass='+this.state.password)
                .then(response => response.json())
                .then(data => {
                    if(this.isEmpty(data)){
                        console.log(data);
                    }else{
                        const cookies = new Cookies();
                        let d = new Date();
                        d.setTime(d.getTime() + (120*60*1000));
                        cookies.set("id", data.users.id, {path: "/", expires: d});
                        window.location.href = '/main'
                    }
                })
    }

    email(event){
        this.setState({email:event.target.value});
    }

    pass(event){
        this.setState({password:event.target.value});
    }
    
    render(){
        return(
        <div>           
            <header class="header-section">
                <a href="/" class="site-logo">
                    <img src="img/logo.png" style={{width:200}}/>
                </a>
            </header>
             
            <section class="signup" style={{marginTop:170}}>
                <div id="login-box">
                    <div class="right" style={{marginTop:40}}>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.email}/>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.pass}/>
                        <div onClick={this.register} style={{marginTop:15}}>
                            <input type="submit" name="signup_submit" value="Login" style={{marginLeft:35}}/>
                        </div>
						<div style={{marginTop:30, marginLeft:15}}>
                            <span class="txt1">Não tem conta?</span>
                            <a href="/regist" class="txt2"> Registe-se já</a> 
                        </div>                          
                    </div>
                    <div class="left" style={{marginTop:40}}>
                        <img src="img/plant2.jpg" style={{}}/>
                    </div>
                </div>
            </section>  
            <footer class="footer-section">
                <div class="container">
                    <div class="row text-white">
                        <div class="col-lg-4">
                            <div class="footer-widger">
                                <div class="about-widget">
                                    <div class="aw-text">
                                        <img src="img/logo.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col" style={{marginRight:50, marginBottom:50}}>
                            <p>HireBud, uma plataforma que permite a pesquisa e contacto com profissionais das mais diversas áreas, desde o babysitting à contabilidade, que estão disponíveis para o ajudar quando precisa!</p>
                            <small><small>MIECT, Interação Humano-Computador, 2020</small></small>
                        </div>
                    </div>
                </div>
            </footer>
        </div>       
    );
}
}
export default Login;