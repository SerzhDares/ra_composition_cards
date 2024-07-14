interface cardProps {
    imgSrc?: string,
    cardTitle: string,
    cardText: string
}

export default function Card({imgSrc, cardTitle, cardText}: cardProps) {
  return (
    <div className="card">
      {imgSrc ? <img src={imgSrc} alt="img" className="image"/> : imgSrc=''}
      <h3 className="title">{cardTitle}</h3>
      <p className="text">{cardText}</p>
      <button className="btn">Go somewere</button>
    </div>
  )
}
