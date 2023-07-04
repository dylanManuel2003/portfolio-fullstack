"use client"
import emailjs from '@emailjs/browser';
import {useState, useRef} from 'react';

const Contact = () => {
    const form = useRef();
    const [send, setSend] = useState(false)
    const {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} = process.env

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return <section className="h-screen w-full flex flex-col">
    <div className="w-[80%] mx-auto text-center ">
        <h2 className="text-[36px] font-bold mb-5 ">Contactame</h2>
        <p className="text-[24px] font-medium ">¿Tienes un proyecto y quieres ayuda?¿Te gustaria charlar sobre tecnología?</p>
    </div>
    <div className="w-[80%] mx-auto flex mt-10">
        <form ref={form} onSubmit={sendEmail} className="mx-auto w-[80%] h-[500px] px-5 py-3 flex flex-col bg-white border-[1px] border-black ">
            <h4 className="mb-10 text-center">Enviar mail</h4>
            <input name="name" type="text" placeholder="Nombre" className="bg-[#eee] shadow-md shadow-[#00000010] my-2 px-3 py-2 rounded-md" />
            <input name="asunto" type="text" placeholder="Asunto" className="bg-[#eee] shadow-md shadow-[#00000010] my-2 px-3 py-2 rounded-md"  />
            <input name="email" type="email" placeholder="Email" className="bg-[#eee] shadow-md shadow-[#00000010] my-2 px-3 py-2 rounded-md"  />
            <textarea name="message" placeholder="Escrtibe aquí tu mensaje"  className="bg-[#eee] shadow-md shadow-[#00000010] my-2 px-3 py-2 rounded-md" ></textarea>
            <button type="submit" className=" mx-auto px-5 py-3 mt-2 rounded-[8px] border-[1px] border-[#18A0FB] text-[#18A0FB] hover:bg-[#eee] font-semibold ">Enviar</button>
            {send && <span className='text-[#05F100]'>form sent successfully!</span>}
        </form>
    </div>
</section>;
;
};
  
export default Contact;
  