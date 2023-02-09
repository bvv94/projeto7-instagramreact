const nome = "catanacomics"

export default function Usuario() {



    return (
        <div class="usuario">
            <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={() => Trocar()} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Trocar() {
    nome = prompt("Qual seu nome?")
    return (
        <></>
    )
}