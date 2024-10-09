import { Link } from 'react-router-dom';
//import { Profile } from '../../pages/Profile';

export const Plataforma = () => {
    return (
        <div className="bg-slate-500 p-4 min-h-screen">
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-4 min-h-screen">
          
          {/* Columna 1 (Datos personales) */}
          <div className="col-span-1 bg-sky-950 p-4">
            {/* Contenido de la primera columna */}
            <div>
                <img src="./public/onboard-il.png" alt="" />
            </div>
            <li className="text-white list-none">
                <Link to={'/'}>
                    <button className="flex w-full gap-2 justify-left items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
                        <path fill="#ffffff" d="M 16 4 C 12.144531 4 9 7.144531 9 11 C 9 13.394531 10.21875 15.519531 12.0625 16.78125 C 8.484375 18.304688 6 21.859375 6 26 L 8 26 C 8 21.535156 11.535156 18 16 18 C 20.464844 18 24 21.535156 24 26 L 26 26 C 26 21.859375 23.515625 18.304688 19.9375 16.78125 C 21.78125 15.519531 23 13.394531 23 11 C 23 7.144531 19.855469 4 16 4 Z M 16 6 C 18.773438 6 21 8.226563 21 11 C 21 13.773438 18.773438 16 16 16 C 13.226563 16 11 13.773438 11 11 C 11 8.226563 13.226563 6 16 6 Z"></path>
                        </svg>
                        Mi Perfil
                    </button>
                </Link>
            </li>
            <li className="text-white list-none">
                <Link to={'/'}>
                    <button className="flex w-full gap-2 justify-left items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                        <path fill="#ffffff" d="M 12 2 C 7.0414839 2 3 6.0414839 3 11 C 3 15.958516 7.0414839 20 12 20 L 12 23.091797 L 13.539062 22.105469 C 15.774897 20.671437 19.852053 17.575344 20.798828 12.882812 C 20.928446 12.277558 21 11.64776 21 11 C 21 6.0414839 16.958516 2 12 2 z M 12 4 C 15.877484 4 19 7.1225161 19 11 C 19 11.504182 18.94463 11.995387 18.841797 12.472656 L 18.839844 12.480469 L 18.837891 12.486328 C 18.24375 15.434377 15.971604 17.605199 14 19.138672 L 14 17.798828 L 12.875 17.939453 C 12.574056 17.977071 12.283936 18 12 18 C 8.1225161 18 5 14.877484 5 11 C 5 7.1225161 8.1225161 4 12 4 z"></path>
                        </svg>
                        Chat con mi Tutor
                    </button>
                </Link>
            </li>
            <li className="text-white list-none">
                <Link to={'/'}>
                    <button className="flex w-full gap-2 justify-left items-center text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                        <path fill="#ffffff" d="M8.5,8c-2.4675,0 -4.5,2.0325 -4.5,4.5v23c0,2.4675 2.0325,4.5 4.5,4.5h31c2.4675,0 4.5,-2.0325 4.5,-4.5v-18c0,-2.4675 -2.0325,-4.5 -4.5,-4.5h-15.45703l-4.4707,-3.72461c-0.98821,-0.82328 -2.2331,-1.27539 -3.51953,-1.27539zM8.5,11h7.55273c0.58557,0 1.14982,0.20536 1.59961,0.58008l3.50391,2.91992l-3.50391,2.91992c-0.44979,0.37472 -1.01404,0.58008 -1.59961,0.58008h-9.05273v-5.5c0,-0.8465 0.6535,-1.5 1.5,-1.5zM24.04297,16h15.45703c0.8465,0 1.5,0.6535 1.5,1.5v18c0,0.8465 -0.6535,1.5 -1.5,1.5h-31c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-14.5h9.05273c1.28643,0 2.53132,-0.45211 3.51953,-1.27539z"></path>
                        </svg>
                        Proyecto
                    </button>
                </Link>
            </li>
          </div>
          
          {/* Columna 2 (Contenido principal) */}
          <div className="col-span-3 bg-sky-950">
            {/* Contenido de la segunda columna */}
            <div className="h-12 pl-4 flex justify-left items-center">
                <h2 className="text-white text-lg font-semibold">MI PERFIL</h2>    
            </div>
            <div className="bg-slate-600 p-4 min-h-screen">
                    
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
}