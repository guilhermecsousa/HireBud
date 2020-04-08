import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }
    componentDidMount() {
        
    }
    render(){
        return(
        <div>           
            <header class="header-section">
                <a href="/" class="site-logo">
                    <img src="img/logo.png" style={{width:200}}/>
                </a>
                <nav class="header-nav">
                    <div class="header-right">
                        <div class="user-panel">
                            <a href="/profile" class="register">Meu Perfil</a>
                        </div>
                    </div>
                </nav>
            </header>

            <section class="hero-section set-bg" style={{backgroundImage:"url(img/plant.jpg)"}}>
                <div class="s01">
                    <form>
                    <div class="inner-form">
                        <div class="input-field first-wrap">
                            <input id="service" type="text" placeholder="Serviço" />
                        </div>
                        <div class="input-field second-wrap">
                            <input id="location" type="text" placeholder="Área" />
                        </div>
                        <div id="container">
                            <button class="learn-more" href="/list">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <a href="/list" class="button-text">Pesquisar</a>
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
                        <div class="col-lg-4">
                            <div class="property-item">
                                <div class="pi-image">
                                    <img src="img/property/1.jpg"/>
                                    <div class="pi-badge new">Baixa de preço!</div>
                                </div>
                                <h3>Maria</h3>
                                <h5>Babysitter</h5>
                                <h5>Disponibilidade imediata</h5>
                                <a href="service.html" class="readmore-btn">Saber mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="property-item">
                                <div class="pi-image">
                                    <img src="img/property/2.jpg"/>
                                    <div class="pi-badge offer">Novo!</div>
                                </div>
                                <h3>Zé Carlos</h3>
                                <h5>Eletricista</h5>
                                <h5>Disponível mediante marcação</h5>
                                <a href="service.html" class="readmore-btn">Saber mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="property-item">
                                <div class="pi-image">
                                    <img src="img/property/3.jpg"/>
                                    <div class="pi-badge new">Baixa de preço!</div>
                                </div>
                                <h3>Rui Pedro</h3>
                                <h5>Explicações Matemática</h5>
                                <h5>Disponível mediante marcação</h5>
                                <a href="service.html" class="readmore-btn">Saber mais</a>
                            </div>
                        </div>
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
                            <button class="site-btn">Registar</button>
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
                    <div class="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
                </div>
            </footer>
	    </div>
        );
    }
  }
  export default Main;
  
