import { ProfileCard } from './components'
import './App.css'

function App() {

  return (
    <main className=' bg-bgDefault min-h-screen'>
      <aside className=' md:w-[30%] p-4 flex flex-col gap-4 items-center sticky'>
        <ProfileCard/>

      </aside>
      <section className='w-[70%]'>
        <p>hello</p>
      </section>
    </main>
  )
}

export default App
