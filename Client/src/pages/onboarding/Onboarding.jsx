import { Link } from 'react-router-dom';

export const Onboarding = () => {
    return (
        <div className="bg-[url('./public/bg-image.png')] onboarding p-8 flex flex-col justify-center items-center w-full min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">
            <div className="mb-4 flex flex-col justify-center items-left w-full max-w-7xl">
                <h1 className="lg:mt-12 sm:text-4xl lg:text-5xl text-white font-extrabold">PROCESO DE INSCRIPCIÓN</h1>
                <h2 className="mt-4 sm:text-2xl lg:text-3xl text-white">Sumate al mundo de la tecnología</h2>
            </div>
            <div className="grid grid-cols-2 max-w-7xl">
                <div className="flex flex-col justify-center items-left">
                    <h3 className="sm:text-lg lg:text-2xl text-white">Inscribite a los cursos disponibles de tecnología</h3>
                    <Link to={'/Login'}>
                        <button className="w-32 h-10 p-2 mt-4 bg-green-600 font-semibold text-white text-sm rounded cursor-pointer">COMENZAR</button> 
                    </Link> 
                </div>
                <div>
                    <img src="./public/onboard-il.png" alt="" />
                </div>
            </div>
        </div>
    )
}

//       {/* <div className="max-w-7xl">
//                 <h2 className="text-2xl text-white">¡Conocé nuestros cursos disponibles!</h2>    
//             </div> */}