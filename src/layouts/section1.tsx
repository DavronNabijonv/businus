
import Main_about from '../page_parts/main_about'
import Main_contact from '../page_parts/main_contact'
import Main_raison from '../page_parts/main_raison'
import Main_service from '../page_parts/main_service'
import Main_slider from '../page_parts/main_slider'
import Show_case from '../page_parts/show_case'

export default function Section1() {
  return (
    <div>
      <Show_case/>
      <Main_about/>
      <Main_service/>
      <Main_raison/>
      <Main_slider/>
      <Main_contact/>
    </div>
  )
}
