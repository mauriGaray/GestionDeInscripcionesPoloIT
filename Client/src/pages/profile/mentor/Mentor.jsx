import MainLayout from '../../../components/layout/MainLayout';
//import { Link } from 'react-router-dom';

export const Mentor = () => {
    return (
        <MainLayout>
            <div className="h-12 pl-8 flex justify-left items-center">
                <h2 className="text-white text-lg font-semibold">MENTOR</h2>  
            </div>
            <div className="bg-slate-600 p-8">
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Nombre:</p>
                    <p className="flex w-full md:w-80 h-8 pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">Nombre</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Apellido:</p>
                    <p className="flex w-full md:w-80 h-8 pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">Apellido</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Tecnologías:</p>
                    <p className="flex w-full md:w-80 h-8 pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">Tecnologías</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Empresa:</p>
                    <p className="flex w-full md:w-80 h-8 pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">Empresa</p>
                </div>
                <hr className="w-full md:w-80" />
                <div>
                    <p className="text-white text-sm mt-4">Ante dudas y consultas, comunciate con tu mentor vía mail</p>
                    <button className="w-full md:w-80 min-h-10 p-2 mt-4 bg-green-600 font-semibold text-white text-sm rounded cursor-pointer">CONTACTATE CON TU MENTOR</button>
                </div>
            </div>
        </MainLayout>
    );
}