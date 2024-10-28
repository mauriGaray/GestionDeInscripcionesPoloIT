import MainLayout from '../../../components/layout/MainLayout';
import React, { useEffect, useState } from 'react';
import { obtenerProyectos } from '../../../services/proyecto';

export const Proyecto = () => {

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        try {    
            const project = await obtenerProyectos();
            setProjects(project);

        } catch (error) {
          console.log(error);
        }
    };

    return (
        <MainLayout>
            <div className="h-12 pl-8 flex justify-left items-center">
                <h2 className="text-white text-lg font-semibold">PROYECTO</h2>  
            </div>
            <div className="bg-slate-600 p-8">
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Titulo del Proyecto:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto p-2 rounded-md justify-left items-center bg-slate-400 text-sm">{projects.nombre}</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Descripción:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto p-2 rounded-md justify-left items-center bg-slate-400 text-sm">{projects.descripcion}</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Mentor:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto p-2 rounded-md justify-left items-center bg-slate-400 text-sm">Tecnologías</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Equipo:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto p-2 rounded-md justify-left items-center bg-slate-400 text-sm">Equipo</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Fecha de Inicio:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto p-2 rounded-md justify-left items-center bg-slate-400 text-sm">{projects.fecha_}</p>
                </div>
                <div className="flex flex-col mb-4 text-white">
                    <p className="text-sm">Fecha de Fin:</p>
                    <p className="flex w-full md:w-80 min-h-8 h-auto p-2 rounded-md justify-left items-center bg-slate-400 text-sm">{projects.fecha_finalizacion}</p>
                </div>
            </div>
        </MainLayout>
    );
}