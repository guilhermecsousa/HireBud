// js file that allows to manage the sql inputs needed to create and insert values into 
//  the providers table in HireBud database

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hirebud",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // CRIAÇÂO DA TABELA
    var sql = "CREATE TABLE IF NOT EXISTS providers (id INT AUTO_INCREMENT, name VARCHAR(255), service VARCHAR(255), area VARCHAR(255), "+
    "state VARCHAR(255), evaluation VARCHAR(255), price VARCHAR(255), obs VARCHAR(255), image VARCHAR(255), contact VARCHAR(255),  PRIMARY KEY (id));";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Providers table created with success.");
    });

    //INSERÇÃO DOS VALORES
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Carlos Ferreira', 'Eletricista', 'Aveiro', 'Disponível' , '4.6/5', 'Sujeito a orçamento', '-' , 'https://www.electricalprosworcester.com/uploads/1/2/4/0/124026970/published/electrician-near-me_1.jpeg?1548172423', '957851463') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Rui Monteiro', 'Eletricista', 'Aveiro', 'Disponível' , '4.2/5', 'Sujeito a orçamento', '-' , 'https://pme.pt/wp-content/uploads/2019/02/eletricista-e1556118107920.jpg', '950011463') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Paulo Andrade', 'Eletricista', 'Santa Maria da Feira', 'Disponível' , '4.6/5', 'Sujeito a orçamento', '-' , 'https://www.trade-schools.net/graphics/electrician-jobs-top-1.jpg', '952265463') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Luís Morgado', 'Eletricista', 'Oliveira de Azeméis', 'Disponível' , '4/5', 'Sujeito a orçamento', 'Especializado em automóveis' , 'https://centeccursos.com/wp-content/uploads/2017/06/ELETRICISTA-DE-AUTOM%C3%93VEIS.jpg', '957754963') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Pedro Oliveira', 'Explicador', 'Ovar', 'Mediante marcação' , '4/5', '10€/h', 'Matemática, 2º e 3º ciclos' , 'https://diariodigitalcastelobranco.pt/ficheiros/noticias/1511207345_tutoring-business-slide.jpg', '974638742') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Magda Brito', 'Explicador', 'Aveiro', 'Mediante marcação' , '4.3/5', '9€/h', 'Biologia e Geologia' , 'https://abrilguiadoestudante.files.wordpress.com/2019/04/orientac3a7c3a3o-como-virar-professora-de-matemc3a1tica.png', '957516285') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Lídia Figueiredo', 'Explicador', 'Aveiro', 'Disponível' , '4.5/5', '10€/h', 'Físico-Química, Física, Química' , 'https://abrilguiadoestudante.files.wordpress.com/2018/01/professora.jpg', '986546546') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Rui Marvão', 'Explicador', 'Ílhavo', 'Disponível' , '4.8/5', '9€/h', 'Inglês' , 'https://cdn1.newsplex.pt/fotos/2015/6/2/463626.jpg?type=Artigo', '978912330') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Rita Amaral', 'Babysitter', 'Aveiro', 'Disponível' , '4.5/5', '8€/h', '-' , 'https://www.masterd.pt/noticias/wp-content/uploads/2020/07/AEIB_forma%C3%A7%C3%A3o.jpg', '973574565') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Nanda Gonçalves', 'Babysitter', 'Ílhavo', 'Disponível' , '4/5', '9€/h', 'Possuo carta de condução' , 'https://babyology.com.au/wp-content/uploads/2019/03/babysitter-1.jpg', '997435910') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Rute Freitas', 'Babysitter', 'Águeda', 'Disponível' , '4/5', '9€/h', 'Possiblilidade de deslocação na zona de Aveiro' , 'https://www.newyorkfamily.com/wp-content/uploads/2018/09/baby-sitter.jpg', '941597334') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Bernardo Almeida', 'Babysitter', 'Aveiro', 'Disponível' , '5/5', '8€/h', '-' , 'https://www.sheknows.com/wp-content/uploads/2018/08/tnjoeagkfw3pegcl3ptt.jpeg', '941597300') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('José Luís', 'Carpinteiro', 'Águeda', 'Disponível' , '4/5', 'Sujeito a orçamento', 'Possiblilidade de deslocação na zona de Aveiro' , 'https://www.pontorh.com.br/wp-content/uploads/2016/05/carpinteiro.jpg', '9545123545') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Manuel Nogueira', 'Carpinteiro', 'Aveiro', 'Mediante marcação' , '3.5/5', 'Sujeito a orçamento', '-' , 'https://st3.depositphotos.com/11233746/14245/i/450/depositphotos_142453425-stock-photo-carpenter-working-with-wooden-plank.jpg', '908439852') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Leandro Mateus', 'Carpinteiro', 'Santa Maria da Feira', 'Disponível' , '4/5', 'Sujeito a orçamento', '-' , 'https://i2.wp.com/jbconstrucao.com/wp-content/uploads/2019/11/carpentry2-1024x683-e1573959162281.jpg?fit=640%2C427&ssl=1', '954789159') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Henrique Teixeira', 'Carpinteiro', 'Aveiro', 'Mediante marcação' , '4.1/5', 'Sujeito a orçamento', '-' , 'https://img.freepik.com/fotos-gratis/sorrindo-macho-carpinteiro-desgastar-seguranca-oculos-ficar-frente-workbench-com-seu-braco-cruzou_23-2147944931.jpg?size=626&ext=jpg', '908439852') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Valério Santos', 'Canalizador', 'Aveiro', 'Mediante marcação' , '3.7/5', 'Sujeito a orçamento', '-' , 'https://s3-us-west-2.amazonaws.com/jobcorps.gov/styles/fs_bg_img_sm/s3/2019-03/jc-plumbing-6259.jpg?h=09532052&itok=1FTXETpi', '998435916') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('João Ribeiro', 'Canalizador', 'Oliveira de Azeméis', 'Mediante marcação' , '4/5', 'Sujeito a orçamento', 'Possiblilidade de deslocação na zona de Aveiro' , 'https://www.emergencyplumbingmanchester.co.uk/wp-content/uploads/2018/10/QL_LocalPlumber.png', '996159789') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Sérgio Farinha', 'Canalizador', 'Águeda', 'Mediante marcação' , '4.5/5', 'Sujeito a orçamento', '-' , 'https://topcanalizador.pt/wp-content/uploads/2018/06/top_canalizador_slider.jpg', '998435916') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Vítor Silva', 'Canalizador', 'Aveiro', 'Mediante marcação' , '3.8/5', 'Sujeito a orçamento', '-' , 'https://i0.wp.com/canalizadorlisboa.com.pt/wp-content/uploads/2019/05/Canalizador-sif%C3%A3o.jpg?fit=640%2C480&ssl=1', '998764916') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Jorge Pinto', 'Segurança', 'Aveiro', 'Mediante marcação' , '4.5/5', '20€/h', 'Todo o tipo de eventos' , 'https://www.powershield.pt/wp-content/uploads/2017/05/slide-homepage-2-seguranca.png', '964213123') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('André Madureira', 'Segurança', 'Aveiro', 'Mediante marcação' , '5/5', '20€/h', 'Possuo licença de porte de arma' , 'https://joborganic.com/wp-content/uploads/2019/07/Security-Guard.jpg', '969873123') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Rúben Pereira', 'Passeador de cães', 'Ovar', 'Disponível' , '5/5', '5€', '-' , 'https://img.freepik.com/fotos-gratis/conteudo-jovem-bonito-na-camiseta-azul-apontando-de-lado_1262-17845.jpg?size=626&ext=jpg', '966675264') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Ana Mendes', 'Passeador de cães', 'Aveiro', 'Disponível' , '4.8/5', '4€', '-' , 'https://image.freepik.com/fotos-gratis/mulher-bonita-passeando-com-seu-cachorro-no-parque-outono_1303-17253.jpg', '969873333') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Pedro Janeiro', 'Estucador', 'Águeda', 'Disponível' , '3.5/5', 'Sujeito a orçamento', '-' , 'https://jtm-remodelacoes.com/wp-content/uploads/2019/03/estucador-de-gesso-1926586_big.jpg', '969872145') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Ivo Agostinho', 'Estucador', 'Aveiro', 'Mediante marcação' , '4.5/5', 'Sujeito a orçamento', 'Possiblilidade de deslocação na zona de Aveiro' , 'https://msestucadores.com/wp-content/uploads/2018/07/mauricio-silva-estudores_projecao-gesso.jpg', '969002145') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('São Saraiva', 'Cuidador', 'Aveiro', 'Mediante marcação' , '4.5/5', '10€/h', '-' , 'https://blog.dilaoliveira.com.br/wp-content/uploads/2018/01/Dila-Home-Care-Imagem.jpg', '966498002') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Bruno Barreto', 'Cuidador', 'Oliveira de Azeméis', 'Disponível' , '4.8/5', '9€/h', 'Possiblilidade de deslocação na zona de Aveiro' , 'https://acvida.com.br/wp-content/uploads/2019/08/Cuidador-de-idosos3.png', '969764145') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Francisco Silva', 'Pedreiro', 'Oliveira de Azeméis', 'Disponível' , '3.8/5', 'Sujeito a orçamento', '-' , 'https://us.123rf.com/450wm/kadmy/kadmy1506/kadmy150600419/41479556-construction-worker-portrait-of-mason-bricklayer-installing-red-brick-with-trowel-putty-knife-outdoo.jpg?ver=6', '969769988') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Carlos Mota', 'Pedreiro', 'Ílhavo', 'Disponível' , '4/5', 'Sujeito a orçamento', '-' , 'https://www.blogemprego.com/wp-content/uploads/empregos-pedreiro-portugal.jpg', '962249988') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Wilson Fernandes', 'Contabilista', 'Aveiro', 'Disponível' , '4/5', '-', '-' , 'https://classic105.s3.amazonaws.com/wp-content/uploads/2019/06/stroke.jpg', '962245780') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
    var sql = "INSERT INTO providers (name, service, area, state, evaluation, price, obs, image, contact)"+
    " VALUES ('Raquel Rodrigues', 'Contabilista', 'Aveiro', 'Disponível' , '4.5/5', '-', '-' , 'https://scx2.b-cdn.net/gfx/news/hires/2017/deskworker.jpg', '966733496') ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted  with success in providers table.");
    });
  });