import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

const Qr = (props) => {

    console.log(props);

    if (!props.busquedaUsuario) {
        var url = 'https://tarjet.site/#/'+ btoa(props.usuarioQr);
    }else{
        var url = 'https://tarjet.site/#/'+ btoa(props.buscadoQr);
    }

    return ( 
        <AnimatePresence>
            {props.showQr &&
                <motion.div 
                    className='modal' 
                    onClick={props.cerrarQr}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.1}}
                    exit={{opacity:0, transition: { duration: 200 }}}
                >
                    <motion.div className="cuerpo-modal"
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:0.7}}
                    >
                        <div className='d-flex justify-content-end'>
                            <button onClick={props.cerrarQr}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div>
                            {/* <img src={imagen} /> */}

                            <QRCodeSVG 
                                value={url}
                                style={{display: 'block', margin: 'auto'}}
                                size={170}
                            />

                            <p style={{marginBottom: '0'}}>
                                Escanea con tu smarthphone
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Qr;