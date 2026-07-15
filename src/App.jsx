import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [ weather, setWeather ] = useState(null)
  const [ muted, setMuted ] = useState(true)
  const videoRef = useRef(null)


  // fetch
  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      console.log(lat, lon)


      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=weather_code,temperature_2m`)

      .then((res) => res.json())
      .then((data) => setWeather(data.current))
    })


  }, [])


  // Weather
  const getWeather = (code) => {
    if (code === 0) return 'Clear weather ☀️'
    if (code <= 3) return 'Sunny to cloudy 🌤️'
    if (code <= 48) return 'Cloudy ☁️'
    return 'Rainy 🌧️'
  }

  // video
  const getVideo = (code) => {
    if (code === 0) return '/sunny.mp4'
    if (code <= 3) return '/sunny-to-cloudy.mp4'
    if (code <= 48) return '/cloudy.mp4'
    return '/rain.mp4'
  }


  // Display
  return (
    <div>
    <div className="info">
    <img src="/title-removebg-preview.png" alt="Weather App" className="title" />
      <p>{weather ? getWeather(weather.weather_code) : 'Loading...'}</p>
      <p>Temperature: {weather? weather.temperature_2m : 'Loading...'}°C</p>
    </div>
      <div>
        <video ref={videoRef} key={weather ? getVideo(weather.weather_code) : '/rain.mp4'} src={weather ? getVideo(weather.weather_code) : '/rain.mp4'} autoPlay loop muted={muted} playsInline />
        <button className="sound-btn" onClick={() => {
          setMuted(!muted)
          videoRef.current.play()
        }}>
          {muted ? '🔇 Sound On' : '🔊 Sound Off'}
        </button>
      </div>
    </div>
  )
}

export default App