import preloaderSelectors from './preloaderSelectors.ts';

describe('preloader', () => {
	describe('preloaderSelectors', () => {
		it('getIsLoading should return correct value', () => {
			const state = { isLoading: true };
			expect(preloaderSelectors.getIsLoading(state)).toBe(true);
		});
	});
});
