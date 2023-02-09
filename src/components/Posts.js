export default function Posts() {

    const posts = [
        {
            nomeperfil: "meowed",
            imgperfil: "./assets/img/meowed.svg",
            imgpost: "./assets/img/gato-telefone.svg",
            imgcurtida: "assets/img/respondeai.svg",
            nomecurtida: "respondeai",
            curtidas: 101945,
            salvo: false,
            curtido: true
        },
        {
            nomeperfil: "barked",
            imgperfil: "assets/img/barked.svg",
            imgpost: "assets/img/dog.svg",
            imgcurtida: "assets/img/adorable_animals.svg",
            nomecurtida: "adorable_animals",
            curtidas: 157935,
            salvo: true,
            curtido: false
        }
    ]

    return (
        <div className="posts">
            {posts.map((p)=> <Post key={p.nomeperfil} nome={p.nomeperfil} imgpf={p.imgperfil} 
                                imgp={p.imgpost} imgcurtida={p.imgcurtida} curtidas={p.curtidas}
                                nomecurtida={p.nomecurtida} curtido={p.curtido} salvo={p.salvo}/>)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgpf} alt={props.nome} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={props.imgp} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" name= {props.curtido ? "heart" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={props.salvo ? "bookmark" : "bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtida} alt={props.nomecurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.nomecurtida}</strong> e <strong data-test="likes-number">outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}