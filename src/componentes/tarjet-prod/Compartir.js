import { motion, AnimatePresence } from "framer-motion";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon } from "react-share";

const Compartir = () => {

    const url = window.location.href;

    return ( 
        <div className="modal-share">
            <div className="cuerpo-share d-flex justify-content-around">
                <div>
                    <FacebookShareButton url={url}>
                        <FacebookIcon size={40} round={true}/>
                    </FacebookShareButton>
                </div>
                <div>
                    <WhatsappShareButton url={url}>
                        <WhatsappIcon size={40} round={true}/>
                    </WhatsappShareButton>
                </div>
                <div>
                    <TelegramShareButton url={url}>
                        <TelegramIcon size={40} round={true}/>
                    </TelegramShareButton>
                </div>
            </div>
        </div>
    );
}

export default Compartir;