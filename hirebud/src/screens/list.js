import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const services = ['Babysitter','Canalizador','Carpinteiro','Contabilista','Cuidador','Eletricista','Estucador','Explicador','Passeador de cães','Pedreiro','Segurança'];
const cities = ['Aveiro','Águeda','Ílhavo','Oliveira de Azeméis','Ovar','Santa Maria da Feira'];

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null,
      };
    }
    componentDidMount() {
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
                    <img src="img/logo.png" style={{width:200}}/>
                </a>
                <nav class="header-nav">
                    <div class="header-right">
                        <div class="user-panel">
                            <form action="/profile">
                                <button class="profbutton"><span>Meu perfil</span></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="hero-section set-bg" style={{backgroundImage:"url(img/sky.jpg)", height:340, paddingTop:140}}>
                <div class="s01">
                    <form>      
                        <div class="input-field first-wrap" style={{marginBottom:10, width:800}}>
                            <Dropdown options={services} onChange={this._onSelect} value={'Serviço'} placeholder="Serviço"/>
                        </div>
                        <div class="input-field second-wrap" style={{marginBottom:10, width:800}}>
                            <Dropdown options={cities} onChange={this._onSelect} value={'Área'} placeholder="Área"/>
                        </div>
                        <div id="container">
                            <button class="learn-more" href="/list">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <a href="/list" class="button-text">Pesquisar</a>
                            </button>
                        </div>                         
                    </form>
                </div>
            </section>
            <section> 
                {this.state.data.map(
                    user=>{
                        return(    
                            <div class="container">
                                <div class="row">
                                    <div class="card">
                                        <img class="card-img-top" src={user.image} style={{width:350, minHeight:250, maxHeight:250}}/>
                                        <div class="card-body">
                                            <h4 class="card-title"><a href="product.html" title="View Product">{user.name}</a></h4>
                                            <p class="card-text">{user.service}</p>
                                            <p class="card-text">{user.state}</p>
                                            <div class="row">
                                                <div class="col">
                                                    <a href="#" class="btn btn-success btn-block">Contactar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        );
                    }
                )
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
                                        <p>HireBud, uma plataforma que permite a pesquisa e contacto com profissionais das mais diversas áreas, desde o babysitting à contabilidade que estão disponíveis para o ajudar quando precisar!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6" style={{marginRight:50}}>
                            <div class="footer-widger">
                                <h2>A Empresa</h2>
                                <ul>
                                    <li><a href="#">Sobre</a></li>
                                    <li><a href="#">Ajuda</a></li>
                                    <li><a href="#">Contactos</a></li>
                                    <li><a href="#">Parceiros</a></li>
                                    <li><a href="#">Carreiras</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6" style={{marginRight:60}}>
                            <div class="footer-widger">
                                <h2>Para Clientes</h2>
                                <ul>
                                    <li><a href="#">Compra Segura</a></li>
                                    <li><a href="#">Termos de Utilização</a></li>
                                    <li><a href="#">Política de Privacidade</a></li>
                                    <li><a href="#">Livro de Reclamações</a></li>
                                    <li><a href="#">Mobile apps</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6">
                            <div class="footer-widger">
                                <h2>Para Fornecedores</h2>
                                <ul>
                                    <li><a href="#">Como Funciona?</a></li>
                                    <li><a href="#">Publicidade</a></li>
                                    <li><a href="#">Tarifário</a></li>
                                    <li><a href="#">Termos de Utilização</a></li>
                                    <li><a href="#">Política de Privacidade</a></li>
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
  export default List;
  