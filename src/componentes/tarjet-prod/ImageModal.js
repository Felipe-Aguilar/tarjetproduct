import { motion } from "framer-motion";

const ImageModal = ({imgModal, cerrarImagen}) => {

    return ( 
        <div className='popup-imagenes'>
            <motion.div 
                className='cuerpo'
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
            >
                <div className='encabezado'>
                    <button onClick={cerrarImagen}>
                        <i className="bi bi-x-circle"></i>
                    </button>
                </div>
                <div>
                    <img src={imgModal} className='img-fluid'/>
                </div>
            </motion.div>
        </div>
    );
}

export default ImageModal;