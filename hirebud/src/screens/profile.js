import React, { Component } from 'react';
import Cookies from "universal-cookie";

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        id:null,
        loading: true,
      };
    }
    componentDidMount() {
        const cookies = new Cookies();
        var cok = cookies.get("id");
        fetch('http://localhost:3001/profile?id='+cok)
        .then(response => response.json())
        .then(data =>
            this.setState({
            data: data.users,
            loading: false,
            })
        )
        .catch(error => this.setState({loading: false }));
    }

    remove(event){
        const cookies = new Cookies();
        cookies.remove("id");
    }

    render(){
        if(this.state.loading) return(
            <a>Loading...</a>
        );
        else return(
            <div>
                <header class="header-section header-bg-2">
                    <a href="/" class="site-logo">
                        <img src="img/logo.png" style={{width:200}}/>
                    </a>
                </header>

                <section class="myprofile">
                    <div class="card" style={{width:600, marginLeft:200, marginBottom:150, marginTop:200}}>      
                        <div class="card-body">
                            <div class="row">
                                <img class="card-img-top" src="img/avatar.png" style={{width:150, marginLeft:20, marginRight:30}}/>
                                <div class="col">
                                    <h4 class="card-title">{this.state.data.name}</h4>
                                    <p class="card-text">{this.state.data.email}</p>
                                    <p class="card-text">{this.state.data.area}</p>
                                </div>
                                <div onClick={this.remove}>
                                    <a href={"/main"}>
                                        <button type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:100, marginRight:20}}><i class="fa fa-sign-out"></i></button>
                                    </a>
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
  