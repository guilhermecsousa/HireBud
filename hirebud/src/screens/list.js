import React, { Component } from 'react';

class List extends Component {
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

            <section class="page-top-section set-bg" style={{backgroundImage:'url(img/plant.jpg)'}}>
                <div class="page-top-warp">
                    <h6>resultados da pesquisa,filtros</h6>
                </div>
            </section>

            <section class="search-result-section ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 p-0">
                            <div class="search-results">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="property-item">
                                            <div class="pi-image">
                                                <img src="img/property-search/1.jpg"/>
                                                <div class="pi-badge new">New</div>
                                            </div>
                                            <h3>Zé António</h3>
                                            <h5>Carpinteiro</h5>
                                            <h7>Disponibilidade imediata</h7>
                                            <a href="/service" class="readmore-btn">Saber mais</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="property-item">
                                            <div class="pi-image">
                                                <img src="img/property-search/2.jpg"/>
                                                <div class="pi-badge offer">Offer</div>
                                            </div>
                                            <h3>Luís</h3>
                                            <h5>Carpinteiro</h5>
                                            <h7>Disponibilidade imediata</h7>
                                            <a href="/service" class="readmore-btn">Saber mais</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="property-item">
                                            <div class="pi-image">
                                                <img src="img/property-search/3.jpg"/>
                                                <div class="pi-badge new">New</div>
                                            </div>
                                            <h3>Rita</h3>
                                            <h5>Carpinteiro</h5>
                                            <h7>Disponibilidade imediata</h7>
                                            <a href="/service" class="readmore-btn">Saber mais</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="property-item">
                                            <div class="pi-image">
                                                <img src="img/property-search/4.jpg"/>
                                                <div class="pi-badge offer">Offer</div>
                                            </div>
                                            <h3>Rui</h3>
                                            <h5>Carpinteiro</h5>
                                            <h7>Disponibilidade imediata</h7>
                                            <a href="/service" class="readmore-btn">Saber mais</a>
                                        </div>
                                    </div>
                                </div>
                                <button class="site-btn sb-big load-more">Ver mais</button>
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
                    <div class="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
                </div>
            </footer>
	    </div>
        );
    }
  }
  export default List;
  