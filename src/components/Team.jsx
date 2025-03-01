export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Nuestros Paquetes</h2>
          <p>
            Podemos ofrecerte paquetes para consumo propio o para que te conviertas en uno de nuestros distribuidores. haz click sobre el paquete que te interese
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <a href= {d.url}>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
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
