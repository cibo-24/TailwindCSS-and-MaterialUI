import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    // className'e btn ile bir class verip daha sonra index.css'de bu class ile ortak bir çalışma yapılabilir.
    <>
      <body className='bg-white h-full flex-col'>
        <div className='h-15 bg-gray-100 w-full flex justify-between items-center px-5'>
          <a href='https://github.com/cibo-24' className='text-xl font-medium inline-flex items-center text-blue-900' >
            .cibo24
            <span className='text-sm text-gray-400 ml-2'>2.4.0</span>
          </a>
          <form action='' className='w-1/2 '>
            <input type='text' placeholder='Search' className='w-full bg-gray-300 h-10 px-3 placeholder-gray-600 rounded-full' />
          </form>
          <a href='#' className='bg-blue-700 text-white h-10 w-32 inline-flex items-center justify-center p-5 rounded-full hover:bg-blue-400'>Login</a>
        </div>
        <div>
          <main className="flex-auto flex">
            <aside className='flex flex-col  w-64 border-r p-2 border-gray-200 divide-solid divide-gray-800 divide-y space-y-5'>
              <nav >
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">Anasayfa</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">Akış</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">Keşfet</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">Makaleler</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">Soru & Cevap</a>
              </nav>

              <nav>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">HTML</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">CSS</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">JavaScript</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">React</a>
                <a href='#' className="flex items-center h-10 px-3 rounded text-sm text-blue-400 font-medium hover:bg-gray-100 transition-color">Python</a>
              </nav>

              {/* Dark Mode */}
              <div className="m-4 p-4">
              <button className="bg-gray-700 h-10 flex items-center justify-center rounded-xl text-white text-sm p-2 hover:bg-gray-600 transition-colors">
              <svg className='fill-current text-white mr-5 hover:text-blue-500' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
              Dark Mod</button>
            </div>
              



            </aside>
            <section className='flex-auto py-10 px-20'>
              <div className='mx-auto max-w-screen-xl'>
                <h2 className='text-3xl font-bold mb-4 leading-relaxed text-blue-700'>History, Purpose and Usage</h2>
                <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                </p>

                <div className='grid mt-5 grid-cols-10 gap-7'>
                  <div className='col-span-2'>
                    <a href='#' className='flex flex-col px-4 py-7 items-center rounded'>
                      <span className='mb-4 w-24 h-24 border border-orange-500 rounded-full grid place-items-center bg-orange-500 opacity-80'>
                      <svg className='fill-current text-red-700' xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/></svg>
                      </span>
                      <span className='flex h-7 px-5 text-white bg-red-700 rounded items-center'>Pety</span>
                    </a>
                  </div>
                  <div className='col-span-2'>
                  <a href='#' className='flex flex-col px-4 py-7 items-center rounded'>
                      <span className='mb-4 w-24 h-24 border border-blue-500 rounded-full grid place-items-center bg-blue-500 opacity-80'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M554-120q-54 0-91-37t-37-89q0-76 61.5-137.5T641-460q-3-36-18-54.5T582-533q-30 0-65 25t-83 82q-78 93-114.5 121T241-277q-51 0-86-38t-35-92q0-54 23.5-110.5T223-653q19-26 28-44t9-29q0-7-2.5-10.5T250-740q-10 0-25 12.5T190-689l-70-71q32-39 65-59.5t65-20.5q46 0 78 32t32 80q0 29-15 64t-50 84q-38 54-56.5 95T220-413q0 17 5.5 26.5T241-377q10 0 17.5-5.5T286-409q13-14 31-34.5t44-50.5q63-75 114-107t107-32q67 0 110 45t49 123h99v100h-99q-8 112-58.5 178.5T554-120Zm2-100q32 0 54-36.5T640-358q-46 11-80 43.5T526-250q0 14 8 22t22 8Zm244-460q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                      </span>
                      <span className='flex h-7 px-5 text-white bg-blue-700 rounded items-center'>Undread</span>
                    </a>
                  </div>
                  <div className='col-span-2'>
                    <a href='#' className='flex flex-col px-4 py-7 items-center rounded'>
                      <span className='mb-4 w-24 h-24 border border-green-500 rounded-full grid place-items-center bg-green-500 opacity-80'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="m334-80-74-30 58-141q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l238 97-160 60v60l440 280 40 200h-80l-40-80H560v160h-80v-160h-80L334-80Zm66-240h353l-63-40H400q-66 0-113-47t-47-113h80q0 33 23.5 56.5T400-440h165L320-596v-124q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720v160q0 100 70 170t170 70ZM240-680q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 320Z"/></svg>
                      </span>
                      <span className='flex h-7 px-5 text-white bg-green-700 rounded items-center'>Raven</span>
                    </a></div>
                  <div className='col-span-2'>
                  <a href='#' className='flex flex-col px-4 py-7 items-center rounded'>
                      <span className='mb-4 w-24 h-24 border border-purple-500 rounded-full grid place-items-center bg-purple-500 opacity-80'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M380-80q-75 0-127.5-52.5T200-260q0-35 17-64.5t63-75.5q6-6 11.5-12.5T306-430q-51-78-78.5-163.5T200-760q0-58 21-89t59-31q57 0 102 55t68 101q9 20 16.5 40.5T480-641q6-22 13.5-42.5T511-724q22-46 67-101t102-55q38 0 59 31t21 89q0 81-27.5 166.5T654-430q9 11 14.5 17.5T680-400q46 46 63 75.5t17 64.5q0 75-52.5 127.5T580-80q-45 0-72.5-10L480-100l-27.5 10Q425-80 380-80Zm0-80q23 0 46-5.5t43-16.5q-11-5-20-17t-9-21q0-8 11.5-14t28.5-6q17 0 28.5 6t11.5 14q0 9-9 21t-20 17q20 11 43 16.5t46 5.5q42 0 71-29t29-71q0-18-10-35t-30-34q-14-12-23-21t-29-34q-29-35-48-45.5T480-440q-41 0-60.5 10.5T372-384q-20 25-29 34t-23 21q-20 17-30 34t-10 35q0 42 29 71t71 29Zm40-130q-8 0-14-9t-6-21q0-12 6-21t14-9q8 0 14 9t6 21q0 12-6 21t-14 9Zm120 0q-8 0-14-9t-6-21q0-12 6-21t14-9q8 0 14 9t6 21q0 12-6 21t-14 9ZM363-489q11-8 25-14t31-11q-2-48-14.5-95.5T373-696q-19-40-42-67.5T285-799q-2 6-3.5 15.5T280-760q0 68 21.5 138T363-489Zm234 0q40-63 61.5-133T680-760q0-14-1.5-23.5T675-799q-23 8-46 35.5T587-696q-18 39-30.5 86.5T541-514q15 4 29 10.5t27 14.5Z"/></svg>
                      </span>
                      <span className='flex h-7 px-5 text-white bg-purple-700 rounded items-center'>Cruelty </span>
                    </a>
                  </div>
                  <div className='col-span-2'>
                  <a href='#' className='flex flex-col px-4 py-7 items-center rounded'>
                      <span className='mb-4 w-24 h-24 border border-fuchsia-400 rounded-full grid place-items-center bg-fuchsia-400 opacity-80'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M440-120q-100 0-170-70t-70-170v-240l200 200-56 57-64-64v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-167h80v167q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Zm200-440q17 0 28.5-11.5T680-600q0-17-11.5-28.5T640-640q-17 0-28.5 11.5T600-600q0 17 11.5 28.5T640-560Zm0-40Z"/></svg>
                      </span>
                      <span className='flex h-7 px-5 text-white bg-fuchsia-700 rounded items-center'>Fish</span>
                    </a>
                  </div>
                </div>
                    <div className='bg-twitter rounded-2xl text-white p-7 border hover:bg-blue-400'>
                        <h6 className='font-bold text-xl'>X's Follow TailwindCSS</h6>
                        <p><br/>“Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. "</p>
                        <a href='#' className='bg-white h-11 px-5 inline-flex items-center rounded text-black mt-4 hover:bg-gray-200'>Follow</a>
                    </div>

              </div>
            </section>
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
