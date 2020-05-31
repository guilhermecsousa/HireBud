import React, { Component } from 'react';

class Regist extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        username: "",
        area: "",
        email: "",
        password: "",
        qq: false,
      };
      this.register = this.register.bind(this);
      this.user = this.user.bind(this);
      this.area = this.area.bind(this);
      this.email = this.email.bind(this);
      this.pass = this.pass.bind(this);
    }

    componentDidMount() {}

    register(event){
        event.preventDefault();
        fetch('http://localhost:3001/regist?user='+this.state.username+'&area='+this.state.area+'&email='+this.state.email+'&password='+this.state.password)
            .then(response => response.json())
            .then(data => {
                window.location.href = '/login'
            })  
    }

    user(event){
        this.setState({username:event.target.value});
    }
    area(event){
        this.setState({area:event.target.value});
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
                    <img src="img/logo.png" style={{width:200}} alt=""/>
                </a>
            </header>
            <section class="signup" style={{marginTop:170}}>
                <div id="login-box">
                        <div class="left">
                            <form onSubmit={this.register}>
                                <input type="text" name="name" pattern="[a-zA-Z]*" placeholder="Nome" title="Insira um nome válido" value={this.state.username} onChange={this.user} required/>
                                <input type="text" name="area" pattern="[a-zA-Z]*" placeholder="Área" title="Insira uma região válida" value={this.state.area} onChange={this.area} required/>
                                <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Insira um email válido" placeholder="Email" value={this.state.email} onChange={this.email} required/>
                                <input type="password" name="password" pattern=".{8,}" title="Insira oito ou mais caracteres" placeholder="Password (8+ caracteres)" value={this.state.password} onChange={this.pass}required/>
                                <input type="submit" name="signup_submit" value="Registar" />
                            </form>          
                        </div>
                    <div class="right">
                        <img src="img/plant.jpg" alt=""/>
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
                                        <img src="img/logo.png" alt=""/>
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
export default Regist;