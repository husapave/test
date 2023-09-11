/* Test file */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Addon JS Works!!!');
    const products1 = document.querySelector('#products-1');
    const productsHeading1 = document.querySelector('.homepage-products-heading-1');
    const benefitBanner = document.querySelector('.benefitBanner');
    benefitBanner.parentNode.insertBefore(productsHeading1, benefitBanner);
    benefitBanner.parentNode.insertBefore(products1, benefitBanner);
});
