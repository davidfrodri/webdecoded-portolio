/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../../assets/img/Me/me.PNG'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(150 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['Front-end Developer', 'Software Engineer', 'UI/UX Designer']
  const period = 500

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(100)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className='interactive-text'>{'Hi! I\'m David,'} <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img className='me' src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
