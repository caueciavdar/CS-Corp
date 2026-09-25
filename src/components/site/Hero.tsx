import Container from '../layout/Container'

const valueItems = ['Quality Work', 'Responsive Service', 'Residential & Commercial']

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Professional property services</p>
          <h1 id="hero-title">Two services.<br /><span>One commitment.</span></h1>
          <p className="hero__text">Better spaces. Brighter lives.</p>
          <a className="button button--primary" href="#contact">Get a Free Estimate <span aria-hidden="true">↗</span></a>
          <span className="hero__accent" aria-hidden="true" />
        </div>
        <div className="hero__aside" aria-label="Our property service divisions">
          <p>Residential<br />Commercial<br />Interior improvements<br />Cleaning solutions</p>
          <p className="hero__aside-callout">Same values.<br /><span>Greater possibilities.</span></p>
        </div>
        <div className="hero__footer">
          <div className="hero__values" aria-label="Our service values">
            {valueItems.map((item, index) => <span key={item}><i aria-hidden="true">0{index + 1}</i>{item}</span>)}
          </div>
          <p className="hero__temporary">Architectural background placeholder · approved photography coming soon</p>
        </div>
      </Container>
    </section>
  )
}
