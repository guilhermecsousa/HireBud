import React, { Component } from 'react';

class Profile extends Component {
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
                <header class="header-section header-bg-2">
                    <a href="/" class="site-logo">
                        <img src="img/logo.png" style={{width:200}}/>
                    </a>
                </header>

                <section class="myprofile">
                    <div class="container">    
                        <div class="jumbotron">
                            <div class="row">
                                <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                                    <img src="img/jorge.jpg"/>
                                </div>
                                <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                                    <div class="container" style={{borderBottom:10}}>
                                        <h4>Jorge Mendes</h4>
								        <h6>jorgemendes@hirebud.com</h6>
                                    </div>
                                </div>
                            </div>    
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
  export default Profile;
  