import { motion, AnimatePresence } from "framer-motion";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon } from "react-share";

const Compartir = (props) => {

    const url = window.location.href;

    return ( 
        <AnimatePresence>

            <div className="modal-share" onClick={props.cerrarCompartir}>
                <div className="cuerpo-share">
                    <div className="d-flex justify-content-around">
                        <div>
                            <FacebookShareButton url={url}>
                                <FacebookIcon size={50} round={true}/>
                            </FacebookShareButton>
                        </div>
                        <div>
                            <WhatsappShareButton url={url}>
                                <WhatsappIcon size={50} round={true}/>
                            </WhatsappShareButton>
                        </div>
                        <div>
                            <TelegramShareButton url={url}>
                                <TelegramIcon size={50} round={true}/>
                            </TelegramShareButton>
                        </div>
                    </div>
                    <div>
                        <hr/>
                        <button>
                            Listo
                        </button>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default Compartir;