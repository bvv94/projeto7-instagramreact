import React from "react"

export default function Usuario() {

    const [nome, setNome] = React.useState("catanacomics")

    return (
        <div class="usuario">
            <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={Trocar} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )

    function Trocar() {
        let novonome = prompt("Qual seu nome?")
        
        setNome(novonome)
    }
}

