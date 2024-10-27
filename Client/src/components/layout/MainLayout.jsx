import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  const sidebarItems = [
    {
      name: "Mi Perfil",
      href: "/Perfil",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
          <path fill="#ffffff" d="M 16 4 C 12.144531 4 9 7.144531 9 11 C 9 13.394531 10.21875 15.519531 12.0625 16.78125 C 8.484375 18.304688 6 21.859375 6 26 L 8 26 C 8 21.535156 11.535156 18 16 18 C 20.464844 18 24 21.535156 24 26 L 26 26 C 26 21.859375 23.515625 18.304688 19.9375 16.78125 C 21.78125 15.519531 23 13.394531 23 11 C 23 7.144531 19.855469 4 16 4 Z M 16 6 C 18.773438 6 21 8.226563 21 11 C 21 13.773438 18.773438 16 16 16 C 13.226563 16 11 13.773438 11 11 C 11 8.226563 13.226563 6 16 6 Z"></path>
        </svg>
      ),
    },
    {
      name: "Proyecto",
      href: "/Proyecto",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
          <path fill="#ffffff" d="M8.5,8c-2.4675,0 -4.5,2.0325 -4.5,4.5v23c0,2.4675 2.0325,4.5 4.5,4.5h31c2.4675,0 4.5,-2.0325 4.5,-4.5v-18c0,-2.4675 -2.0325,-4.5 -4.5,-4.5h-15.45703l-4.4707,-3.72461c-0.98821,-0.82328 -2.2331,-1.27539 -3.51953,-1.27539zM8.5,11h7.55273c0.58557,0 1.14982,0.20536 1.59961,0.58008l3.50391,2.91992l-3.50391,2.91992c-0.44979,0.37472 -1.01404,0.58008 -1.59961,0.58008h-9.05273v-5.5c0,-0.8465 0.6535,-1.5 1.5,-1.5zM24.04297,16h15.45703c0.8465,0 1.5,0.6535 1.5,1.5v18c0,0.8465 -0.6535,1.5 -1.5,1.5h-31c-0.8465,0 -1.5,-0.6535 -1.5,-1.5v-14.5h9.05273c1.28643,0 2.53132,-0.45211 3.51953,-1.27539z"></path>
        </svg>
      ),
    },
    {
      name: "Chat con mi Mentor",
      href: "/Mentor",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
          <path fill="#ffffff" d="M 12 2 C 7.0414839 2 3 6.0414839 3 11 C 3 15.958516 7.0414839 20 12 20 L 12 23.091797 L 13.539062 22.105469 C 15.774897 20.671437 19.852053 17.575344 20.798828 12.882812 C 20.928446 12.277558 21 11.64776 21 11 C 21 6.0414839 16.958516 2 12 2 z M 12 4 C 15.877484 4 19 7.1225161 19 11 C 19 11.504182 18.94463 11.995387 18.841797 12.472656 L 18.839844 12.480469 L 18.837891 12.486328 C 18.24375 15.434377 15.971604 17.605199 14 19.138672 L 14 17.798828 L 12.875 17.939453 C 12.574056 17.977071 12.283936 18 12 18 C 8.1225161 18 5 14.877484 5 11 C 5 7.1225161 8.1225161 4 12 4 z"></path>
        </svg>
      ),
    },
    // {
    //   name: "Equipo",
    //   href: "/Equipo",
    //   icon: (
    //     <svg width="30" height="30" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    //       <path fill="#ffffff" d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"/>
    //     </svg>
    //   ),
    // },
  ];
  return (
    <div className="bg-slate-500 p-4 min-h-customHeight">
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-4">
          {/* Columna 1 (Datos personales) */}
          <Sidebar items={sidebarItems} />
          {/* Columna 2 (Contenido principal) */}
          <div className="col-span-3 bg-sky-950">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
