import React, { Component } from 'react';
import Cookies from "universal-cookie";
import Popup from "reactjs-popup";

class ServReg extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true,
        data: null,
        cookie: null,
      };
      
    }
        
    componentDidMount() {
        const cookies = new Cookies();
        var cok = cookies.get("id");
        fetch('http://localhost:3001/servlist?id='+cok)
        .then(response => response.json())
        .then(data =>
            this.setState({
            data: data.users,
            loading: false,
            cookie:cok,
            })
        )
        .catch(error => this.setState({loading: false }));
    }

    render(){
        if(this.state.loading) return(
            <a>Loading...</a>
        );
        else return(
        <div>           
            <header class="header-section">
                <a href="/" class="site-logo">
                    <img src="img/logo.png" style={{width:200}}/>
                </a>
            </header>
            
            <section class="signup">
                {this.state.cookie==null?  
                    <div style={{marginTop:200}}>
                        <i style={{marginLeft:320, marginRight:10}} class="fa fa-warning"></i>
                        <a >Necessita ter sessão iniciada para efetuar o registo como prestador de serviços.</a>  
                        <form action="/login">
                            <button class="profbutton2" style={{marginLeft:580, marginBottom:80, marginTop:40}}><span>Login</span></button>
                        </form>
                    </div>    
                    :                   
                    <div id="login-box" style={{marginTop:200}}>
                        <div class="left">
                            <img src="img/plant3.jpg" style={{height:300, marginLeft:30 }}/>
                        </div>
                        <div class="right">
                            <input type="text" name="service" pattern="[a-zA-Z]*" title="Insira um serviço válido" placeholder="Serviço" required/>
                            <input type="text" name="price" placeholder="Preço" required/>
                            <input type="text" name="contact" pattern="[0-9]{9}" title="Insira um contacto válido" placeholder="Contacto" required/>
                            <input type="text" name="obs" placeholder="Observação"/>
                            <Popup trigger={<input type="submit" name="signup_submit" value="Registar Serviço" style={{width:180, marginLeft:20, marginTop:50}}/>} modal>
                                <div class="col" style={{marginBottom:30, marginTop:30, marginLeft:10, marginRight:10}}>
                                    <p style={{marginLeft:160}} >Página de prestador de serviços criada!</p>
                                    <a href={"/main"}>
                                        <button type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:10, marginLeft:300}}><i class="fa fa-home"></i></button>
                                    </a>
                                </div>      
                            </Popup> 
                        </div>
                    </div>
                }    
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
export default ServReg;
  