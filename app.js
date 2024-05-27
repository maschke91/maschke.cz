class WebCountdown extends HTMLElement {
    constructor() {
      super();
  
      // Získání parametrů
      const date = this.getAttribute("date");
      const time = this.getAttribute("time");
      const title = this.getAttribute("title");
  
      // Nastavení počáteční hodnoty
      this._currentTime = new Date(date + "T" + time);
      this._intervalId = null;

      this._headingElement = this.querySelector(".countdown__heading");
      this._headingElement.textContent = title;
  
      this._countdownElement = this.querySelector(".countdown__timer");

      // Spuštění odpočtu
      this._startCountdown();
    }
  
    _startCountdown() {
      this._intervalId = setInterval(() => {
        // Výpočet zbývajícího času
        const now = new Date();
        const remainingTime = this._currentTime - now;
  
        // Zobrazení zbývajícího času
        if (remainingTime > 0) {
          this._updateCountdown(remainingTime);
        } else {
          // Zastavení intervalu a zobrazení textu po vypršení
          clearInterval(this._intervalId);
          this._expiredCountdown();
        }
      }, 1000);

      this.classList.add("inited");
    }
  
    _updateCountdown(remainingTime) {

      const dayElem = this.querySelector("[data-days]");
      const hoursElem = this.querySelector("[data-hours]");
      const minutesElem = this.querySelector("[data-minutes]");
      const secondsElem = this.querySelector("[data-seconds]");

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      dayElem.textContent = days;
      hoursElem.textContent = hours;
      minutesElem.textContent = minutes;
      secondsElem.textContent = seconds;
    }

    _expiredCountdown() {
        const expiredText = this.getAttribute("expired-text");
        const titleELe = this.querySelector(".countdown__heading");
        titleELe.textContent = expiredText;
    }
  }
  
  customElements.define("web-countdown", WebCountdown);
  