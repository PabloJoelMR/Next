import Navigation from '@/components/navigation'




export default function WetterApp() {
  

  return (
  <div>
    <head> 
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
    </head>
    <main className="main">
    <h1 className="header">Willkommen bei der WetterApp</h1>
    <Navigation/>
      <div>
       <a> Hier könnt ihr euch nach <br/>dem aktuellen Wetter erkundigen </a><br/><br/><br/>
        <a>Einfach auf WETTER klicken und los geht's</a>
      </div>

      <div>
        <a>
          <h2></h2>
        </a>

        <a>
          <h2></h2>
        </a>

      </div>
    </main>
  </div>
  )
}
