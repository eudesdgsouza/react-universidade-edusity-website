import React from "react";
import "./Contact.css";
import msgIcon from "../../assets/msg-icon.png"
import emailIcon from "../../assets/mail-icon.png"
import phoneIcon from "../../assets/phone-icon.png"
import locationIcon from "../../assets/location-icon.png"
import whiteArrow from "../../assets/white-arrow.png"
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e74231fe-1368-4d44-b502-76b0e8aee615");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) { 
            console.log(data);
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
    return (
        <div className="contact">
            {/* ------------------------Contact Left  */}
            <div className="contact-col">
                <h3>Envie-nos uma mensagem <img src={msgIcon} alt="msg" /></h3>
                <p>
                    Sinta-se à vontade para entrar em contato através do formulário de contato ou encontre nosso contato
                    informações abaixo. Seus comentários, perguntas e sugestões são
                    importante para nós, pois nos esforçamos para fornecer um serviço excepcional aos nossos
                    comunidade universitária.
                </p>
                <ul>
                    <li> <img src={emailIcon} alt="icons" />contato@edusite.dev</li>
                    <li> <img src={phoneIcon} alt="icons" />+55 87-99999-9999</li>
                    <li> <img src={locationIcon} alt="icons" />Pernambuco, <br /> Brasil</li>
                </ul>
            </div>

            {/* ------------------------Contact Right  */}

            <div className="contact-col">

                <form onSubmit={onSubmit}>
                    <label>Seu nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" required />
                    <label>Número de telefone</label>
                    <input type="tel" name="phone" placeholder="Digite seu número de celular" required />
                    <label>Escreva aqui sua mensagem..!</label>
                    <textarea name="message" rows="6" placeholder="Digite sua mensagem..!" required></textarea>
                    <button type="submit" className="btn dark-btn">Enviar agora
                        <img src={whiteArrow} alt="arrow" />
                    </button>

                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
