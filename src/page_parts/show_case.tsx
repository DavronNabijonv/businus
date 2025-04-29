import React from 'react'
import '../App.css'
import TextTranslater from '../components/textTranslater'
import Btn from '../components/btn'

export default function Show_case() {
  return (
    <div>
        <div className="container relative ">

            <div className="grp_left ">
                <div className="with_span">
                    <TextTranslater txt='head-your' />
                    <TextTranslater txt='head-growth' />
                </div>
                <TextTranslater txt='head-our' />
                <TextTranslater txt='head-txt' />
                <div className="btn_grp">
                    <Btn txt='started' btn_styles='' />
                    <Btn txt='see-work' btn_styles='' />
                </div>
            </div>

            <div className="grp_right"></div>

        </div>
    </div>
  )
}
