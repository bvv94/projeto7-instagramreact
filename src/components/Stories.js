export default function Stories() {

    const stories = [
        { imgperfil: "./assets/img/9gag.svg", nomeperfil: "9gag" },
        { imgperfil: "./assets/img/meowed.svg", nomeperfil: "meowed" },
        { imgperfil: "./assets/img/barked.svg", nomeperfil: "barked" },
        { imgperfil: "./assets/img/respondeai.svg", nomeperfil: "respondeai" },
        { imgperfil: "./assets/img/nathanwpylestrangeplanet.svg", nomeperfil: "nathanwpylestrangeplanet" },
        { imgperfil: "./assets/img/filomoderna.svg", nomeperfil: "filomoderna" },
        { imgperfil: "./assets/img/wawawicomics.svg", nomeperfil: "wawawicomics" }
    ]

    return (
        <div className="stories">
            {stories.map((st) => <Story imgperfil={st.imgperfil} nomeperfil={st.nomeperfil} key={st.nomeperfil}/>)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
            <div className="story">
                <div className="imagem">
                    <img src={props.imgperfil} alt={props.nomeperfil}/>
                </div>
                <div className="usuario">
                    {props.nomeperfil}
                </div>
            </div>
    )
}