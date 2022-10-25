export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Licha nuestras redes sociales</h2>
          <p>
            Puedes contactarnos en nuestras redes solciales y contacto de Whatsapp
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4' >
                 <a href ={d.href}>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc' >
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                     
                  </div>
                  </a>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
