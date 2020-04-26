import React, { Component } from 'react';

class Service extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: null,
        data2: null,
      };
    }
    
    componentDidMount() {
        const querystring = window.location.search;
        var n = new URLSearchParams(querystring).get("id");
        var serv = new URLSearchParams(querystring).get("service");
        if(n==null || n=='0') n=1;
        fetch('http://localhost:3001/provider?id='+n)
        
        .then(response => response.json())
        
        .then(data =>
            fetch('http://localhost:3001/similar?service='+serv)
            .then(response => response.json())
            .then(data2 =>
                this.setState({
                data2: data2.providers,
                data: data.providers,
                loading: false,
                })
            )
            .catch(error => this.setState({loading: false })),
        ) 
        .catch(error => this.setState({loading: false }));
    }
    render(){
        if(this.state.loading) return(
            <a>Loading...</a>
        );
        else{
        console.log(this.state.data2);
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
            <section class="blog-section spad">
                <div class="container">
                    <div class="blog-item feature-blog;">
                        <div class="container emp-profile">
                            <form method="post">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="profile-img">
                                            <img src={this.state.data.image}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="profile-head">
                                                    <h5>{this.state.data.name}</h5>
                                                    <h6>{this.state.data.service}</h6>
                                                    <p class="proile-rating">Avaliação : <span>{this.state.data.evaluation}</span></p>
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sobre</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Comentários</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></defs></svg>
                                    <div class="container">
	                                    <a class="btn" href="/">Button
		                                    <svg class="button-stroke" viewBox="0 0 154 13">
			                                    <use href="#line"></use>
		                                    </svg>
		                                    <svg class="button-stroke" viewBox="0 0 154 13">
			                                    <use href="#line"></use>
		                                    </svg>
	                                    </a>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Área</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.data.area}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Estado</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.data.state}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Preço</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.data.price}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Observações</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.data.obs}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>           
                        </div>	
                    </div>

                    <div class="row bootstrap snippets">
                        <div class="col-md-6 col-md-offset-2 col-sm-12">
                            <div class="comment-wrapper" style={{width:900, margin:0}}>
                                <div class="panel panel-info">
                                    <div class="panel-body">							
                                        <ul class="media-list">
                                            <li class="media">
                                                <a href="#" class="pull-left">
                                                    <img src="https://bootdey.com/img/Content/user_1.jpg" class="img-circle" style={{marginRight: 10}}/>
                                                </a>
                                                <div class="media-body">
                                                    <span class="text-muted pull-right">
                                                        <small class="text-muted">há 45 minutos</small>
                                                    </span>
                                                    <strong class="text-success" >@Luís Gomes Ribeiro</strong>
                                                    <p>Excelente profissional</p>
                                                </div>
                                            </li>
                                            <li class="media">
                                                <a href="#" class="pull-left">
                                                    <img src="https://bootdey.com/img/Content/user_3.jpg" class="img-circle" style={{marginRight: 10}}/>
                                                </a>
                                                <div class="media-body">
                                                    <span class="text-muted pull-right">
                                                        <small class="text-muted">em 02 de Abril</small>
                                                    </span>
                                                    <strong class="text-success">@Tiago Alves Martins</strong>
                                                    <p>Rápido e eficaz</p>
                                                </div>
                                            </li>
                                            <li class="media">
                                                <a href="#" class="pull-left">
                                                    <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle" style={{marginRight: 10}}/>
                                                </a>
                                                <div class="media-body">
                                                    <span class="text-muted pull-right">
                                                        <small class="text-muted">em 25 de Fevereiro</small>
                                                    </span>
                                                    <strong class="text-success">@Maria Barros Rodrigues</strong>
                                                    <p>Aceitável</p>
                                                </div>
                                            </li>
                                        </ul>				
                                        <textarea class="form-control" placeholder="Deixe o seu comentário" rows="3"></textarea>
                                        <br/>
                                        <button type="button" class="btn btn-info pull-right">Publicar</button>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section-title" style={{marginTop:200}}>
                        <h5>Semelhantes</h5>
                    </div>
                    <div class="row">
                        {this.state.data2.map(
                            user=>{
                                return(
                                    <div class="col-lg-4">
                                        <div class="property-item">
                                            <div class="pi-image">
                                                <img src={user.image} style={{width:350, minHeight:250, maxHeight:250}}/>
                                            </div>
                                            <h3>{user.name}</h3>
                                            <h5>{user.service}</h5>
                                            <h5>{user.state}</h5>
                                            <a href={"/service?id="+user.id+"&service="+user.service} class="readmore-btn">Saber mais</a>
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
        );}
    }
  }
  export default Service;