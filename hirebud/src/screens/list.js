import React, { Component } from 'react';
import Cookies from "universal-cookie";

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null,
        cookie: null,
      };
    }
    componentDidMount() {
        const cookies = new Cookies();
        var cok = cookies.get("id");
        const querystring = window.location.search;
        var service = new URLSearchParams(querystring).get("service");
        var area = new URLSearchParams(querystring).get("area");
        fetch('http://localhost:3001/servlist?service='+service+'&area='+area)
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the state
        .then(data =>
          this.setState({
            data: data.providers,
            loading: false,
            cookie:cok,
          })
          
        )
        // Catch any errors we hit and update the app
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
                    <img src="img/logo.png" style={{width:200}} alt=""/>
                </a>
                <nav class="header-nav">
                    <div class="header-right">
                        <div class="user-panel">
                            <div class="row">
                                {this.state.cookie==null?
                                <form action="/login">
                                    <button class="profbutton"><span>Login</span></button>
                                </form>
                                :
                                <form action={"/profile?id="+this.state.cok}>
                                    <button class="profbutton"><span>Meu perfil</span></button>
                                </form>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="hero-section set-bg" style={{backgroundImage:"url(img/sky.jpg)", height:200, paddingTop:140}}>
            <a href={"/main"}>
                <button title="Voltar" type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:2, marginLeft:20}}><i class="fa fa-arrow-left"></i></button>
            </a>
            </section>
            <section> 
                <div class="container">
                    <div class="row">
                        {this.state.data.map(
                            user=>{
                                return(    
                                    <div class="card" style={{marginRight:28, marginBottom:30}}>
                                        <a href={"/service?id="+user.id+"&service="+user.service}>
                                            <img class="card-img-top" src={user.image} style={{width:350, minHeight:250, maxHeight:250}} alt=""/>
                                        </a>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <a href={"/service?id="+user.id+"&service="+user.service}>
                                                        <h4 class="card-title">{user.name}</h4>
                                                    </a>
                                                    <p class="card-text">{user.service}</p>
                                                    <p class="card-text">{user.state}</p>
                                                </div>
                                                <a href={"/service?id="+user.id+"&service="+user.service}>
                                                    <button title="Saber mais" type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:80, marginRight:20}}><i class="fa fa-plus"></i></button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>                              
                                );
                            }
                        )
                        }
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
export default List;