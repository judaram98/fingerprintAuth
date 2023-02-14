import Logo from "../../Assets/Images/Logo.png";

const Index = () => {
  let HtmlIndex = (
    <form
      action=""
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <img src={Logo} alt="" className="h-32 mb-5" />
      <input
        type="text"
        placeholder="Usuario"
        className="bg-slate-100 rounded-lg p-2 text-center my-1"
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="bg-slate-100 rounded-lg p-2 text-center my-1"
      />
      <button className="bg-emerald-200 rounded-lg py-2 px-7 my-1 text-emerald-700">
        Ingresar
      </button>
    </form>
  );
  return HtmlIndex;
};

export default Index;
