import { useEffect, useState } from "react"
import './AboutUs.css'

/**
 * A React component for the About Us page.
 * Fetches content from the backend and displays it.
 */

const AboutUs = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
  fetch("http://localhost:5002/about")
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.error("Failed to fetch About Us data:", err))
}, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div className="about-us">
      <h1>About Us</h1>
        <img src={data.imageUrl} alt="Me" style={{ maxWidth: "300px" }} />
      {data.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default AboutUs
