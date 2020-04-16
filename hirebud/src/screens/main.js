import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const services = ['Babysitter','Canalizador','Carpinteiro','Contabilista','Cuidador','Eletricista','Estucador','Explicador','Passeador de cães','Pedreiro','Segurança'];
const cities = ['Aveiro','Águeda','Ílhavo','Oliveira de Azeméis','Ovar','Santa Maria da Feira'];

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null,
        service: null,
        area: null,
      };
    }
    componentDidMount() {
        fetch('http://localhost:3001/providers')
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then(data =>
          this.setState({
            data: data.providers,
            loading: false,
          })
        )
        // Catch any errors we hit and update the app
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

        else 
       
        return(
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

            <section class="hero-section set-bg" style={{backgroundImage:"url(img/hand.jpg)"}}>
                <div class="s01">
                    <form>
                    <div class="inner-form">
                        <div class="input-field first-wrap">
                            <Dropdown options={services} onChange={(x)=>this.setState({service:x.value})} value={this.state.service} placeholder="Serviço"/>;
                        </div>
                        <div class="input-field second-wrap">
                            <Dropdown options={cities} onChange={(x)=>this.setState({area:x.value})} value={this.state.area} placeholder="Área"/>;
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
                                    <div class="col-lg-4">
                                        <div class="property-item">
                                            <div class="pi-image">
                                                <img src={user.image} style={{width:350, minHeight:250, maxHeight:250}}/>
                                                <div class="pi-badge new">Baixa de preço!</div>
                                            </div>
                                            <h3>{user.name}</h3>
                                            <h5>{user.service}</h5>
                                            <h5>{user.state}</h5>
                                            <a href={"/service?id="+user.id} class="readmore-btn">Saber mais</a>
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
                            <h4><b><br/><br/>Registe-se já!</b></h4>
                        </div>
                        <form class="loan-form">
                            <input type="text" placeholder="Nome"/>
                            <input type="text" placeholder="Serviço"/>
                            <form action="/regist"> 
                                <button class="regbutton"><span>Registar</span></button>
                            </form>       
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
  export default Main;
  
