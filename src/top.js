export default function Top() {
  return (
    <>
      <div className="topContainer">
        <div>
          <div className="lineTop" />
          <div className="lineBottom" />
          <div className="lineRight" />
          <div className="lineLeft" />
        </div>
        <div className={`page-fade-in`}>
          <div className="kanji">脩&nbsp;眞</div>
          <div className="roman">shuma.</div>
          <div className="birthday">(327)</div>
          {/* <div class="scrollContainer">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div> */}
            {/* <span class="scrollText">Scroll down</span> */}
          {/* </div> */}
          <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </div>
    </>
  )
}
