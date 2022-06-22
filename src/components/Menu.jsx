import {CONTENT_INFO} from "../data";
import MenuItem from "./MenuItem";

const Menu = ({setCurrentIndex}) => {
  return (
    <section className="aside-menu">
      {
        Object.keys(CONTENT_INFO).map((item, index) => {
          return <MenuItem index={index} title={item} setCurrentIndex={setCurrentIndex} key={index} />
        })
      }
    </section>
  )
}
export default Menu
