import Navigation from '@/components/navigation'



export default async function Wetterpage() {
    const location = "Stuttgart"
    const apiKey = process.env.apiKey
    
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`).then((response) => response.json());
    const arr = [weatherResponse]
    
    const country = arr[0].sys.country
    const loc = arr[0].name
    const temp = arr[0].main.temp
    const hum = arr[0].main.humidity
    const wspeed = arr[0].wind.speed

    /* const handleSearch = (event) => {
        setLocation(event.target.value)
    } */
   
    return (
        <div>
            <head>
               <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
            </head>
            <body>
                <h1>WETTERAPP (für Stuttgart =D)</h1>
                <Navigation/>

                <ul>
                    <li>Location: {loc}, {country}</li>
                    <li>Temperature: {temp} °C</li>
                    <li>Humidity: {hum} %</li>
                    <li>Windspeed: {wspeed} m/s</li>
                </ul>

                <input type="text" name="location" placeholder="Stadt eingeben"/>
                <input  type="submit" value="Suchen"/>

            </body>
        </div>
    )
}

