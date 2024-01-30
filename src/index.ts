import '@styles/style.scss';
import '@utils/googleAnalytics.js';

import {
	$,
	BUTTON_CALCULATE,
	FINAL_PRICE,
	FINAL_PRICE_CONTAINER,
} from '@utils/nodes';

const NUMBER_FORMAT_ARS = new Intl.NumberFormat('es-AR', {
	style: 'currency',
	currency: 'ARS',
});
const KM_IN_METERS = 1000;
const DISTANCE_BILLED = 100; // Unit meter
const TRIP_CONST = KM_IN_METERS / DISTANCE_BILLED;
const LOWERED_FLAG = 312; // Price in ARS. Change every month.
const TOKEN_PRICE = $('#token-price') as HTMLInputElement;

/**
 * Calculate the price of the trip according to distance, token price and if it is round trip.
 * @returns Price of the trip in ARS.
 */
function calculatePrice({
	distance,
	tokenPrice,
	isRoundtrip = false,
}: {
	distance: number;
	tokenPrice: number;
	isRoundtrip: boolean;
}) {
	const PRICE = LOWERED_FLAG + TRIP_CONST * distance * tokenPrice;

	return isRoundtrip ? PRICE * 2 : PRICE;
}

/** Remove the "hidden" class from the final price section. */
function showFinalPrice() {
	if (FINAL_PRICE_CONTAINER.classList.contains('hidden')) {
		FINAL_PRICE_CONTAINER.classList.remove('hidden');
	}
}

/** Verify if the token price exits in the local storage,if not, set it. */
function setTokenPriceInLocalStorage(tokenPrice: string) {
	const LOCAL_STORAGE_PRICE = localStorage.getItem('token-price');

	if (LOCAL_STORAGE_PRICE !== tokenPrice) {
		localStorage.setItem('token-price', tokenPrice);
	}
}

/** Print the final price. */
function printPrice() {
	const TOKEN_PRICE = ($('#token-price') as HTMLInputElement).value;
	const DISTANCE = ($('#distance') as HTMLInputElement).value;
	const IS_ROUNDTRIP = ($('#roundtrip') as HTMLInputElement).checked;

	const IS_EMPTY = !TOKEN_PRICE || !DISTANCE;
	const IS_NEGATIVE = Number(TOKEN_PRICE) < 0 || Number(DISTANCE) < 0;

	if (IS_EMPTY || IS_NEGATIVE) {
		return;
	}

	const PRICE = calculatePrice({
		distance: Number(DISTANCE),
		tokenPrice: Number(TOKEN_PRICE),
		isRoundtrip: Boolean(IS_ROUNDTRIP),
	});

	showFinalPrice();
	setTokenPriceInLocalStorage(TOKEN_PRICE);
	FINAL_PRICE.innerText = NUMBER_FORMAT_ARS.format(PRICE);
}

TOKEN_PRICE.value = localStorage.getItem('token-price') ?? '';
BUTTON_CALCULATE.addEventListener('click', printPrice);
globalThis.addEventListener('keyup', (event: KeyboardEvent) => {
	const KEY = event.key;

	if (KEY === 'Enter') {
		printPrice();
	}
});
