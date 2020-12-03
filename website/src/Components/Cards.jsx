import React from 'react'
import upcloseLogo from '../assets/upcloseLogo.svg'
import crawlLogo from '../assets/crawlLogo.png'
import organizeLogo from '../assets/organizeLogo.png'
import triviaLogo from '../assets/trivia.png'
import Modals from './Modals'

const Cards = () => {
 return (
    <div class="card-group flex-1">
      {/* upclose card */}
    <div class="card">
      <img class="card-img-top" src={upcloseLogo} alt="Logo for Upclose" />
      <div class="card-body">
        <h5 class="card-title">Upclose</h5>
        <p class="card-text">Video chat with friends, with a spatial twist</p>
        <button type="button" data-toggle="modal" data-target="#upCloseModal">More</button>
      </div>
    </div>
      {/* orgainze power card */}
    <div class="card">
      <img class="card-img-top" src={organizeLogo} alt="Logo for Organize Power" />
      <div class="card-body">
        <h5 class="card-title">Organize power</h5>
        <p class="card-text">A platform for creating and sharing movements</p>
        <button type="button" data-toggle="modal" data-target="#organizeModal">More</button>
      </div>
    </div>
      {/* trivia card */}
    <div class="card">
      <img class="card-img-top" src={triviaLogo} alt="Logo for trivia" />
      <div class="card-body">
        <h5 class="card-title">Trivia</h5>
        <p class="card-text">A website to play some trivia</p>
        <button type="button" data-toggle="modal" data-target="#triviaModal">More</button>
      </div>
    </div>
      {/*crawl card */}
    <div class="card">
      <img class="card-img-top" src={crawlLogo} alt="Logo for Upclose" />
      <div class="card-body">
        <h5 class="card-title">Crawl</h5>
        <p class="card-text">Adventurous drinking and travel website</p>
        <button type="button" data-toggle="modal" data-target="#crawlModal">More</button>
      </div>
    </div>
    <Modals/>
  </div>
 )
}

export default Cards;