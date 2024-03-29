class Navigation {
  #body = document.body;
  #toggleButton = document.querySelector('#js-nav__toggle');
  #navMenu = document.querySelector('#js-nav__menu');
  #navMenuLinks = document.querySelectorAll('.js-nav__menu-link');

  constructor() {
    /*
      Check if JS is available. If yes, add .js to <body>
      If not available, return prematurely to prevent errors
    */
    if (!this.#addJSclass()) return;

    /*
      Listen for click event on toggle button to
      deliver mobile navigation toggle functionality
    */
    this.#toggleButton.addEventListener(
      'click',
      this.#navController.bind(this)
    );

    // Deliver dropdown functionality for specific menu items
    this.#navMenuLinks.forEach(navMenuLink => {
      navMenuLink.addEventListener('click', e => {
        const dropdown = e.target.classList.contains('is-dropdown');

        if (!dropdown) return;
        this.#dropdownController(navMenuLink);
      });
    });
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
    this.#body.classList.toggle('overlay');
    this.#navMenu.classList.toggle('is-active');
    this.#toggleButton.classList.toggle('menu-expanded');

    // Indicate to assistive technologies if menu is expanded or not
    this.#toggleAriaExpanded(this.#toggleButton);
  }

  /**
   * Deliver dropdown functionality for specific menu items
   * @returns {undefined}
   */
  #dropdownController(curDropdownLink) {
    curDropdownLink.classList.toggle('is-dropdown--expanded');

    // Indicate to assistive technologies if menu is expanded or not
    this.#toggleAriaExpanded(curDropdownLink);
  }

  /**
   * @returns {undefined}
   */
  #toggleAriaExpanded(el) {
    el.getAttribute('aria-expanded') === 'true'
      ? el.setAttribute('aria-expanded', false)
      : el.setAttribute('aria-expanded', true);
  }
}

const nav = new Navigation();
