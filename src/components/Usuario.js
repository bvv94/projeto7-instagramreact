import React from "react"

export default function Usuario() {

    const [nome, setNome] = React.useState("catanacomics")
    const [img, setImg] = React.useState("assets/img/catanacomics.svg")

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={TrocarImg} src={img} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={TrocarUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )

    function TrocarUsuario() {
        let novonome = prompt("Qual seu nome?")
        if ((novonome!==null)&&(novonome!==undefined)&&(novonome!=="")) {
            setNome(novonome)
        }
        else{
            alert("Nome Inválido. Tente novamente!")
        }
    }

    function TrocarImg() {
        let novaimg = prompt("Informe a URL: ")
        
        if ((novaimg!==null)&&(novaimg!==undefined)&&(novaimg!=="")){
            setImg(novaimg)
        }

        else{
            alert("Imagem Inválida. Tente novamente!")
        }
    }
}

