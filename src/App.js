import { useEffect, useState } from 'react'
import arrow from './images/icon-arrow.svg'
import Mapboy from './Mapboy'
import pattern from './images/pattern-bg.png'

function App() {
  const [ip, setIP] = useState('')
  const [info, setInfo] = useState('')
  const [con, setCon] = useState([42, 35])
  const [customip, setCustomip] = useState('')
  const [error, setError] = useState('')

  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_Wx9jL7r7X2iZ9JTQI7lvclhsET2Dy&ipAddress=${ip}`

  const IPURL =
    'https://geo.ipify.org/api/v2/country,city?apiKey=at_Wx9jL7r7X2iZ9JTQI7lvclhsET2Dy&ipAddress='

  const fetchcustomip = async () => {
    try {
      const response = await fetch(IPURL)
      const data = await response.json()
      setIP(data.ip)
    } catch (error) {
      console.log(error)
      setError('Please input a valid Ip address')
    }
  }
  console.log(info)
  console.log(ip)
  const fetchIp = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      if (data.code === 422) {
        setError('Please input a valid IP address (click below to generate)')
        setTimeout(setError, 5000)
      } else setInfo(data)
    } catch (error) {
      setInfo('')
    }
  }
  useEffect(() => {
    if (info) {
      setCon([info.location.lat.toFixed(4), info.location.lng.toFixed(4)])
    }
  }, [info])

  const handlesubmit = () => {
    if (ip === '') {
      setError('Please input a valid IP address')
      setTimeout(setError, 4000)
    } else fetchIp()
  }
  const handleclick = () => {
    fetchcustomip()
  }

  return (
    <>
      {/* div containere */}
      <div className=''>
        <div className='relative z-10'>
          {/* image-text */}
          <div className=' backgroundd font-sans    '>
            {/* <img src={pattern} alt='' className='h-full object-center cover' /> */}
          </div>
          {/* map */}
          <div className=''>
            <Mapboy props={con} />
          </div>
        </div>
        {/* form container */}
        <div className='font-sans text-white flex flex-col justify-center items-center pt-10 space-y-6 absolute top-0 left-0 right-0 z-10 '>
          <h1 className='text-xl'> IP Address Tracker</h1>
          <div>
            <h1 className='text-center font-sans mb-2 text-sm font-bold tracking text-orange-500'>
              {error}
            </h1>
            <div className='flex justify-center items-center -gap-2'>
              <input
                type='text'
                placeholder='Please Input your Ip address here'
                className='text-xs px-6 py-2  w-60  rounded-l-md md:text-sm xl:text-base md:px-10 md:py-4 md:w-80 text-VeryDarkGray outline-none  border-none rounded-r-none'
                value={ip}
                onChange={(e) => setIP(e.target.value)}
              />
              <button
                className='bg-VeryDarkGray px-2 py-[9px] rounded-r-md md:px-3 md:py-[19px] h-full'
                onClick={() => handlesubmit()}
              >
                <img src={arrow} alt='' />
              </button>
            </div>
            <div className='font-sans text-xs mx-auto text-center mt-2 font-thin'>
              {' '}
              Don't know your IP address ? <span> </span>
              <button className='font-bold' onClick={() => handleclick()}>
                Click here
              </button>
            </div>
          </div>

          {/* result */}
          {info ? (
            <div className='rounded-md w-[268px] bg-white px-2 py-4 md:py-10 space-y-4 shadow-md md:flex md:justify-around md:items-center md:w-11/12 md:space-y-0 lg:w-3/4 '>
              {/* ip addrees*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>Ip Address</h1>
                <h1 className='text-VeryDarkGray font-bold '>{info.ip}</h1>
              </div>
              {/* gap */}
              <div className='hidden md:block border border-y-3 h-12 border-DarkGray'></div>
              {/* Locaion*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>Location</h1>
                <h1 className='text-VeryDarkGray font-bold '>
                  {info.location.region},{info.location.country}
                </h1>
              </div>
              {/* gap */}
              <div className='hidden md:block border border-y-3 h-12 border-DarkGray'></div>
              {/* time zone*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>Time Zone</h1>
                <h1 className='text-VeryDarkGray font-bold '>
                  {info.location.timezone}
                </h1>
              </div>
              {/* gap */}
              <div className='hidden md:block border border-y-3 h-12 border-DarkGray'></div>
              {/* isp*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>ISP</h1>
                <h1 className='text-VeryDarkGray font-bold '>{info.isp}</h1>
              </div>
            </div>
          ) : (
            <div className='rounded-md w-[268px] bg-white px-2 py-4 space-y-4 md:py-10 shadow-md md:flex md:justify-around md:items-center md:w-11/12 md:space-y-0 lg:w-3/4 '>
              {/* ip addrees*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>Ip Address</h1>
                <h1 className='text-VeryDarkGray font-bold '>
                  192.212.174.101
                </h1>
              </div>
              {/* gap */}
              <div className='hidden md:block border border-y-3 h-12 border-DarkGray'></div>
              {/* Locaion*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>Location</h1>
                <h1 className='text-VeryDarkGray font-bold '>
                  Brooklyn, NewYork 10001
                </h1>
              </div>
              {/* gap */}
              <div className='hidden md:block border border-y-3 h-12 border-DarkGray'></div>
              {/* time zone*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>Time Zone</h1>
                <h1 className='text-VeryDarkGray font-bold '>UTC 05:00</h1>
              </div>
              {/* gap */}
              <div className='hidden md:block border border-y-3 h-12 border-DarkGray'></div>
              {/* isp*/}
              <div className=' text-center space-y-1 md:text-left '>
                <h1 className='text-xs text-DarkGray '>ISP</h1>
                <h1 className='text-VeryDarkGray font-bold '>
                  SpaceX StarlinK
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
