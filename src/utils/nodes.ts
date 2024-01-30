/* eslint-disable padding-line-between-statements */
export const $ = (selector: string) => document.querySelector(selector);

export const BUTTON_CALCULATE = $('#button-calculate') as HTMLButtonElement;
export const FINAL_PRICE = $('#final-price') as HTMLHeadElement;
export const FINAL_PRICE_CONTAINER = $('#final-price-container') as HTMLElement;
