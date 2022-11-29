import * as React from 'react'
import {
  Map,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Mapboy = ({ props }) => {
  React.useEffect(() => {
    const L = require('leaflet')

    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    })
  }, [])

  function FlyMapTo() {
    const map = useMap()

    React.useEffect(() => {
      map.flyTo(props)
    }, [props])

    return null
  }

  return (
    <MapContainer center={props} zoom={13} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={props}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <FlyMapTo />
    </MapContainer>
  )
}

export default Mapboy
