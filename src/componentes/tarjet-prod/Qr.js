import { motion, AnimatePresence } from 'framer-motion';

import codigoQr from '../../assets/codigoQr.png';

const Qr = (props) => {

    if (!props.busquedaUsuario) {
        var imagen = 'tarjet.site/imagenes/Qr/'+props.imagenQr;
    }else{
        var imagen = 'tarjet.site/imagenes/Qr/'+props.buscadoQr;
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
                        <div>
                            <img src={imagen} />
                            <p>
                                Escanea con tu smarthphone
                            </p>
                        </div>
                        <div>
                            <hr/>
                            <button onClick={props.cerrarQr}>
                                Listo
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Qr;