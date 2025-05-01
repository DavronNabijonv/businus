import './main_slider.css';

export default function Main_slider() {
  return (
    <div>
        <div className="flex gap-8 bg-[#001c2c] p-10 min-h-screen items-center justify-center">
  {/* <!-- Card with hover effect --> */}
  <div className="relative group bg-[#0a1c2f] text-white p-6 rounded-3xl w-[300px] transition-all duration-300">
    {/* <!-- Shadow effect on hover --> */}
    <div className="absolute top-0 left-0 w-full h-full rounded-3xl border-[6px] border-cyan-400 z-[-1] 
                translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

    <div className="text-5xl text-cyan-400">❝</div>
    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
      We develop websites with the high quality, from corporate websites to web applications.
      We develop websites with the high quality, from corporate websites to web applications.
      We develop websites with the high quality, from corporate websites to web applications.
    </p>

    {/* <!-- Author --> */}
    <div className="flex items-center gap-4 mt-6">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-12 h-12 rounded-full"/>
      <div>
        <p className="font-semibold">Leslie</p>
        <p className="font-semibold">Alexander</p>
      </div>
    </div>
  </div>

  {/* <!-- Card without hover effect (default) --> */}
  <div className="bg-[#0a1c2f] text-white p-6 rounded-3xl w-[300px]">
    <div className="text-5xl text-cyan-400">❝</div>
    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
      We develop websites with the high quality, from corporate websites to web applications.
      We develop websites with the high quality, from corporate websites to web applications.
      We develop websites with the high quality, from corporate websites to web applications.
    </p>

    {/* <!-- Author --> */}
    <div className="flex items-center gap-4 mt-6">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-12 h-12 rounded-full"/>
      <div>
        <p className="font-semibold">Leslie</p>
        <p className="font-semibold">Alexander</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
