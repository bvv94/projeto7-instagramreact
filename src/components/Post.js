import { useState } from "react"

export default function Post(props) {

    const [sal, setSal] = useState("false")
    const [curt, setCurt] = useState("false")

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
                        <ion-icon data-test="like-post" onClick={() => Curtir(props.curtido)} name= {props.curtido ? "heart" : "heart-outline"}></ion-icon>
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

function Curtir(curtiu){
    // {curtiu ? false : true}
    console.log("entrou curtir")
    if(curtiu){
        setCurt(false)
    }
    else{
        setCurt(true)
    }
}


}