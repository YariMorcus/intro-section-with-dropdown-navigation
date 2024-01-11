class Navigation {
  #body = document.body;
  #toggleButton = document.querySelector('#js-nav__toggle');
  #navMenu = document.querySelector('#js-nav__menu');

  constructor() {
    // Check if JS is available. If yes, add .js to <body>
    // If not available, return prematurely to prevent errors
    if (!this.#addJSclass()) return;

    // Listen for click event on toggle button
    this.#toggleButton.addEventListener(
      'click',
      this.#navController.bind(this)
    );
  }

  /**
   * Add .js class to <body> when JS is available.
   * This class is used as hook to add CSS specific styles.
   *
   * @returns {boolean} true of JS is available, otherwise false
   */
  #addJSclass() {
    this.#body.classList.add('js');

    return this.#body.classList.contains('js') ? true : false;
  }

  /**
   * Deliver mobile menu toggle functionality
   * @returns {undefined}
   */
  #navController() {
    // Show mobile menu
    this.#navMenu.classList.toggle('is-active');
    this.#toggleButton.classList.toggle('menu-expanded');
  }
}

const nav = new Navigation();
