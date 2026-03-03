import { base } from '$app/paths';

const withBase = (path: string) => {
	if (path === '/') {
		return base ? `${base}/` : '/';
	}

	return `${base}${path}`;
};

export const FRONT_PATH = {
	ROOT: withBase('/'),
	DASHBOARD: withBase('/dashboard'),
	DROPS: withBase('/drops'),
	DROPS_CLAIM: withBase('/drops/claim'),
	DROPS_CLAIM_HISTORY: withBase('/drops/claim/history'),
	CORE: withBase('/core'),
	CORE_ASSET: withBase('/core/asset'),
	CORE_RETRIEVE: withBase('/core/asset'),
	CORE_SALE: withBase('/core/sale'),
	CORE_REFERRAL: withBase('/core/referral'),
	GEAR: withBase('/gear'),
	GEAR_WRAP: withBase('/gear/wrap'),
	GEAR_LOCKUP: withBase('/gear/lockup'),
	LAUNCHPAD: withBase('/launchpad')
};
