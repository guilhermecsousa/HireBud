import React, { Component } from 'react';
import Cookies from "universal-cookie";

class Service extends Component {
    constructor(props) {
      super(props);
      this.statsRef = React.createRef()
      this.statsRef2 = React.createRef()
      this.state = {
        loading: true,
        data: null,
        data2: null,
        cookie: null,
      };
    }
    
    componentDidMount() {
        const cookies = new Cookies();
        var cok = cookies.get("id");
        const querystring = window.location.search;
        var n = new URLSearchParams(querystring).get("id");
        var serv = new URLSearchParams(querystring).get("service");
        if(n==null || n=='0') n=1;
        fetch('http://localhost:3001/provider?id='+n)
        
        .then(response => response.json())
        
        .then(data =>
            fetch('http://localhost:3001/similar?service='+serv+'&id='+n)
            .then(response => response.json())
            .then(data2 =>
                this.setState({
                data2: data2.providers,
                data: data.providers,
                loading: false,
                cookie:cok,
                })
            )
            .catch(error => this.setState({loading: false })),
        ) 
        .catch(error => this.setState({loading: false }));
    }

    handleScrollToStats = () => {
        window.scrollTo({
            top: this.statsRef.current.offsetTop,
            behavior: 'smooth'    
        })
    }
    handleScrollToStats2 = () => {
        window.scrollTo({
            top: this.statsRef2.current.offsetTop,
            behavior: 'smooth'    
        })
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
            <section class="blog-section spad">
                <div class="container">
                    <div class="blog-item feature-blog;">    
                        <div class="container emp-profile">
                            <form method="post">
                                <div class="row">
                                    <div class="profile-img">
                                        <img src={this.state.data.image} style={{minHeight:200, maxHeight:200, minWidth:300, maxWidth:300}}/>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="profile-head">
                                                <h5>{this.state.data.name}</h5>
                                                <h6>{this.state.data.service}</h6>
                                                <p class="proile-rating">Avaliação : <span>{this.state.data.evaluation}</span></p>
                                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="" role="tab" aria-controls="home" aria-selected="true">Sobre</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="profile-tab" onClick={this.handleScrollToStats} data-toggle="tab" href="#comments" role="tab" aria-controls="profile" aria-selected="false">Comentários</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {this.state.cookie==null?
                                                <div class="dropdown" style={{marginLeft:320}}>  
                                                    <button type="button" class="btn btn-info btn-circle-xl btn-lg" style={{width: 150, marginTop:25, marginLeft:100}}><span><i class="fa fa-phone"></i><a class="txt3"> Contacto</a></span></button>
                                                    <div class="dropdown-content">
                                                        <p><i class="fa fa-warning"></i> Necessita iniciar sessão para consultar os dados de contacto</p>
                                                    </div>    
                                                </div>
                                                :
                                                <div class="dropdown" style={{marginLeft:320}}>  
                                                    <button type="button" class="btn btn-info btn-circle-xl btn-lg" style={{marginTop:25, marginLeft:180}}><i class="fa fa-phone"></i></button>
                                                    <div class="dropdown-content">
                                                        <p><i class="fa fa-mobile-phone"></i> {this.state.data.contact}</p>
                                                    </div>    
                                                </div>
                                                }
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-7" style={{marginLeft:480}}>
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active"  role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row">
                                                    <div class="col-md-6"><label>Área</label></div>
                                                    <div class="col-md-6"><p>{this.state.data.area}</p></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6"><label>Preço</label></div>
                                                    <div class="col-md-6"><p>{this.state.data.price}</p></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6"><label>Estado</label></div>
                                                    <div class="col-md-6"><p>{this.state.data.state}</p></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6"><label>Observações</label></div>
                                                    <div class="col-md-6"><p>{this.state.data.obs}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>  
                            <button class="buttonreg btndown" style={{marginLeft:-80}} onClick={this.handleScrollToStats2}><span><i class="fa fa-arrow-down"></i> Anúncios semelhantes </span></button>         
                        </div>
                     </div>
                <div ref={this.statsRef}></div>
                <div class="row bootstrap snippets" style={{marginTop:150}}>
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
                                        <button type="button" class="btn btn-info pull-right" style={{height:40}}>Publicar</button>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                    <div style={{marginTop:200}} ref={this.statsRef2}></div>   
                    <br></br>  <br></br>              
                    <div class="section-title-dest" ><h6>Serviços de <b>{this.state.data.service}</b> semelhantes:</h6></div>
                    <div class="row">
                        {this.state.data2.map(
                            user=>{
                                return(
                                    <div class="card" style={{marginRight:28, marginBottom:30}}>
                                        <a href={"/service?id="+user.id+"&service="+user.service}>
                                            <img class="card-img-top" src={user.image} style={{width:350, minHeight:250, maxHeight:250}}/>
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
        );}
    }
  }
  export default Service;