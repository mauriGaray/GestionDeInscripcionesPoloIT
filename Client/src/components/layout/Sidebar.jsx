import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { items } = props;

  return (
    <div className="col-span-1 bg-sky-950 p-4">
      {/* Imagen que solo se muestra a partir de md */}
      <div className="hidden md:block mb-6">
        <img src="/onboard-il.png" alt="sidebarDraw" className="mx-auto" />
      </div>
      <ul className="flex flex-col items-center md:items-start">
        {items.map((item, index) => (
          <li key={index} className="list-none mb-4">
            <Link to={item.href}>
              <button className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 w-16 md:w-full text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium">
                <div className="w-8 h-8 flex justify-center items-center">
                  {item.icon}
                </div>
                {/* Texto oculto hasta pantallas grandes */}
                <div className="hidden md:block">{item.name}</div>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
