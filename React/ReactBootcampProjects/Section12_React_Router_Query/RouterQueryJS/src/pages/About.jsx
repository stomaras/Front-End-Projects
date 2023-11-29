import { Link , Outlet} from "react-router-dom"
import Wrapper from "../assets/wrappers/AboutPage"

const About = () => {
  return (
    <Wrapper>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel recusandae, animi 
          cum debitis reprehenderit at nemo nesciunt neque illum esse quas temporibus et magni beatae earum pariatur dolorum distinctio?
        </p>
    </Wrapper>
  )
}

export default About