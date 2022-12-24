import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { LocalizationProvider, DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Button, Form, Button as BsButton } from 'react-bootstrap';
import Select from 'react-select'
import Loading from '../Loading';

const splitAirportName = (schedule) => {
  console.log(schedule)
  let airportsF = []
  let airportsL = []
  for (let i = 0; i < schedule.length; i++) {
    console.log(schedule[i].from, schedule[i].dest)
    const foundF = airportsF.some(item => item.value === schedule[i].from)
    const foundL = airportsL.some(item => item.value === schedule[i].dest)
    if (!foundF) airportsF.push({ value: schedule[i].from, label: schedule[i].from })
    if (!foundL) airportsL.push({ value: schedule[i].dest, label: schedule[i].dest })
  }
  return { airportsF, airportsL }
}

const getAllAirport = (callbackState, callbackLoading) => {
  fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/v1/tickets`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then( resData => {
    if (resData.status == 200) {
      resData.json().then(res => {
        let airports = splitAirportName(res.tickets)
        callbackState(airports)
        callbackLoading(false)
        // return splitAirportName(res)
      }).catch(() => {
        callbackState({ airportsF: [], airportsL: [] })
        callbackLoading(false)
        // return {airportsF:[],airportsL:[]}
      })
    } else {
      callbackState({ airportsF: [], airportsL: [] })
      callbackLoading(false)
      // return {airportsF:[],airportsL:[]}
    }
    
  }).catch(() => {
    callbackState({ airportsF: [], airportsL: [] })
    callbackLoading(false)
    // return {airportsF:[],airportsL:[]}
  })
}

const getSchedule = (params, callback, callbackLoading) => {
  callbackLoading(true)
  let url = `${process.env.REACT_APP_API_SERVER_URL}/api/v1/get-schedule?from=${params.fromAirport}&destination=${params.destAirport}&depart=${params.dateAir.current.value}`;
  console.log(url)
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.status == 200) {
      response.json().then(res => {
        callback(res.tickets)
        callbackLoading(false)
      })
    } else {
      callback(null)
      callbackLoading(false)
    }
  }).catch(() => {
    callback(null)
    callbackLoading(false)
  })
}

// filter jadwal penerbangan
function Jadwal() {
  const [rectangleDateTimePickerValue, setRectangleDateTimePickerValue] = useState(null);
  const [rectangleDateTimePicker1Value, setRectangleDateTimePicker1Value] = useState(null);
  const [isLoaading, setLoading] = useState(false)
  const [airports, setAirports] = useState({ airportsF: [], airportsL: [] })
  const [counter, setCounter] = useState(0)

  const [typeTrip, setTypeTrip] = useState("single")
  const [fromAirport, setFrom] = useState(null)
  const [destAirport, setDest] = useState(null)
  const dateAir = useRef(null)

  // Animasi kontrol & final result data
  const [dataLoading, setDataLoading] = useState(false)
  const [schedule, setSchedule] = useState({go:[]})
  
  const handleClickTypeTrip = (evt) => {
    setTypeTrip(evt.target.value)
  }

  const handleSubmit = (evt) => {
    setDataLoading(true)
    evt.preventDefault()
    console.log(fromAirport,
      destAirport,
      dateAir.current.value);
      
      let schedule = getSchedule({
        typeTrip, fromAirport,
        destAirport,
        dateAir,
      }, setSchedule, setDataLoading)
    }

    const handleReset = () => {
      setLoading(true)
      setCounter(0)
      setSchedule(null)
    }
  
    useEffect(() => {
      if (counter == 0) {
        getAllAirport(setAirports, setLoading)
        setCounter(counter + 1)
      }
    })
    
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <div style={{backgroundImage: 'url("/assets/images/image-25@2x.png")'}}>
        <div
          className='text-center bg-image p-3 mb-4'
          style={{ backgroundImage: 'url("/assets/images/header.png")' }}
        >
          <div>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div>
                <h2 className='text-light'>Jadwal Penerbangan</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center p-3 mb-1'>
          <div className='col-sm-8 p-3'>
            <div className='card'>
              <div className='card-body'>
                {isLoaading ? (<Loading></Loading>) : (<form onSubmit={handleSubmit}>
                  <div className='row d-flex align-content-center align-items-center justify-content-center'>
                    <div className='col-md-3 my-1'>
                      <label htmlFor='jadwalTerbang' className='label'>
                        Dari
                      </label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        // defaultValue={options[0]}
                        isDisabled={false}
                        isClearable={true}
                        isSearchable={true}
                        name="color"
                        options={airports.airportsF}
                        onChange={(choice) => {
                          setFrom(choice.value)
                          console.log(choice.value);
                        }}
                      />
                    </div>
                    <div className='col-md-3 my-1'>
                      <label htmlFor='jadwalTerbang' className='label'>
                        Tujuan
                      </label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        // defaultValue={options[0]}
                        isDisabled={false}
                        isClearable={true}
                        isSearchable={true}
                        name="color"
                        options={airports.airportsL}
                        onChange={(choice) => {
                          setDest(choice.value)
                          console.log(choice.value);
                        }}
                      />
                    </div>
                    <div className='col-md-3 my-1'>
                      <label htmlFor='jadwalTerbang' className='label'>
                        depart
                      </label>
                      <input
                        ref={dateAir}
                        className='form-control'
                        type='date'
                        name=''
                        id='depart'
                        placeholder='Tanggal Keberangkatan'
                        required
                      />
                    </div>
                    <div className='col-4 my-4'>
                      <input
                          type='submit'
                          value={'Cari Jadwal'}
                          className='btn btn-primary col-md-12'
                        />
                    </div>
                    <div className='col-4 my-4'>
                      <input
                          onClick={handleReset}
                          type='submit'
                          value={'Hapus Input'}
                          className='btn btn-danger col-md-12'
                        />
                    </div>
                  </div>
                </form>)}
              </div>
            </div>
          </div>
        </div>
        {/* {dataLoading ? (
          <Loading></Loading>
        ) : ( */}
        <div className='d-flex justify-content-center'>
          <div className='col-12 col-lg-5 p-3'>
            <div className='card'>
              <div className='table table-responsive'>
                <thead className='table-primary'>
                  <tr className=' text-center'>
                    <th scope='col'>Flight</th>
                    <th>Keberangkatan</th>
                    <th>Waktu Keberangkatan</th>
                    <th>Kedatangan</th>
                    <th>Waktu Kedatangan</th>
                    <th>Nomor Penerbangan</th>
                  </tr>
                </thead>
                {console.log(schedule)}

                <tbody>
                  {schedule === null ? (<p>hjvjbjh</p>) : (
                    schedule.go.map((schedule, index) => {
                      return (
                        <tr key={index} className='text-center'>
                          <td>{schedule.name}</td>
                          <td>{schedule.from}</td>
                          <td>{schedule.date_air}</td>
                          <td>{schedule.dest}</td>
                          <td>{schedule.estimated_up_dest}</td>
                          <td>{schedule.flight_number}</td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>

    </LocalizationProvider>
  )
}

export default Jadwal