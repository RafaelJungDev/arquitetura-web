export default function Aviso() {
  return (
    <div className="bg-base-100 rounded p-6 max-w-7xl mt-10">
      <div className="flex flex-row gap-4 items-center">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <p className="font-bold">Jorge</p>
      </div>
      <div className="mt-8 mb-8">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quis
          culpa totam quam praesentium impedit voluptas aspernatur nihil ipsam
          aliquid, hic nam tempore nisi pariatur, illum, cupiditate atque
          molestiae exercitationem?
        </p>
      </div>
      <button className="btn btn-outline">ACTION</button>
    </div>
  )
}
