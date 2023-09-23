export default function SideMenu() {
  return (
    <div className="h-full bg-neutral p-4">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pesquisar por nome</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pesquisar por Cliente</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <h2 className="my-4">Gravidade</h2>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Alto risco</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Baixo Risco</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Moderado</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-white"
            checked
          />
        </label>
      </div>
    </div>
  )
}
