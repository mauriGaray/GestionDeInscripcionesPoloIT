import MainLayout from '../../../components/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import { obtenerMentores } from '../../../services/mentor';

export const Mentor = () => {
    const [mentors, setMentors] = useState([]);
    
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        try {    
          const mentor = await obtenerMentores();
    
          setMentors(mentor);
        } catch (error) {
          console.log(error);
        }
    };

    return (

        <MainLayout>
            <div className="h-12 pl-8 flex justify-left items-center">
                <h2 className="text-white text-lg font-semibold">MENTOR</h2>  
            </div>
            <div className="bg-slate-600 p-8">
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Nombre:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">{mentors.nombre}</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Apellido:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">{mentors.apellido}</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Tecnologías:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">{`${mentors.tecnologia_principal} - ${mentors.tecnologias_secundarias}`}</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Empresa:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto pl-2 rounded-md justify-left items-center bg-slate-400 text-sm">{mentors.empresa_asociada}</p>
                </div>
                <hr className="w-full md:w-80" />
                <div>
                    <p className="text-white text-sm mt-4">Ante dudas y consultas, comunicate con tu mentor vía mail</p>
                    <button className="w-full md:w-80 min-h-10 h-auto p-2 mt-4 bg-green-600 font-semibold text-white text-sm rounded cursor-pointer">CONTACTATE CON TU MENTOR</button>
                </div>
            </div>
        </MainLayout>
    );
}