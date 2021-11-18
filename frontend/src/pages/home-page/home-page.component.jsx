import React, {useState, useEffect} from 'react'
import './home-page.styles.scss';
import propiedades from '../../data/propiedades'
import PropertiesList from '../../components/properties-list'

function HomePage() {
  const [properties, setProperties] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch('./data/propiedades.json')
    // .then(res => res.json())
    // .then(resData => {
    //   setLoading(false)
    //   setProperties(resData)
    //   console.log("se hizo el fetch correctamente")
    // })
    setLoading(false)
    setProperties(propiedades)
  }, [])

  return (
    <div className={!!properties ? "home-page-container" : "home-page-container--only-text"}>
      {loading && <h1>Loading...</h1>}
      {!loading && !!properties 
        ? <PropertiesList properties={properties} />
        : <h1>Comienza agregando tu primera propiedad</h1>}
    </div>
  );
}

export default HomePage;
