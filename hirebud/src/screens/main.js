import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Cookies from "universal-cookie";

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null,
        service: null,
        area: null,
        services: [],
        cities: [],
        cookie: null,
      };
    }
    componentDidMount() {
        const cookies = new Cookies();
        var cok = cookies.get("id");
        fetch('http://localhost:3001/suggested')
        .then(response => response.json())
        .then(data =>
          
            fetch('http://localhost:3001/services')
            .then(response => response.json())
            .then(data2 =>
                data2.providers.map(f=>this.state.services.push(f.service)),
                
                fetch('http://localhost:3001/cities')
                .then(response => response.json())
                .then(data3 =>
                    data3.providers.map(f=>this.state.cities.push(f.area)),
                    this.setState({
                        loading: false,  
                        data: data.providers,
                        cookie: cok,
                    })
                )
                .catch(error => this.setState({loading: false })),
            )
            .catch(error => this.setState({loading: false })),
        )
        .catch(error => this.setState({loading: false }));
    }
    _onSelect (x){
        console.log(x);
        this.setState({
            service:x.value,
        });
    }
    _onSelect2(x){
        console.log(x);
        this.setState({
            area:x.value,
        });
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

            <section class="hero-section set-bg" style={{backgroundImage:"url(img/hand.jpg)"}}>
                <div class="s01">
                    <form>
                    <div class="inner-form">
                        <div class="input-field first-wrap">
                            <Dropdown options={this.state.services} onChange={(x)=>this.setState({service:x.value})} value={this.state.service} placeholder="Serviço"/>
                        </div>
                        <div class="input-field second-wrap">
                            <Dropdown options={this.state.cities} onChange={(x)=>this.setState({area:x.value})} value={this.state.area} placeholder="Área"/>
                        </div>
                        <div id="container">
                            <button class="learn-more" href="/list">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <a href={"/list?service="+this.state.service+"&area="+this.state.area} class="button-text">Pesquisar</a>
                            </button>
                        </div>                         
                    </div>
                    </form>
                </div>
            </section>

            <section class="property-section">
                <div class="container">
                    <div class="section-title-dest">
                        <h3>Hoje em destaque:</h3>
                    </div>
                    <div class="row">
                        {this.state.data.map(
                            user=>{
                                return(
                                    <div class="card" style={{marginRight:28, marginBottom:30}}>
                                        <img class="card-img-top" src={user.image} style={{width:350, minHeight:250, maxHeight:250}}/>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col">
                                                    <h4 class="card-title">{user.name}</h4>
                                                    <p class="card-text">{user.service}</p>
                                                    <p class="card-text">{user.state}</p>
                                                </div>
                                                <a href={"/service?id="+user.id+"&service="+user.service}>
                                                    <button type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:80, marginRight:20}}><i class="fa fa-plus"></i></button>
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

            <section class="loan-section">
                <div class="loan-warp">
                    <div class="container">
                        <div class="section-title text-white">
                            <h2>Junte-se à equipa</h2>
                            <h5><br/>É fornecedor de um dos serviços abrangidos pela nossa plataforma e gostaria de chegar a mais pessoas?</h5>
                        </div>
                        <form action="/servreg"> 
                            <button class="regbutton" style={{marginLeft:470}}><span>Registe-se já!</span></button>
                        </form>       
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
                                        <p>HireBud, uma plataforma que permite a pesquisa e contacto com profissionais das mais diversas áreas, desde o babysitting à contabilidade que estão disponíveis para o ajudar quando precisar!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6" style={{marginRight:50}}>
                            <div class="footer-widger">
                                <h2>A Empresa</h2>
                                <ul>
                                    <li><a>Sobre</a></li>
                                    <li><a>Ajuda</a></li>
                                    <li><a>Contactos</a></li>
                                    <li><a>Parceiros</a></li>
                                    <li><a>Carreiras</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6" style={{marginRight:60}}>
                            <div class="footer-widger">
                                <h2>Para Clientes</h2>
                                <ul>
                                    <li><a>Compra Segura</a></li>
                                    <li><a>Termos de Utilização</a></li>
                                    <li><a>Política de Privacidade</a></li>
                                    <li><a>Livro de Reclamações</a></li>
                                    <li><a>Mobile apps</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6">
                            <div class="footer-widger">
                                <h2 style={{width:200}}>Para Fornecedores</h2>
                                <ul>
                                    <li><a>Como Funciona?</a></li>
                                    <li><a>Publicidade</a></li>
                                    <li><a>Tarifário</a></li>
                                    <li><a>Termos de Utilização</a></li>
                                    <li><a>Política de Privacidade</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	    </div>
        );   
    }
  }
  export default Main;
  
