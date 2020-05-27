import React, { Component } from 'react';
import Cookies from "universal-cookie";

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
                            <input type="text" name="service" placeholder="Serviço" />
                            <input type="text" name="price" placeholder="Preço" />
                            <input type="text" name="contact" placeholder="Contacto" />
                            <input type="text" name="obs" placeholder="Observação" />
                            <a href={"/main"}>
                                <input type="submit" name="signup_submit" value="Registar Serviço" style={{width:180, marginLeft:20, marginTop:50}}/>
                            </a>    
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
  