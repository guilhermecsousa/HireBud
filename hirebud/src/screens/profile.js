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
                                    <p class="card-text"><i style={{marginRight:10}} class="fa fa-mail-forward"></i>{this.state.data.email}</p>
                                    <p class="card-text"><i style={{marginRight:10}} class="fa fa-home"></i>{this.state.data.area}</p>
                                </div>
                                <div onClick={this.remove}>
                                    <a href={"/main"}>
                                        <button title="LogOut" type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:100, marginRight:20}}><i class="fa fa-sign-out"></i></button>
                                    </a>
                                </div>
                                <div class="dropdown" style={{marginLeft:520}}>
                                        <button type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginRight:10}}><i class="fa fa-info"></i></button>
                                        <div class="dropdown-content" style={{width:280}}>
                                            <p><i class="fa fa-edit"></i><b> Serviço:</b> -</p>
                                            <p><i class="fa fa-edit"></i><b> Estado:</b> -</p>
                                            <p><i class="fa fa-edit"></i><b> Preço:</b> -</p>
                                            <p><i class="fa fa-edit"></i><b> Observações:</b> -</p>
                                            <p><i class="fa fa-edit"></i><b> Contacto:</b> -</p>
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
  export default Profile;
  