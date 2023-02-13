import { useState } from "react"

export default function Post(props) {

    const [sal, setSal] = useState("bookmark-outline")
    const [curt, setCurt] = useState("heart-outline")
    const [cor, setCor] = useState("")
    const [curtido, setCurtido] = useState(false)
    let [nCurt, setnCurt] = useState(11456)


    console.log(props)
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
                <img onDoubleClick={() => Addcurt()} data-test="post-image" src={props.imgp} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={cor} data-test="like-post" onClick={() => Curtir()} name={curt}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => Salvar()} name={sal}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgcurtida} alt={props.nomecurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.nomecurtida}</strong> e <strong data-test="likes-number">outras {nCurt} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )

    function Curtir(curtidas) {

        console.log("entrou curtir")
        console.log(curt)

        if ((curt === "heart-outline") && (curtido == false)) {
            setCurt("heart")
            setCor("vermelho")
            setnCurt(nCurt + 1)
            setCurtido(true)
        }
        else {
            setCurt("heart-outline")
            setCor("")
            setnCurt(nCurt - 1)
            setCurtido(false)
        }
    }

    function Salvar() {
        if (sal === "bookmark-outline") {
            setSal("bookmark")
        }
        else {
            setSal("bookmark-outline")
        }
    }
    function Addcurt() {
        if (!curtido) {
            setCurt("heart")
            setCor("vermelho")
            setnCurt(nCurt + 1)
            setCurtido(!curtido)
        }
    }


}