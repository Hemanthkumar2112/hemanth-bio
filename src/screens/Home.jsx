import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Home() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  const { t } = useTranslation();

  return (
    <>
    <div class="container">
        <div class="upper">
            <div class="upper-text">Hello</div>
        </div>
        <div class="lower">
            <div class="lower-text">Hello</div>
        </div>
        </div>
    <div class="divider"></div>
    {/* <div class="container">
        <div class="upper">
            <div class="upper-text">I Am</div>
        </div>
        <div class="lower">
            <div class="lower-text">I Am</div>
        </div>
        </div>
    <div class="divider"></div> */}
    {/* <div class="container">
        <div class="upper">
            <div class="upper-text">Hemanth</div>
        </div>
        <div class="lower">
            <div class="lower-text">Hemanth</div>
        </div>
        </div>
    <div class="divider"></div> */}
    </>
  )
}

export default Home
